import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Blog from './../Blog';
import Home from './../Home';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import  Courses from './../courses';
import CoursesPage from './../CoursesPage';
import Events from './../Events';
import { useState } from 'react';
import Discover from './../Discover';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';


const  Navigation= (Tabvalue,tabs) => {
 
   const [value, setValue] = React.useState(0);
   
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <Tabs
    id="fill-tab-example"
      defaultActiveKey={Tabvalue}
      // onSelect={(value) => handleChange(value)}
     value={value} onChange={handleChange}
    className="navbar fixed-bottom navbar-dark"
    fill
  >

   {/* <div >
    <Router> <Switch>
     <Route path='/home' exact component={Home} />
     <Route path='/' exact component={Home} />

    <Route path='/blogs/:id' component={Blog} />
    <Redirect to='/' />

  </Switch></Router>

</div> */}




    <Tab eventKey="home" title="News">
    <Home />
    </Tab>
    <Tab eventKey="profile" title="Discover">

      <Discover />
    </Tab>
    <Tab eventKey="courses"  title="Courses">
    <div >
    {
    <>< CoursesPage></CoursesPage>  </>

   }
  </div>
    </Tab>
    <Tab eventKey="events" title="Events" >
    <div >
    {
    <>< Events />  </>

   }
  </div>
    </Tab>
  </Tabs>



);
};

export default Navigation;