const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeShared',

  exposes: {
  './DataTableComponent': './src/app/shared-ui/data-table/data-table.component.ts',
  './NotFoundComponent': './src/app/shared-ui/not-found/not-found.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
