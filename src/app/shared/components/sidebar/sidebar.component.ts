import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgStyle } from '@angular/common';
import { NAME_APP_SHORT } from '../../../config/config';
import { OptionMenu } from '../../model/option_menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgStyle],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  nombreApp = NAME_APP_SHORT;
  @Output() sidebarToggle = new EventEmitter<void>();
  @Input() optionsMenu: OptionMenu[] = [];

  onToggleSidebar(): void {
    this.sidebarToggle.emit();
  }
}
