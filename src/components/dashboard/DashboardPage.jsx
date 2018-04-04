import React from 'react';
import { Modal } from 'react-bootstrap';

import Login from './Login.jsx';
import MyApps from './MyApps.jsx';
import MyAccount from './MyAccount.jsx';
import user from '../../data/apps'; 

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
            view: {label: 'my-apps', value: 'my-apps'},
            selectedApp: null,
            show: false,
            isUserLogin: false
        };

        this.onChangeView = this.onChangeView.bind(this);
        this.onChangeSelectedApp = this.onChangeSelectedApp.bind(this);
        this.onChangeSubView = this.onChangeSubView.bind(this);
        this.onShowModal = this.onShowModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onDeleteApp = this.onDeleteApp.bind(this);
        this.onUserLogin = this.onUserLogin.bind(this);
    }

    onChangeView(selectedOption) {

        this.setState({ view: selectedOption});
        
    }

    onShowModal() {

        let show = this.state.show ? false : true; 

        this.setState({ show : show });
    }

    handleClose() {

        this.setState({show : false})
    }

    onDeleteApp() {
        
    }

    onChangeSelectedApp(selectedApp) {

        this.setState({ selectedApp: selectedApp });
    }

    onChangeSubView(subView) {

        this.setState({ subView });
    }

    onUserLogin(user) {

        if( user ) {
            this.setState({ isUserLogin : true })
        }
    }

    get showModal() {

        console.log('state show', this.state.show);

        return(
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Hello World </p>
                </Modal.Body>
            </Modal>
        );
        
    }

    get breadcrumbs() {

        // render a dropdown that can toggle the view, then the selected app (if any), then the subview.

        console.log('App selected', this.state.selectedApp);
        

        return (

            <ol className="breadcrumb">
                <li><VirtualizedSelect 
                        value={this.state.view}
                        options={this.props.views}
                        clearable={false}
                        onChange={this.onChangeView}
                    />
                </li>
                <li>app e</li>
                <li className="active">Data</li>
            </ol>
        );
    }

    get userApps() {

        console.log('user', user);
        

        return user.map((app, index) => {
            return(
                <div className="col-md-3">
                    <MyApps
                        key={index}
                        appInfo={app}
                        onChangeSelectedApp={this.onChangeSelectedApp}>
                            <button
                                className="btn trash-btn"
                                onClick={this.onShowModal}
                            >
                                <i 
                                    className="fa fa-trash">
                                </i>
                            </button>
                    </MyApps>
                </div>
            );
        });
    }

    get selectedApp() {
        return(
            <div>
                <h1>Selected App</h1>
            </div>
        )
    }

    get content() {

        switch(this.state.view.label) {
            case 'my-apps':
                return (
                    <div className="container-fluid">
                        <div className="my-apps">
                            <div className="row">
                                { !this.state.selectedApp ? this.userApps : this.selectedApp }
                            </div>
                        </div>
                    </div>
                )
            case 'my-account':
                return (<MyAccount />);
        }
    }

    render() {


        const { user, firebase } = this.props;


        if (!user) {
            return <Login firebase={firebase} />;
        }

        return (
            <div className="dashboard-page">
               <div style={{maxWidth: '1024px', margin: '0 auto'}}>
                {this.breadcrumbs}
                {this.content}
                { this.showModal }
                <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
               </div>
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
            ]
        };
    }
}

export default DashboardPage;