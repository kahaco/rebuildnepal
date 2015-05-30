# Rebuild Nepal
Help Nepal rebuild by matching donors, service providers and those who need help.

# Development Notes 
Read [dev_setup.md](docs/dev_setup.md) to setup your dev environment

# Isomorphic Rendering

How isomorphic rendering work's for the app, consider a component heirarchy like below:

```
    <App> //Wrapper component
        <Hero/> //fetches it's own data
        <ProjectList/> //fetches it's own data
        <Sidebar/> //fetches it's own data
        <Footer/> // Just render some html
    </App>
```
For the above tree to render successfully on the server, the server needs to resolve the data dependency for all the React Components in the tree before it can call ``` React.renderToString(<App flux={flux}/>)```, because ```React.renderToString``` is a synchronous api and data fetching as we know is an async process.

To get around the limitation this is what we do:

1. Call ```React.renderToString(<App flux={flux}/>``` on server. This is the initial pass and over here we collect data dependencies for all the component's in tree heirarchy. Each component define's it's data dependency in ```componenWillMount``` [```componentWillMount``` get's called on server side before render is called]. For e.g to get project's list in ```<ProjectList/>``` component, in it's ```componentWillMount```, we do:

    ```
        componentWillMount() {
            return this.props.flux.getActions('projects').fetch();
        }
    ```

2. In the above code we are basically triggering a action to get project's list
from ```Project Actions```, which looks like below:

    ```
    fetch() {
		const promise = (resolve) => {
			this.alt.getActions('requests').start();
			setTimeout(() => {
				this.actions.fetchSuccess(data.projects);
				this.alt.getActions('requests').success();
				return resolve();
			}, 300);
		}
		// This is important
		this.alt.resolve(promise);
	}
    ```
    Important bit here is ```this.alt.reslove(promise)```, on the browser, this tries to resolve the promise immediately, but on the server this pushes the promise to a list of promises that needs to be resolved. Based on our example of the component heirarchy above, on the first pass/render we basically capture all promises for the data requested inside ```componentWillMount```, of component's in the component heirarchy/tree. Once we have resolved all the data dependencies, we do another render with ```React.renderToString(<App flux={flux}/>)``` on the server, this time with a flux store with all the data dependencies resolved. And then we simply pass the rendered html to the browser.

3. There are limitations to this approach. For e.g:
    ```
        <TopLevelComponent> //Wrapper
            <DataFetch> //Does a data fetch
                <ChildDataFetch/> //Child data fetch
            </DataFetch>
        </TopLevelComponent>
    ```
    In the above component heirarchy we cannot resolve the data dependency of the ```<ChildDataFetch/>``` component, if it relies on the data dependency of the ```<DataFetch/>``` component being resolved. Explore this on your own.

4. Important bits.
    * Define data dependency for your component in ```componentWillMount```
    * And resolve the promise for data fetch using ```this.alt.resolve(promise)```
		when implementing it in your ```Action``` to make it compatible on the server side.
