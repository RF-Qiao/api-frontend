export default [
  { path: '/user',
    layout: false,
    routes: [
      { name:"登录", path: '/user/login', component: './User/Login' },
      {name: '注册账号', path: '/user/register', component: './User/Register',},
    ] },
  { path: '/welcome', icon: 'smile', component: './Welcome', name: "欢迎页" },
  {
    path: '/admin',
    icon: 'crown',
    name: "管理页",
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/user' },
      { icon: 'table', path: '/admin/user', component: './Admin/User', name: "用户管理" },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
