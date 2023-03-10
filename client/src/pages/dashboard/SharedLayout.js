import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/RegisterPage';

const SharedLayout = () => {
  return (<Wrapper>
    <nav>
        <Link to='add-jobs'>add job</Link>
    </nav>
  </Wrapper>  )
}

export default SharedLayout