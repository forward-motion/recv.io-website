import React from 'react';
import moment from 'moment';

const DashboardFooter = (props) => {

    let dashboardFooterStyle = {};

    if (props.view === 'my-account') {
        dashboardFooterStyle.paddingTop = '50px';
    } else {
        dashboardFooterStyle.paddingTop = '190px';
    }

    return (
        <div className="page-footer">

            <div className="row">
                <div className="col-md-12">
                    {props.children}
                </div>
                <div className="col-md-12" style={dashboardFooterStyle}>
                    <p className="copy-right">© {moment().year()} - recv.io All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardFooter;