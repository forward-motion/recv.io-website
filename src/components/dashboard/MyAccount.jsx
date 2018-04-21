import React from 'react';
import DashboardFooter from '../_global/ui/DashboardFooter.jsx';

import '../../styles/dashboard/MyAccount.scss';

const MyAccount = (props) => (

    <div className="container-fluid my-account-page">

        <div className="row sub-title">

            <div className="col-md-12">

                {(() => {
                    let provider = '';

                    console.log('props.provider', props.provider);
                    

                    switch (props.provider) {
                        case 'github.com':
                            provider = 'GitHub';
                            break;
                        case 'google.com':
                            provider = 'Google';
                            break;
                    }

                    return <p> You are signed in via <span className="provider-id"> {provider}</span></p>
                })()}

                <div className="underline-accent"></div>

            </div>


        </div>

    </div>
);

export default MyAccount;