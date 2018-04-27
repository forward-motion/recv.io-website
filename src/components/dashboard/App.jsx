import React from 'react';

import '../../styles/dashboard/App.scss';

class MyApps extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-header">
                    </div>
                    <div className="panel-body">
                        <div className="row">
                        <div 
                            className="app-cliable-body"
                            onClick={(selectedApp) => this.props.onChangeSelectedApp(this.props.appInfo)}
                        >
                                <div className="col-xs-2">
                                    <span className="icon-my-apps"></span>
                                </div>
                                <div className="col-xs-10">
                                    <div className="content-wrapper">
                                        <h4>{this.props.appInfo.name}</h4>
                                        <div className="desc">
                                            {this.props.appInfo.desc}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-12 pull-right">
                                <div className="trash">
                                    {this.props.children}
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default MyApps;