import React from 'react';
export default function NotFound(props) {
    return (
      <section>

        <div className='notfoundtitle'>
            <h1>404</h1>
        </div>
        <div className='notfounddescr'>
          <p>Page Not Found
              It seems that we cannot
              find the page you were looking for</p>
        </div>
        <div className='notfoundbody'>
          <p>But here’s a warm bowl of soup</p>
        </div>


        <img src='/img/soup.png' className='notfoundimg' alt='Warm bowl of Soup'></img>

      </section>



    )
}