import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {


  appConfig: any;
  menuItems: any[];
  progressBarMode: string;
  currentLang: string;

  constructor() {
    // this.appConfig = appConfig;
  }

  ngOnInit() {
    // this.loadMenus();
  }


  // private loadMenus(): void {
  //   this.menuItems = [
  //     {link: '/', name: _('home')},
  //     {link: '/' + AppConfig.routes.heroes, name: _('heroesList')}
  //   ];
  // }
}
