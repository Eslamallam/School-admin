import {ApplicationConfig} from '@loopback/core';
import {SchoolAdminApplication} from './application';

export {SchoolAdminApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new SchoolAdminApplication(options);
  await app.boot();
  await app.migrateSchema(); //create all tables when app run
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
