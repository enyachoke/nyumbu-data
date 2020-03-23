import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Forms = React.lazy(() => import('./components/Forms/Forms'));
const CreateForm = React.lazy(() => import('./components/Forms/CreateForm'));
const EditForm = React.lazy(() => import('./components/Forms/EditForm'));
const EditFormSchema = React.lazy(() => import('./components/Forms/EditFormSchema'));
const NewDataRecord = React.lazy(() => import('./components/DataRecords/NewDataRecord'));
const EditDataRecord = React.lazy(() => import('./components/DataRecords/EditDataRecord'));
const DataRecords = React.lazy(() => import('./components/DataRecords/DataRecords'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: '' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/forms', exact: true, name: 'Forms', component: Forms },
  { path: '/forms/new', exact: true, name: 'New Form', component: CreateForm },
  { path: '/forms/:id/edit', exact: true, name: 'Edit Form', component: EditForm },
  { path: '/forms/:id/schema', exact: true, name: 'Form Schema', component: EditFormSchema },
  { path: '/data-records', exact: true, name: 'Data Records', component: DataRecords },
  { path: '/data-records/:formId/new', exact: true, name: 'New Data Record', component: NewDataRecord },
  { path: '/data-records/:formId/edit/:id', exact: true, name: 'Edit Data Record', component: EditDataRecord },
];

export default routes;
