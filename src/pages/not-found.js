import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound(props) {
  return (
    <div className="not_found_page_body">
      <div className="error_container">
        <div><p className='error_code'>404</p></div>
        <div className='error_info'>
          <p><strong>Page Not Found</strong>
            <br/>It seems that we cannot find<br/>the page you were looking for
          </p>
        </div>
      </div>
      <div className="soup_container">
        <img src='/img/soup.png' className='soup_image' alt='Warm bowl of Soup'></img>
        <div className='soup_subcontainer'>
          <div className='soup_text'><p>But here’s a warm bowl of soup</p></div>
          <div>
            <Link to='/home'><button type='button' className='button'>Go Home</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}