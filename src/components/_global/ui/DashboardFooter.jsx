import React from 'react';
import moment from 'moment';

const DashboardFooter = (props) => {

    let dashboardFooterStyle = {};

    return (
        <div className="page-footer">

            <div>
                {props.children}
            </div>

            <div>
                <p className="copy-right">© {moment().year()} - recv.io All Right Reserved</p>
            </div>
        </div>
    );
}

export default DashboardFooter;