const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeHome',

  exposes: {
    './routes': './src/app/app.routes.ts',
  },

  remotes:{
    mfeShared:'http://localhost:4300/remoteEntry.js'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
