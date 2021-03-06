// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  gatewayServerUrl: 'http://localhost:8028',
  eurekaServerUrl: 'http://localhost:8027',
  configServerUrl: 'http://localhost:8029',
  eurekaDashboardUrl: 'http://localhost:8027',
  zipkinDashboardUrl: 'http://localhost:9411',
  kibanaDashboardUrl: 'http://localhost:5601',
  rabbitMqDashboardUrl: 'http://localhost:15672'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
