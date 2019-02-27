import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { observable } from 'rxjs';

import { AppSetting } from './../config/appSetting';

@Injectable()
export class AppLoadService {
  constructor(private httpClient: HttpClient, private titleService: Title) { }

  getSettings(): Promise<any> {
    const promise = this.httpClient.get('./../../assets/config.json')
      .toPromise()
      .then(settings => {
        console.log(`Settings from API: `, settings);

        AppSetting.serviceUrl = settings[0].serviceUrl;

        console.log(`APP_SETTINGS: `, settings);

        return AppSetting;
      });
      console.log(promise);
    return promise;
  }
  setTitle() {
    const promise = this.httpClient.get('./../../assets/config.json')
      .toPromise()
      .then(titles => {
        AppSetting.title = titles[0].title;
        this.titleService.setTitle(titles[0].title);
        return titles;
      });
    return promise;
  }
}
