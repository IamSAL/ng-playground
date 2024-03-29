import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), importProvidersFrom(FormBuilder), importProvidersFrom(CommonModule), provideAnimationsAsync()],
};
