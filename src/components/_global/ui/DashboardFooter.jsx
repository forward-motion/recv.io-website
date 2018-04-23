import React from 'react';
import moment from 'moment';

const DashboardFooter = (props) => {

    let dashboardFooterStyle = {};

    if (props.view === 'my-account') {
        dashboardFooterStyle.bottom = '-40px';
    } else {
        dashboardFooterStyle.bottom = '-190px';
    }

    return (
        <div className="page-footer">

            <div className="row">
                <div className="col-md-12">
                    {props.children}
                </div>
                <div className="col-md-12">
                    <p className="copy-right" style={dashboardFooterStyle}>© {moment().year()} - recv.io All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardFooter;