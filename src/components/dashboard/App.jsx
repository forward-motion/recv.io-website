import React from 'react';

import '../../../node_modules/font-awesome/css/font-awesome.css';
import '../../styles/dashboard/App.scss';

class MyApps extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        return(
            <div>
                <div 
                    className="panel panel-default">
                    <div className="panel-heading"
                        onClick={(selectedApp) => this.props.onChangeSelectedApp(this.props.appInfo)}
                    >
                        { this.props.appInfo.name }
                    </div>
                    <div className="panel-body">
                        <div className="trash">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default MyApps;