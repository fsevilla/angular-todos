// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: 'http://localhost:8000/api/',
  authApi: 'http://localhost:8000/',
  client: {
  	client_id: 2,
  	grant_type: 'password',
  	client_secret: 'EaNWQo6E4VgK2DqN8IMOeCapnzU2VOEhyI4McdGx'
  }
};
