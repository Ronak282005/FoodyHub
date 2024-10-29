import Body from './components/Body'
import Header from './components/Header'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import Error from './components/Error.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import "./App.css"

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

const appRoute = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contactus",
        element : <ContactUs/>
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu/>
      }
    ],
    errorElement : <Error/>
  }
])

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(<RouterProvider router={appRoute}/>)

