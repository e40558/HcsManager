import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'dashboard',
        submenu: null
    },
    {
      text: 'Countries',
      icon: 'glyphicon-flag',
      route: '/countries',
      submenu: null
  },
    {
      text: 'Setting',
      icon: 'glyphicon-wrench',
      route: '/setting',
      submenu: null
  }
  ];