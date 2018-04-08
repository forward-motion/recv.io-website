import React from 'react';

import '../../../styles/dashboard/my-apps-subviews/Plan.scss';

const Plan = (props) => (
    <div className="container-fluid plan-page">

        <div className="row">
            <p>You are currently on the <span>{ props.currentPlan }</span> plan</p>
        </div>

    </div>
);

export default Plan;