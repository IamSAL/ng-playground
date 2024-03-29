import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormBuilder } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), FormBuilder],
};
