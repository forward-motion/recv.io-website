import React from 'react';
import moment from 'moment';

const DashboardFooter = () => {
    return (
        <div className="page-footer">

            <div className="row">
                <div className="col-md-6" style={{ paddingTop: '190px' }}>
                    <p className="copy-right">© {moment().year()} - recv.io All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardFooter;