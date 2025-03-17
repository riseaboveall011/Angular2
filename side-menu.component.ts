import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  menuItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Profile', link: '/profile' },
    { label: 'Settings', link: '/settings' },
    { label: 'Messages', link: '/messages' },
    { label: 'Notifications', link: '/notifications' },
    { label: 'Logout', link: '/logout' }
  ];
}
