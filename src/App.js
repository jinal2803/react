import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Index from './Pages/Index'
import Add_categories from './Pages/Add_categories'
import Header from './Components/Header'
import Add_customer from './Pages/Add_customer'
import Add_contact from './Pages/Add_contact'
import Add_order from './Pages/Add_order'
import Add_product from './Pages/Add_product'
import Manage_categories from './Pages/Manage_categories'
import Footer from './Components/Footer'
import Manage_contact from './Pages/Manage_contact'
import Manage_customer from './Pages/Manage_customer'
import Manage_cart from './Pages/Manage_cart'
import Manage_order from './Pages/Manage_order'
import Manage_product from './Pages/Manage_product'
import Manage_user from './Pages/Manage_user'
import Add_user from './Pages/Add_user'
import Add_emp from './Pages/Add_emp'
import Manage_emp from './Pages/Manage_emp'
import Edit_emp from './Pages/Edit_emp'
import Add_blog from './Pages/Add_blog'
import Manage_blog from './Pages/Manage_blog'
import Edit_categories from './Pages/Edit_categories'
import Edit_contact from './Pages/Edit_contact'
import Edit_customer from './Pages/Edit_customer'
import Edit_user from './Pages/Edit_user'
import Edit_product from './Pages/Edit_product'
import Edit_blog from './Pages/Edit_blog'
import Add_admin from './Pages/Add_admin'
import Manage_admin from './Pages/Manage_admin'
import Edit_admin from './Pages/Edit_admin'
import Add_cart from './Pages/Add_cart'
import Edit_cart from './Pages/Edit_cart'




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
        <Route path='/Manage_categories' element={<><Header /><Manage_categories /><Footer /></>}></Route>
        <Route path='/Manage_contact' element={<><Header /><Manage_contact /><Footer /></>}></Route>
        <Route path='/Manage_customer' element={<><Header /><Manage_customer /><Footer /></>}></Route>
        <Route path='/Manage_cart' element={<><Header /><Manage_cart /><Footer /></>}></Route>
        <Route path='/Manage_order' element={<><Header /><Manage_order /><Footer /></>}></Route>
        <Route path='/Manage_product' element={<><Header /><Manage_product /><Footer /></>}></Route>
        <Route path='/Manage_user' element={<><Header /><Manage_user /><Footer /></>}></Route>
        <Route path='/Edit_emp/:id' element={<><Header /><Edit_emp /><Footer /></>}></Route>
        <Route path='/Edit_categories/:id' element={<><Header /><Edit_categories /><Footer /></>}></Route>
        <Route path='/Edit_contact/:id' element={<><Header /><Edit_contact /><Footer /></>}></Route>
        <Route path='/Edit_customer/:id' element={<><Header /><Edit_customer /><Footer /></>}></Route>
        <Route path='/Edit_user/:id' element={<><Header /><Edit_user /><Footer /></>}></Route>
        <Route path='/Edit_product/:id' element={<><Header /><Edit_product /><Footer /></>}></Route>
        <Route path='/Edit_blog/:id' element={<><Header /><Edit_blog /><Footer /></>}></Route>
        <Route path='/Edit_admin/:id' element={<><Header /><Edit_admin /><Footer /></>}></Route>
        <Route path='/Edit_cart/:id' element={<><Header /><Edit_cart /><Footer /></>}></Route>
        <Route path='/Manage_emp' element={<><Header /><Manage_emp /><Footer /></>}></Route>
        <Route path='/Manage_blog' element={<><Header /><Manage_blog /><Footer /></>}></Route>
        <Route path='/Manage_admin' element={<><Header /><Manage_admin /><Footer /></>}></Route>






      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App