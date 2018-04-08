import React from 'react';

import '../../styles/dashboard/MyAccount.scss';

const MyAccount = (props) => (

    <div className="container-fluid my-account-page">

        <div className="row">

            <div className="col-md-12">

                <p>
                    Hey <span className="display-name">{ props.displayName }</span> you are currently signed in via <span className="provider-id"> { props.provider }</span>
                </p>

            </div>


        </div>

        <div className="row">
            <div className="col-md-12">
                <p>Delete your account</p>
            </div>
            <div className="col-md-4">
                <button className="btn btn-default" onClick={ () => props.onShowModal('delete account', null) }> Delete </button>
            </div>
        </div>

    </div>
);

export default MyAccount;