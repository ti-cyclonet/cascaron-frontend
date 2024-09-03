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
  isSidebarVisible = false;
  isLargeScreen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.isLargeScreen = window.innerWidth >= 992;
    }
  }

  ngOnInit(): void {
    this.optionsMenu = [
      { id: '1', name: 'Home', description: 'Home page', url: '/home', icon: 'house-fill', type: 'link', idMPather: '0', order: '1', idApplication: '3' },
      { id: '2', name: 'Users', description: 'User management', url: '/users', icon: 'people-fill', type: 'link', idMPather: '0', order: '2', idApplication: '3' },
      { id: '3', name: 'Requests', description: 'Request management', url: '/requests', icon: 'file-text-fill', type: 'link', idMPather: '0', order: '3', idApplication: '3' },
      { id: '4', name: 'Settings', description: 'Application settings', url: '/setup', icon: 'gear-fill', type: 'link', idMPather: '0', order: '4', idApplication: '3' }
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
