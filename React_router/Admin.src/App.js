import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React,{lazy,Suspense} from "react";

import Login from './Pages/Login'
import Index from './Pages/Index'
import Add_categories from './Pages/Add_categories'
import Header from './Components/Header'
import Add_customer from './Pages/Add_customer'
import Add_contact from './Pages/Add_contact'
import Add_order from './Pages/Add_order'
import Add_product from './Pages/Add_product'
import Footer from './Components/Footer'
import Add_user from './Pages/Add_user'
import Add_emp from './Pages/Add_emp'

import Add_blog from './Pages/Add_blog'


import Add_admin from './Pages/Add_admin'
import Add_cart from './Pages/Add_cart'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manage_emp=React.lazy(() => import('./Pages/Manage_emp'));
const Manage_blog=React.lazy(() => import('./Pages/Manage_blog'));
const Manage_admin=React.lazy(() => import('./Pages/Manage_admin'));
const Edit_cart=React.lazy(() => import('./Pages/Edit_cart'));
const Edit_admin=React.lazy(() => import('./Pages/Edit_admin'));
const Edit_blog=React.lazy(() => import('./Pages/Edit_blog'));
const Edit_product=React.lazy(() => import('./Pages/Edit_product'));
const Edit_user=React.lazy(() => import('./Pages/Edit_user'));
const Edit_customer=React.lazy(() => import('./Pages/Edit_customer'));
const Edit_contact=React.lazy(() => import('./Pages/Edit_contact'));
const Edit_categories=React.lazy(() => import('./Pages/Edit_categories'));
const Edit_emp=React.lazy(() => import('./Pages/Edit_emp'));
const Manage_user=React.lazy(() => import('./Pages/Manage_user'));
const Manage_product=React.lazy(() => import('./Pages/Manage_product'));
const Manage_order=React.lazy(() => import('./Pages/Manage_order'));
const Manage_cart=React.lazy(() => import('./Pages/Manage_cart'));
const Manage_customer=React.lazy(() => import('./Pages/Manage_customer'));
const Manage_contact=React.lazy(() => import('./Pages/Manage_contact'));
const Manage_categories=React.lazy(() => import('./Pages/Manage_categories'));





function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
    <BrowserRouter>
      <Routes>

        <Route path='/' index element={<><Login /></>}></Route>
        <Route path='/dashboard' element={<><Index /><Footer /></>}></Route>
        <Route path='/Add_categories' element={<><Header /><Add_categories /><Footer /></>}></Route>
        <Route path='/Add_customer' element={<><Header /><Add_customer /><Footer /></>}></Route>
        <Route path='/Add_contact' element={<><Header /><Add_contact /><Footer /></>}></Route>
        <Route path='/Add_order' element={<><Header /><Add_order /><Footer /></>}></Route>
        <Route path='/Add_product' element={<><Header /><Add_product /><Footer /></>}></Route>
        <Route path='/Add_user' element={<><Header /><Add_user /><Footer /></>}></Route>
        <Route path='/Add_emp' element={<><Header /><Add_emp /><Footer /></>}></Route>
        <Route path='/Add_blog' element={<><Header /><Add_blog /><Footer /></>}></Route>
        <Route path='/Add_cart' element={<><Header /><Add_cart /><Footer /></>}></Route>
        <Route path='/Add_admin' element={<><Header /><Add_admin /><Footer /></>}></Route>
        <Route path='/Manage_categories' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} ><Manage_categories /><Footer /></Suspense> </>}></Route>
        <Route path='/Manage_contact' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Manage_contact /><Footer /></Suspense> </>}></Route>
        <Route path='/Manage_customer' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Manage_customer /><Footer /></Suspense> </>}></Route>
        <Route path='/Manage_cart' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Manage_cart /><Footer /></Suspense> </>}></Route>
        <Route path='/Manage_order' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Manage_order /><Footer /></Suspense> </>}></Route>
        <Route path='/Manage_product' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Manage_product /><Footer /></Suspense> </>}></Route>
        <Route path='/Manage_user' element={<><Header />  <Suspense fallback = { <div className="spinner-border" />} > <Manage_user /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_emp/:id' element={<><Header />  <Suspense fallback = { <div className="spinner-border" />} > <Edit_emp /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_categories/:id' element={<><Header />  <Suspense fallback = { <div className="spinner-border" />} > <Edit_categories /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_contact/:id' element={<><Header />  <Suspense fallback = { <div className="spinner-border" />} > <Edit_contact /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_customer/:id' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Edit_customer /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_user/:id' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} ><Edit_user /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_product/:id' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Edit_product /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_blog/:id' element={<><Header />  <Suspense fallback = { <div className="spinner-border" />} > <Edit_blog /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_admin/:id' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Edit_admin /><Footer /></Suspense></>}></Route>
        <Route path='/Edit_cart/:id' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Edit_cart /><Footer /></Suspense></>}></Route>
        <Route path='/Manage_emp' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Manage_emp /><Footer /></Suspense></>}></Route>
        <Route path='/Manage_blog' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Manage_blog /><Footer /></Suspense></>}></Route>
        <Route path='/Manage_admin' element={<><Header /> <Suspense fallback = { <div className="spinner-border" />} > <Manage_admin /><Footer /></Suspense></>}></Route>






      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App