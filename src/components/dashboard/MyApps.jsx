import React from 'react';

import Overview from './my-apps-subviews/Overview.jsx';
import Keys from './my-apps-subviews/Keys.jsx';
import Data from './my-apps-subviews/Data.jsx';
import Plan from './my-apps-subviews/Plan.jsx';

import '../../../node_modules/font-awesome/css/font-awesome.css';
import '../../styles/dashboard/MyApps.scss';

class MyApps extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        return(
            <div>
                <div 
                    className="panel panel-default"
                    onClick={(selectedApp) => this.props.onChangeSelectedApp(this.props.appInfo)}
                    >
                    <div className="panel-heading">{ this.props.appInfo.name }</div>
                    <div className="panel-body">
                        <div className="trash">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        );


        // switch (subView) {
        //     case 'overview':
        //         return (
        //             <Overview selectedApp={selectedApp} />
        //         );
        //     case 'keys':
        //         return (
        //             <Keys selectedApp={selectedApp} />
        //         );
        //     case 'data':
        //         return (
        //             <Data selectedApp={selectedApp} />
        //         );
        //     case 'plan':
        //         return (
        //             <Plan selectedApp={selectedApp} />
        //         );
        // }

    }
}

export default MyApps;