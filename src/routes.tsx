import Login from './components/login'
import Layout from './layout/_layout'

export const routes = [
  {
    path: '/login',
    element: <Layout />,
    children: [
      {
        path: '/calendar',
        element: <></>,
        index: true,
      },
    ],
  },
]
