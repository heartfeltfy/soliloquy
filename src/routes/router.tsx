import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Layout = lazy(() => import('@layout/Layout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    )
  }
])

const Root = () => {
  return <RouterProvider router={router} />
}

export default Root
