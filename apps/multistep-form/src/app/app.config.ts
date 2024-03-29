import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), importProvidersFrom(FormBuilder), provideAnimations(), importProvidersFrom(CommonModule)],
};
