import Footer from '../components/footer';
import NavBar from '../components/nav_bar';
import Menu from '../components/menu';
import React from 'react';

import '../styles/home.scss'

function HomePage(props) {
  const [data, setData] = React.useState([]);

  return (
    <div className="pz-home">
        <NavBar />
        <div className='body'>
          <div className='side-menu'>
            <Menu />
          </div>
          <div className='content'>
            {props.children}
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default HomePage;