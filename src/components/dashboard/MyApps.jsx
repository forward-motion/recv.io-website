import React from 'react';

import Overview from './my-apps-subviews/Overview.jsx';
import Keys from './my-apps-subviews/Keys.jsx';
import Data from './my-apps-subviews/Data.jsx';
import Plan from './my-apps-subviews/Plan.jsx';

class MyApps extends React.Component {

    constructor(props) {
        super(props);
    }

    onCreateNewApp() {

    }

    onDeleteApp() {

    }

    render() {

        const { selectedApp, subView } = this.props;

        if (!selectedApp) {
            return (
                <div>
                    list of apps, with create new button
                </div>
            );
        }

        switch (subView) {
            case 'overview':
                return (
                    <Overview selectedApp={selectedApp} />
                );
            case 'keys':
                return (
                    <Keys selectedApp={selectedApp} />
                );
            case 'data':
                return (
                    <Data selectedApp={selectedApp} />
                );
            case 'plan':
                return (
                    <Plan selectedApp={selectedApp} />
                );
        }
    }
}

export default MyApps;