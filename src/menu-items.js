const menuItems = {
  items: [
    {
      id: 'navigation',
      title: '',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          breadcrumb:"Overview",
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/default'
        },
        {
          id: 'project',
          title: 'Project',
          type: 'item',
          icon: 'feather icon-github',
          url: ''
        },
        {
          id: 'tasks',
          title: 'Tasks',
          type: 'item',
          icon: 'feather icon-list',
          url: ''
        },
        {
          id: 'dash',
          title: 'dashboard',
          type: 'item',
          icon: 'feather icon-cpu',
          url: ''
        },
        {
          id: 'time',
          title: 'Time log',
          type: 'item',
          icon: 'feather icon-clock',
          url: ''
        },
        {
          id: 'resource',
          title: 'Resource mgnt',
          type: 'item',
          icon: 'feather icon-shield',
          url: ''
        },
        {
          id: 'user',
          title: 'Users',
          type: 'item',
          icon: 'feather icon-users',
          url: ''
        },
        {
          id: 'projecttemp',
          title: 'Project template',
          type: 'item',
          icon: 'feather icon-command',
          url: ''
        },
        {
          id: 'setting',
          title: 'Menu setting',
          type: 'item',
          icon: 'feather icon-settings',
          url: ''
        },
      ]
    },
  ]
};

export default menuItems;
