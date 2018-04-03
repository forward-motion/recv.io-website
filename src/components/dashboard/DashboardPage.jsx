import React from 'react';

import Login from './Login.jsx';
import MyApps from './MyApps.jsx';
import MyAccount from './MyAccount.jsx';

// app styles 
import '../../styles/dashboard/DashboardPage.scss';

// import default styles.
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

// Then import the virtualized Select HOC
import VirtualizedSelect from 'react-virtualized-select';



class DashboardPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            view: props.views[0],
            selectedApp: null,
            subView: props.subViews[0],
            isUserLogin: false
        };

        this.onChangeView = this.onChangeView.bind(this);
        this.onChangeSelectedApp = this.onChangeSelectedApp.bind(this);
        this.onChangeSubView = this.onChangeSubView.bind(this);
        this.onUserLogin = this.onUserLogin.bind(this);
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

    onUserLogin(user) {

        if( user ) {
            this.setState({ isUserLogin : true })
        }
    }

    get breadcrumbs() {

        // render a dropdown that can toggle the view, then the selected app (if any), then the subview.

        return (

            <ol className="breadcrumb">
                <li><VirtualizedSelect options={this.props.views} /></li>
                <li><a href="#">Library</a></li>
                <li className="active">Data</li>
            </ol>
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

        if (!this.state.isUserLogin) {
            return <Login  onUserLogin={ this.onUserLogin} />;
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
            views: [
                {
                    label: 'my-apps',
                    value: 'my-apps'
                },
                {
                    label: 'my-account',
                    value: 'my-account'
                }
            ],
            subViews: ['overview', 'keys', 'data', 'plan']
        };
    }
}

export default DashboardPage;