
import React from 'react';
import Header from '../../components/Home/Header';
import Nav from 'react-bootstrap/Nav';
function Films() {

const heading1="Films";
return (
<div>
    <div className='container-box'>
   {/* < Branding /> */}
      {/* Page Header */}
       <Header H1 ={heading1} />

       <iframe id="iFrameSongs"
    title="Video"
    src=" https://deafmatrix.com/tv&movies.php" >
</iframe> 
<div className='bottom-nav d-flex justify-content-center'>
      <Nav className=" mb-3">
              <Nav.Link  href="/news">News</Nav.Link>
              <Nav.Link href="/Songs">Songs</Nav.Link>
              <Nav.Link className='active' >Films</Nav.Link>
              <Nav.Link  href="/discover">Discover</Nav.Link>
        </Nav>
      </div>
    </div>
  
     </div>
   )
}

export default Films;
