import React from 'react';
import LookFamiliarBG from '../../../assets/img/home/lookfamiliar-bg.png';
import '../../../styles/home/sections/LookFamiliar.scss';

const LookFamiliar = (props) => (
  <div className="component-look-familiar"
    style={{
      backgroundImage:`url(${LookFamiliarBG})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundSize:"90%"
    }}>
    <div className="look-familiar row">
        <div className="col-md-12">
          <h3>look familiar?</h3>
          <br />
          <span> if you know <span className="socket">socket.io</span> you know recv.io </span>
        </div>
    </div>
  </div>
);
export default LookFamiliar;
