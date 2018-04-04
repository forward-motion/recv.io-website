import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import Login from './Login.jsx';
import MyApps from './MyApps.jsx';
import MyAccount from './MyAccount.jsx';
import user from '../../data/apps.js'; 
import ModalApp from './Modal.jsx';

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
            deleteApp: null,
            show: false,
            modalType: null,
            userApps: user,
            createdApp: ''

        };

        this.onChangeView = this.onChangeView.bind(this);
        this.onChangeSelectedApp = this.onChangeSelectedApp.bind(this);
        this.onChangeSubView = this.onChangeSubView.bind(this);
        this.onShowModal = this.onShowModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onDeleteApp = this.onDeleteApp.bind(this);
        this.onCreateApp = this.onCreateApp.bind(this);
        this.handleUserEnter = this.handleUserEnter.bind(this);
    }

    onChangeView(selectedOption) {

        this.setState({ view: selectedOption});
        
    }

    handleUserEnter(e) {

        this.setState({ createdApp : e.target.value })
    }

    onShowModal(type, app) {

        let show = this.state.show ? false : true; 

        //let type = e.currentTarget.name;
        

        this.setState({ show : show, modalType: type , deleteApp: app});
    }

    handleClose() {

        this.setState({show : false})
    }

    onDeleteApp(delete_app) {

        let selectedAppToDelete = this.state.userApps.filter((app) => {
            return app.name !== delete_app; 
        }); 

        this.setState({userApps : selectedAppToDelete, show: false})
        
        
    }

    onCreateApp() {
        console.log('it was created');
        
        let usersApps = this.state.userApps; 
        usersApps.push({
            name: this.state.createdApp,
            stats: [{type: '', key: ''},{type: '', key: ''},{type: '', key: ''}]
        });

        this.setState({ userApps: usersApps, show: false });
    }

    onChangeSelectedApp(selectedApp) {

        this.setState({ selectedApp: selectedApp });
    }

    onChangeSubView(subView) {

        this.setState({ subView });
    }

    get showModal() {

        switch(this.state.modalType) {
            case 'delete app':
                return(
                    <ModalApp 
                        name={this.state.modalType} 
                        handleClose={this.handleClose} 
                        functionalApp={this.onDeleteApp}
                        show={this.state.show} 
                        appName={this.state.deleteApp.name}
                        buttonType="Delete">
                        <p>Want to delete {this.state.deleteApp.name}</p>
                    </ModalApp>
                );
            case 'create app':
                return(
                    <ModalApp 
                        name={this.state.modalType} 
                        handleClose={this.handleClose} 
                        functionalApp={this.handleClose}
                        show={this.state.show}
                        buttonType="Cancel">
                        <p>Create App</p>
                        <form>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <ControlLabel>Name</ControlLabel>
                            <div className="row">
                                <div className="col-md-6">
                                <FormControl
                                    type="text"
                                    value={this.state.createdApp}
                                    placeholder="Enter text"
                                    onChange={this.handleUserEnter}
                                />
                                </div>
                                <div className="col-md-3">
                                    <Button onClick={this.onCreateApp}>Create App</Button>
                                </div>
                            </div>
                            
                        </FormGroup>
                        </form>
                    </ModalApp>
                );
        }
        
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
        

        return this.state.userApps.map((app, index) => {
            return(
                <div className="col-md-3">
                    <MyApps
                        key={index}
                        appInfo={app}
                        onChangeSelectedApp={this.onChangeSelectedApp}>
                            <button
                                className="btn trash-btn"
                                name="delete app"
                                onClick={() => this.onShowModal('delete app', app)}
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
                            <div className="col-md-3 pull-right">
                                <div style={{marginBottom: '50px', textAlign: 'right'}}>
                                    <button 
                                        className="btn btn-default"
                                        onClick={() => this.onShowModal('create app', null)}
                                    >
                                        Create App
                                    </button>
                                </div>
                            </div>
                            </div>
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
                <div className="row">
                    <a className="pull-right" style={{marginRight: '20px'}} onClick={() => firebase.auth().signOut()}>Sign-out</a>
                </div>
                {this.breadcrumbs}
                {this.content}
                { this.showModal }
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