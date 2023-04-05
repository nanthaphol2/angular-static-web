import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AppConfigService } from './appconfig.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config = 'config env';
  settings: any;
  constructor(private appService: AppService, private appConfigService: AppConfigService) {}

  ngOnInit(): void {
    this.getAppSettings();
  }

  getAppSettings() {
    this.settings = this.appConfigService.settings;
    this.config = this.settings.config_url;
  }
}
