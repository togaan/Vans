
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import About from './Pages/About';
import Home from './Pages/Home';
import Vans, { loader as vansLoader } from './Pages/Vans/Vans';
import Login, { loginLoader, action as loginAction } from './Pages/Loging';
import CreateAccount, { action as createAccountAction } from './Pages/CreateAccount';
import Logout from './Pages/Logout';
import VanDetail, { loader as vansDetailLoader } from './Pages/Vans/VanDetail';
import Layout from './Components/Layaout';
import HostLayout from './Components/HostLayout';
import Dashboard, { loader as dashboadedLoader } from './Pages/HostPages/Dashboard';
import HostIncome from './Pages/HostPages/HostIncome';
import HostVans, { loader as hostvansLoader } from './Pages/HostPages/HostVnas';
import HostReviews from './Pages/HostPages/HostReviews';
import HostVanDetail, { loader as hostvansDetailLoader } from './Pages/HostPages/hostVansDetail/HostVanDetail';
import HostVanDetailsDetails from './Pages/HostPages/hostVansDetail/HostvanDatailsDetails';
import HostVanDetailsPricing from './Pages/HostPages/hostVansDetail/HostVandetailsPricing';
import HostVanDetailsPhotos from './Pages/HostPages/hostVansDetail/HostVanDetailsPhotos';
import EmptyPage from './Pages/EmptyPage';
import Error from './Components/Error';
import { requireAuth } from "./utils"



const router = createBrowserRouter(createRoutesFromElements(
  
  <Route element={<Layout />}>
    <Route path='*' element={<EmptyPage/>} />
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} loader={loginLoader} action={loginAction} />
    <Route path='createAcount' element={<CreateAccount />} action={createAccountAction} />
    <Route path='Logout' element={<Logout />}  />
    <Route path='vansPage' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path='vansPage/:id' element={<VanDetail />} loader={vansDetailLoader} errorElement={<Error />}/>

    <Route  path='host' element={<HostLayout/>}>
      <Route index element={<Dashboard />}loader={dashboadedLoader}/>
      <Route path='income' element={<HostIncome />} loader={async ({request}) => await requireAuth(request)} />
      <Route path='vans' element={<HostVans />} loader={hostvansLoader} errorElement={<Error />}/>
      <Route path='reviews' element={<HostReviews />} loader={async ({request}) => await requireAuth(request)}/>
      
      <Route path='vans/:id' element={<HostVanDetail />} loader={hostvansDetailLoader} errorElement={<Error />}>
        <Route index element={<HostVanDetailsDetails />} loader={async ({request}) => await requireAuth(request)}/>
        <Route path='pricing' element={<HostVanDetailsPricing />} loader={async ({request}) => await requireAuth(request)} />
        <Route path='photos' element={<HostVanDetailsPhotos />} loader={async ({request}) => await requireAuth(request)} />
      </Route>

    </Route>
  </Route>
  
))
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
