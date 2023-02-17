import React from 'react';
import {Outlet} from 'react-router-dom';
import Invalid from '../Components/Invalid';
const UserAuth = () => {
  const accessToken=true;
  
    return (
    (accessToken)?<Outlet/>:<Invalid/>
  )
}

export default UserAuth