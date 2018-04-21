import React from 'react';

import '../../../styles/dashboard/my-apps-subviews/Plan.scss';

const Plan = (props) => (
    <div className="container-fluid plan-page">

        <div className="row">
            <div className="plan-indicator">
                <span className="icon-free"></span>
            </div>
            <p>You are currently on the <span className="current-user-plan">{ props.currentPlan }</span> plan</p>
        </div>

    </div>
);

export default Plan;