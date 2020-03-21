import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Forms = React.lazy(() => import('./components/Forms/Forms'));
const CreateForm = React.lazy(() => import('./components/Forms/CreateForm'));
const EditForm = React.lazy(() => import('./components/Forms/EditForm'));
const ViewForm = React.lazy(() => import('./components/Forms/ViewForm'));
const NewSchema = React.lazy(() => import('./components/Forms/NewSchema'));
const EditSchema = React.lazy(() => import('./components/Forms/EditSchema'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: '' },
  { path: '/dashboard', exact: true,  name: 'Dashboard', component: Dashboard },
  { path: '/forms', exact: true,  name: 'Forms', component: Forms },
  { path: '/forms/new', exact: true, name: 'New Form', component: CreateForm },
  { path: '/forms/:id', exact: true, name: 'View Form', component: ViewForm },
  { path: '/forms/:id/edit', exact: true, name: 'Edit Form', component: EditForm },
  { path: '/forms/:id/schema/new', exact: true, name: 'New Schema', component: NewSchema },
  { path: '/forms/:id/schema/:schema_id/edit', exact: true, name: 'Edit Schema', component: EditSchema },
];

export default routes;
