import React from 'react';
import '../../../styles/home/sections/LookFamiliar.scss';

import recvLogo from '../../../assets/img/home/recv.io.png';

const LookFamiliar = (props) => (
    <div className="component-look-familiar">
        <div className="look-familiar">
            <div className="row">
                <div className="col-md-12">
                    <h3>look familiar?</h3>
                    <div> if you know <span className="socket">socket.io</span>, you know <img src={recvLogo} /></div>
                </div>
            </div>
        </div>
    </div>
);
export default LookFamiliar;
