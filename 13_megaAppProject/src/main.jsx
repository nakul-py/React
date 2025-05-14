import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from '../src/store/store.js'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login} from './components/index.js'

import AddPost from './pages/AddPost'
import AllPosts from './pages/AllPosts.jsx'
import SignUp from './pages/SignUp.jsx'
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: (
        <AuthLayout authentication={false}>
          <Login/>
        </AuthLayout>
      )
    },
    {
      path: '/signup',
      element: (
        <AuthLayout authentication={false}>
          <SignUp/>
        </AuthLayout>
      )
    },
    {
      path: '/all-posts',
      element: (
        <AuthLayout authentication={true}>
          {' '}
          <AllPosts/>
        </AuthLayout>
      )
    },
    {
      path: '/add-posts',
      element: (
        <AuthLayout authentication={true}>
          {' '}
          <AddPost/>
        </AuthLayout>
      )
    },
    {
      path: '/edit-post/:id',
      element: (
        <AuthLayout authentication>
          {' '}
          <EditPost/>
        </AuthLayout>
      )
    },
    {
      path: '/post/:id',
      element: (
        <Post/>
      )
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>    
    </Provider>
  </StrictMode>
)
