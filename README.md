working through learncode.academy "react JS tutorial" on youtube
starting with my finally cobbled together server with backend to mongo.
To start:
1. get mongo running
2. run the server (nodemon to update on change)
   unixy: npm start
   dos  : npm run dos-start
3. run webpack to watch for front end changes
   webpack --watch

`Will` uses class instead of react className. This is useful (for him) as he wanted
to copy his html en-masse without having to rename all the class attribs to className.
This is done by using the react-html-attrs package in webpack.config.js:
module.exports = {
  // ...
  module : {
    loaders : [
      {
        // ...
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties',
                                            'transform-decorators-legacy'],
        }
      }
    ]
  }
  // ...
}

On the way here ...
trying to run backend api with webpack
finding process:
lsof -i tcp:$PORT

run webpack for frontend
npm start

run server as normal
npm run start-api

init comments in mongodb:
mongo scripts/init-mongo.js


react getting started:
https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Setting-Up-A-React-ES6-Webpack-Project

running webpack for react from cloud9:
```
webpack-dev-server --port $PORT --host $IP  --content-base dist/
```

*note $port and $ip seem to be already defined in workspace.*

react sass template.

point browser at:
https://react-sass-template-knik.c9users.io/



     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--,
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    -----------------------------------------------------------------


Welcome to your Node.js project on Cloud9 IDE!

Based on the cloud9 ide nodejs chat server starting template.
