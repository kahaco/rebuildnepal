# Install NVM 
Download and install nvm if you already do not have it installed

    https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    source ~/.bashrc

# Install iojs

    nvm install iojs

# Install dependencies

    npm install

# Running the project 
**NOTE** Default port is 10100

Assumes iojs to be the default environment. If you want to run in node, change ```npm start```
script in ```package.json``` from ``` node /bin/www ``` to ```node --harmony /bin/www```

## Dev mode
    npm run dev-build

## Normal mode
    npm start

## Run in Prod
    npm run prod
