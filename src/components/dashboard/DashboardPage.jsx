import React from 'react';

import Login from './Login.jsx';
import MyApps from './MyApps.jsx';
import MyAccount from './MyAccount.jsx';

class DashboardPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            view: props.views[0],
            selectedApp: null,
            subView: props.subViews[0]
        };

        this.onChangeView = this.onChangeView.bind(this);
        this.onChangeSelectedApp = this.onChangeSelectedApp.bind(this);
        this.onChangeSubView = this.onChangeSubView.bind(this);
    }

    onChangeView(e) {

        this.setState({
            view: e.currentTarget.value
        });
    }

    onChangeSelectedApp(selectedApp) {

        this.setState({ selectedApp });
    }

    onChangeSubView(subView) {

        this.setState({ subView });
    }

    get breadcrumbs() {

        // render a dropdown that can toggle the view, then the selected app (if any), then the subview.

        return (
            <div>
                dropdown > app > subview
            </div>
        );
    }

    get content() {

        switch(this.state.view) {
            case 'my-apps':
                return (
                    <MyApps
                        onChangeSelectedApp={this.onChangeSelectedApp}
                        onChangeSubView={this.onChangeSubView}
                        selectedApp={this.state.selectedApp}
                        subView={this.state.subView}
                    />
                );
            case 'my-account':
                return (<MyAccount />);
        }
    }

    render() {

        if (!this.props.isLoggedIn) {
            return <Login />;
        }

        return (
            <div className="dashboard-page">
                {this.breadcrumbs}
                {this.content}
            </div>
        );
    }

    static get defaultProps() {

        return {
            isLoggedIn: true,
            views: ['my-apps', 'my-account'],
            subViews: ['overview', 'keys', 'data', 'plan']
        };
    }
}

export default DashboardPage;