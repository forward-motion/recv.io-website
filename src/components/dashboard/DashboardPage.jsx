import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import VirtualizedSelect from 'react-virtualized-select';

import Overview from './my-apps-subviews/Overview.jsx';
import Keys from './my-apps-subviews/Keys.jsx';
import Data from './my-apps-subviews/Data.jsx';
import Plan from './my-apps-subviews/Plan.jsx';
import Login from './Login.jsx';
import App from './App.jsx';
import MyAccount from './MyAccount.jsx';
import ModalApp from './Modal.jsx';
import DashboardFooter from '../_global/ui/DashboardFooter.jsx';

// app styles 
import '../../styles/dashboard/DashboardPage.scss';

import user from '../../data/apps.js';


class DashboardPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            view: {label: 'My Apps', value: 'my-apps'},
            subView: 'overview',
            selectedApp: null,
            deleteApp: null,
            show: false,
            modalType: null,
            userApps: user,
            createdApp: '',
            createdAppDesc: '',
            createdKeyApi: '',
            deleteKey: null,
            userPlan: 'free'
        };

        this.onChangeView = this.onChangeView.bind(this);
        this.onChangeSelectedApp = this.onChangeSelectedApp.bind(this);
        this.onChangeSubView = this.onChangeSubView.bind(this);
        this.onShowModal = this.onShowModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onDeleteApp = this.onDeleteApp.bind(this);
        this.onCreateApp = this.onCreateApp.bind(this);
        this.onCreateKey = this.onCreateKey.bind(this);
        this.onDeleteKey = this.onDeleteKey.bind(this);
        this.handleUserEnter = this.handleUserEnter.bind(this);
        this.onUpgradePlan = this.onUpgradePlan.bind(this);
        this.onDeleteAccount = this.onDeleteAccount.bind(this);
    }


    onChangeView(selectedOption) {

        this.setState({ view: selectedOption, selectedApp : null});
        
    }

    handleUserEnter(e) {

        if (e.target.name == 'app desc') {

            this.setState({ createdAppDesc: e.target.value })

        } else if (e.target.name == 'create app') {

            this.setState({ createdApp: e.target.value })
        } else {
            this.setState({ createdKeyApi: e.target.value })
        }
    }

    onShowModal(type, app) {

        this.setState({ show : !this.state.show, modalType: type , deleteApp: app});
    }

    handleClose() {

        this.setState({show : false})
    }


    onDeleteAccount() {

        /* Todo 
        ** Need to implement the api to actually delete the account and erase all the data 
        ** tied to this account.
        */
        
        const { firebase }  = this.props;

        location.reload();
        firebase.auth().signOut();
    }


    onDeleteApp(delete_app) {

        if( this.state.userApps ) {

            let selectedAppToDelete = this.state.userApps.filter((app) => {
                return app.name !== delete_app; 
            }); 
    
            this.setState({userApps : selectedAppToDelete, show: false})
        }
        
        
    }

    onDeleteKey(delete_key) {


        let modifiedAppKeys = this.state.selectedApp.keys.filter((key) => {
            return key.api !== delete_key.api;
        });

        let selectedApp = this.state.selectedApp; 
        selectedApp.keys = modifiedAppKeys; 

        this.setState({ show : false, selectedApp : selectedApp  });
        
    }

    onCreateApp() {
        
        let usersApps = this.state.userApps; 
        let newlyCreatedApp = {
            name: this.state.createdApp,
            desc: this.state.createdAppDesc,
            stats: [{type: 'stat a', key: 'no stats yet'},{type: 'stat b', key: 'no stats yet'},{type: 'stat c', key: 'no stats yet'}],
            keys:[]
        }; 

        usersApps.push(newlyCreatedApp);

        this.setState({ userApps: usersApps, show: false, selectedApp :  newlyCreatedApp, createdApp: '', createdAppDesc: '', subView : 'overview'});
    }

    onCreateKey() { 

        let keys = [];

        let newSetOfKeys = {
            api : `key-xxxxxxxxxxxx-app-${this.state.createdKeyApi}`,
            secret : 'xxxx',
            date : 1523048292239
        }; 

        let updatedSelectedApp = this.state.selectedApp;
        updatedSelectedApp.keys.push(newSetOfKeys);
        
        this.setState({ show : false, selectedApp : updatedSelectedApp, createdKeyApi : '' });

    }

    onChangeSelectedApp(selectedApp) {

        this.setState({ selectedApp: selectedApp });
    }

    onChangeSubView(subView) {

        this.setState({ subView });
    }

    onUpgradePlan() {

        this.setState({ show: false,  userPlan : 'paid' })
    }

    get selectedAPlan() {

        if(this.state.userPlan == 'free') {
            return (
                <form>
                    <FormGroup
                        controlId="formBasicText"
                    >
                        <ControlLabel>Stripe Flow</ControlLabel>
                        <div className="row">
                            <div className="col-md-6">
                                <FormControl
                                    type="text"
                                    name="Full Name"
                                    placeholder="Enter text"
                                />
                            </div>
                            <div className="col-md-6">
                                <FormControl
                                    type="text"
                                    name="Credit Card"
                                    placeholder="Enter text"
                                />
                            </div>
                            <div className="col-md-3 pull-right" style={{marginTop: '20px' }}>
                                <Button style={{width: '100%'}} onClick={this.onUpgradePlan}>Upgrade</Button>
                            </div>
                        </div>
                        
                    </FormGroup>
                </form>
            );
        } else if(this.state.userPlan == 'paid') {

            return (
                
                <div className="contact-content">
                    <h4>Interested in a sandalone  network?</h4>
                    <p>click the button below, and we will email you</p>
                    <button className="btn btn-dashboard"> <span className="icon-delivery"></span>Contact</button>
                </div>
            );
            
        }
    }

    get showModal() {

        switch(this.state.modalType) {
            case 'delete app':
                return(
                    <ModalApp 
                        name={this.state.modalType} 
                        handleClose={this.handleClose}
                        show={this.state.show}>
                        <div className="container-fluid">
                            <div className="row">
                                <p>Want to delete {this.state.deleteApp.name}</p>
                            </div>
                            <div className="row">
                                <div className="col-md-3 pull-right">
                                    <Button onClick={() => this.onDeleteApp(this.state.deleteApp.name)}>Delete App</Button>
                                </div>
                            </div>
                        </div>

                    </ModalApp>
                );
            case 'create app':
                return(
                    <ModalApp 
                        name={this.state.modalType} 
                        handleClose={this.handleClose} 
                        closeModal={this.handleClose}
                        show={this.state.show}>
                        <form>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <div className="row">
                                <div className="col-md-9">
                                <FormControl
                                    type="text"
                                    value={this.state.createdApp}
                                    name="create app"
                                    placeholder="Name*"
                                    onChange={this.handleUserEnter}
                                />
                                </div>
                                <div className="col-md-3">
                                    <Button className="btn btn-dashboard" onClick={this.onCreateApp}><span>+</span>Create New</Button>
                                </div>
                                <div className="col-md-9">
                                    <FormControl
                                        type="text"
                                        value={this.state.createdAppDesc}
                                        name="app desc"
                                        placeholder="Description"
                                        onChange={this.handleUserEnter}
                                    />
                                </div>
                            </div>
                            
                        </FormGroup>
                        </form>
                    </ModalApp>
                );
            case 'create key': 
                return(
                    <ModalApp 
                        name={this.state.modalType} 
                        handleClose={this.handleClose} 
                        functionalApp={this.handleClose}
                        show={this.state.show}>
                        <form>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <div className="row">
                                <div className="col-md-6">
                                <FormControl
                                    type="text"
                                    value={this.state.createdKeyApi}
                                    name="create key"
                                    placeholder="Enter key post-fix"
                                    onChange={this.handleUserEnter}
                                />
                                </div>
                                <div className="col-md-3">
                                    <Button className="btn btn-dashboard" onClick={this.onCreateKey}>Create Key</Button>
                                </div>
                            </div>
                            
                        </FormGroup>
                        </form>
                    </ModalApp>
                );
            case 'upgrade': 
                return(
                    <ModalApp 
                        handleClose={this.handleClose} 
                        functionalApp={this.handleClose}
                        show={this.state.show}>
                            { this.selectedAPlan }
                    </ModalApp>
                );
            case 'delete account':
                return(
                    <ModalApp 
                        name={this.state.modalType} 
                        handleClose={this.handleClose} 
                        functionalApp={this.handleClose}
                        show={this.state.show}>
                            <p>Delete Account</p>
                            <p>Warning all of your apps and data will also be erased. This action can't be undone</p>
                            <button className="btn btn-default" onClick={ this.onDeleteAccount }> Delete </button>
                    </ModalApp>
                );
        }

        
    }

    get breadcrumbs() {

        const { user, firebase } = this.props;

        let breadcrumbStyles = {
            backgroundColor: '#223047'
        }; 

        if( this.state.view.value === 'my-app') {
            breadcrumbStyles.height = '140px';
        }


        return (

            <div style={breadcrumbStyles}>
               <div style={{maxWidth: '70%', margin: '0 auto', position : 'relateive', zindex : '50'}}>
                    <div className="row">
                        <a className="pull-right" style={{ marginRight: '-190px', marginTop: '12px', color: 'white', textDecoration : 'underline' }} onClick={() => firebase.auth().signOut()}>Sign-out</a>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-dashboard">
                                <li>
                                    <VirtualizedSelect
                                        value={this.state.view}
                                        options={this.props.views}
                                        multi={false}
                                        clearable={false}
                                        searchable={false}
                                        onChange={this.onChangeView}
                                    />
                                </li>
                                {(() => {

                                    return this.state.selectedApp !== null ?
                                        (
                                            <li>
                                                <span className="divider">|</span>  {this.state.selectedApp.name}
                                                <button
                                                    className="btn btn-breadcrumb-removal"
                                                    onClick={() => this.setState({ selectedApp: null, subView: 'overview' })}>
                                                    x
                                </button>
                                            </li>
                                        ) : null
                                })()}
                                {(() => {

                                    return this.state.selectedApp !== null ?
                                        (
                                            <li>
                                                <span className="divider">|</span> {this.state.subView}
                                            </li>
                                        ) : null
                                })()}
                            </ul>
                        </div>
                        <div className="col-md-12">
                            {(() => {

                                if( this.state.selectedApp === null && this.state.view.value !== 'my-account') {
                                    return(
                                        <div className="layout-icons-wrapper">
                                            <button className="btn"><span className="icon-my-apps"></span></button>
                                            <button className="btn disabled"><span className="icon-ordering"></span></button>
                                        </div>
                                    );
                                } else if( this.state.selectedApp !== null) {
                                    return(
                                        <div className="subview-button-layout">
                                            {this.subViewBtn}
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                                
                            })()}
                        </div>
                    </div>
               </div>
            </div>
        );
    }

    get userApps() {
        

        return this.state.userApps.map((app, index) => {
            return(
                <div className="col-md-6">
                    <App
                        key={index}
                        appInfo={app}
                        onChangeSelectedApp={this.onChangeSelectedApp}>
                            <button
                                className="btn trash-btn"
                                name="delete app"
                                onClick={() => this.onShowModal('delete app', app)}
                            >
                                <i 
                                    className="icon-trash">
                                </i>
                            </button>
                    </App>
                </div>
            );
        });
    }

    get subview() {

        switch (this.state.subView) {
            case 'overview':
                return (
                    <Overview selectedApp={this.state.selectedApp} />
                );
            case 'keys':
                return (
                    <Keys 
                        selectedApp={this.state.selectedApp} 
                        show={this.state.show} 
                        onDeletedKey={this.onDeleteKey} 
                        onHandleClose={this.handleClose}
                        onShowModal={this.onShowModal}
                        modalType={this.state.modalType}
                        deleteKey={this.state.deleteApp}
                    />
                );
            case 'data':
                return (
                    <Data selectedApp={this.state.selectedApp} />
                );
            case 'plan':
                return (
                    <Plan selectedApp={this.state.selectedApp} currentPlan={this.state.userPlan} />
                );
        }
    }

    get subViewBtn() {
        const subViewButtons = ['overview', 'keys', 'data', 'plan'];

        return subViewButtons.map((btn) => {
            return(
                <div className="subview-buttons">
                    <button
                        name={btn}
                        className={`btn ${this.state.subView == btn ? 'active' : null}`}
                        onClick={() => this.setState({ subView : btn })}
                    >   
                        { btn }
                        <div className={`underline ${this.state.subView == btn ? 'active' : null}`}></div>
                    </button>
                </div>
            );
        })

    }

    get selectedApp() {

        return(
            <div>

                <div className="row">
                    { this.subview }
                </div>
            </div>
        );
    }

    get content() {

        switch(this.state.view.value) {
            case 'my-apps':
                return (
                    <div className="my-apps">
                        <div className="row">
                        <div className="col-md-3 pull-right">
                            <div style={{marginBottom: '50px', textAlign: 'right', position: 'relative', top : '-50px'}}>
                                <button 
                                    className="btn btn-dashboard"
                                    onClick={() => this.onShowModal('create app', null)}
                                >
                                    <span>+</span>Create New
                                </button>
                                {(() => {
                                    return this.state.subView === 'keys' ? 
                                        (
                                            <button 
                                                className="btn btn-dashboard"
                                                style={{marginLeft: '10px'}}
                                                onClick={() => this.onShowModal('create key', null)}
                                            >
                                                Create Key
                                            </button>
                                        ) : null; 
                                })()}
                                {(() => {
                                    return this.state.subView === 'plan' ? 
                                        (
                                            <button 
                                                className="btn btn-dashboard"
                                                style={{marginLeft: '10px'}}
                                                onClick={() => this.onShowModal('upgrade', null)}
                                            >
                                                Upgrade
                                            </button>
                                        ) : null; 
                                })()}
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            { !this.state.selectedApp ? this.userApps : this.selectedApp }
                        </div>
                    </div>
                );
            case 'my-account':
                const { user } = this.props;
                const loggedCredentials = user.providerData[0];
                

                return ( 
                            <MyAccount 
                                displayName={ loggedCredentials.displayName } 
                                provider={ loggedCredentials.providerId }
                                email={ loggedCredentials.email }
                                onShowModal={this.onShowModal}
                            /> 
                        );
        }
    }

    render() {


        const { user, firebase } = this.props;
        


        if (!user) {
            return <Login firebase={firebase} />;
        }

        return (
            <div className="dashboard-page">
                <div style={{ minHeight: '80vh'}}>
                    {this.breadcrumbs}
                    {this.content}
                    {this.showModal}
               </div>

               <div className="row">
                    <DashboardFooter view={this.state.view.value}>
                        {(() => {
                            return this.state.view.value === 'my-account' ? 
                                (
                                    <div className="dashboard-footer-child">
                                        <div className="col-md-12">
                                            <p>delete your account?</p>
                                            <button className="btn btn-dashboard" onClick={() => props.onShowModal('delete account', null)}> Delete </button>
                                        </div>
                                    </div>
                                ) : null;
                        })()}
                    </DashboardFooter>
               </div>
            </div>
        );
    }

    static get defaultProps() {

        return {
            views: [
                {
                    label: 'My Apps',
                    value: 'my-apps'
                },
                {
                    label: 'My Account',
                    value: 'my-account'
                }
            ]
        };
    }
}

export default DashboardPage;