import React from 'react';

const Overview = (props) => (
    <div className="row">

        <div className="overview-panel" style={{margin: '60px auto', width: '95%'}}>
            {(() => {
                return props.selectedApp.stats.map((stat) => {
                    return(
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-body" style={{textAlign: 'center'}}>
                                        <p style={{fontSize: '30px', textTransform: 'uppercase'}}> { stat.type }</p>
                                        <p> { stat.key }</p>
                                </div>
                            </div>
                    </div>
                    );
                })
            })()}
        </div>
        
    </div>
);

export default Overview;