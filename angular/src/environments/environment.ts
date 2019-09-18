// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseURI : "http://13.235.226.107:8500/survey-service/api/v1",
  loginBaseURI : "http://13.235.226.107:8500/login-authentication-service",
  signUpBaseURI : "http://13.235.226.107:8500/user-registration-service",
  responseBaseURI : "http://13.235.226.107:8500/user-response-service/api/v1",
  mailURI:"http://13.235.226.107:8500/mail-service",
  dialogflow: {
    chatbot: '9dbdf5bcbf4e4b16949d4ee5c9a4fc9c'
  }
};
// var url="http://172.23.238.200:8091/api/v1/response"
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
