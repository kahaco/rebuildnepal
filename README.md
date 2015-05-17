# Rebuild Nepal
Help Nepal rebuild by matching donors, service providers and those who need help.

To get npm to install all dependencies, run
``` bash
npm install
```
on your checkout directory.

To run in dev mode. Runs a watcher that watches for changes in javascript files,
plus also boots up the express application.
``` bash
npm run dev-build
```

To run in prod.
``` bash
npm run prod
```

Development tips:
Run app with 
``` bash
DEBUG=express:* npm run dev-build
```
to see all the internal logs used in Express. You can also speciy more than one debug namespace. [More info on debug here](https://github.com/visionmedia/debug)
