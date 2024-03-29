// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCHRLOibxIQtzGaZ7Pi4SFaxFyOqp0H7oU",
    authDomain: "sesh-music.herokuapp.com/",
    databaseURL: "https://tnteventsapp.firebaseio.com/",
    projectId: "TNTeventsapp",
    storageBucket: "tnteventsapp.appspot.com",
    messagingSenderId: "37018668289"
  }
};
