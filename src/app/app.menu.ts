import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
  {
      text: 'Dashboard',
      icon: 'glyphicon-dashboard',
      route: '/authenticated/dashboard',
      submenu: null
  },
  {
    text: 'Locations',
    icon: 'glyphicon-dashboard',
    route: '/authenticated/locations',
    submenu: null
 },
 {
    text: 'Provider',
    icon: 'glyphicon-dashboard',
    route: '/authenticated/provider',
    submenu: null
 },
 {
  text: 'Consumers',
  icon: 'glyphicon-dashboard',
  route: '/authenticated/consumers',
  submenu: null
},

  {
      text: 'Maintenance',
      icon: 'glyphicon-wrench',
      route: null,
      submenu: [
          {
              text: 'Country List',
              icon: 'glyphicon-th-list',
              route: '/authenticated/country-maint',
              submenu: null
          },
          {
              text: 'Settings',
              icon: 'glyphicon-cog',
              route: '/authenticated/settings',
              submenu: null
          }
      ]
  }
];
