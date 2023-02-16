
import React from 'react';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import './Components/Profile/Profile.css'



function App() {

    return (
      <div className="container">
        <div className="App">
            <div className='image-container'>
              <ProfilePhoto />
            </div>
            <hr/>
            <div className='lower-container'>
              <FullName />
              <Address />
            </div>
        </div>
      </div>
  );
}

export default App;




