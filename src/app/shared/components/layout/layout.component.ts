import { Component, HostListener, OnInit } from '@angular/core';
import { OptionMenu } from '../../model/option_menu';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export default class LayoutComponent implements OnInit {
  optionsMenu: OptionMenu[] = [];
  isSidebarVisible = true;
  isLargeScreen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.isLargeScreen = window.innerWidth >= 992;
    }
  }

  ngOnInit(): void {
    this.optionsMenu = [
      { id: '1', name: 'homeShotra', description: 'Home', url: '/home', icon: 'house-fill', type: 'menu_principal', idMPather: '0', order: '1', idApplication: '3' },
      { id: '2', name: 'usersShotra', description: 'Users', url: '/users', icon: 'people-fill', type: 'menu_principal', idMPather: '0', order: '2', idApplication: '3' },
      { id: '3', name: 'requestsShotra', description: 'Requests', url: '/requests', icon: 'file-text-fill', type: 'menu_principal', idMPather: '0', order: '3', idApplication: '3' },
      { id: '4', name: 'settingsShotra', description: 'Settings', url: '/setup', icon: 'gear-fill', type: 'menu_principal', idMPather: '0', order: '4', idApplication: '3' }
      // { id: '5', name: 'usersshotracreate', description: 'add', url: '/users', icon: 'person-add', type: 'submenu_n1', idmpather: '2', order: '1', idapplication: '3' },
      // { id: '6', name: 'usershotradelete', description: 'delete', url: null, icon: 'person-dash', type: 'submenu_n1', idmpather: '2', order: '2', idapplication: '3' }
    ];
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (typeof window !== 'undefined') {
      this.isLargeScreen = window.innerWidth >= 992;
    }
  }
}
