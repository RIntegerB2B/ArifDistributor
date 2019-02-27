
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppLoadService } from './app-load.service';

export function setTitle(appLoadService: AppLoadService) {
  return () => appLoadService.setTitle();
}

export function getSettings(appLoadService: AppLoadService) {
  return () => appLoadService.getSettings();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: setTitle, deps: [AppLoadService], multi: true },
    { provide: APP_INITIALIZER, useFactory: getSettings, deps: [AppLoadService], multi: true },
    Title
  ]
})
export class AppLoadModule {

}