import React from 'react';
import moment from 'moment';

import ModalApp from '../../dashboard/Modal.jsx';

import '../../../styles/dashboard/my-apps-subviews/Keys.scss';

class Keys extends React.Component {

    constructor(props) {
        super(props);

    }


    get modal() {
        
        return(
            <ModalApp 
                name={this.props.modalType} 
                handleClose={this.props.onHandleClose}
                show={this.props.show}>
                <div className="container-fluid">
                    <div className="row">
                        <p>Want to delete your api key</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 pull-right">
                            <button className="btn btn-default" onClick={() => this.props.onDeletedKey(this.props.deleteKey)}> Delete Key</button>
                        </div>
                    </div>
                </div>

            </ModalApp>
        );
    }

    render() {
        return(
            <div className="row keys-page">

                <div className="overview-panel" style={{margin: '60px auto', width: '95%'}}>
                    {(() => {
                        if(this.props.selectedApp.keys.length == 0 ) {
                            
                            return(
                                <div style={{textAlign : 'center'}}>
                                    <h1>No keys yet, create one</h1>
                                </div>
                            );
                        }

                        return this.props.selectedApp.keys.map((key) => {
                            return(
                                <div className="col-md-4">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <p>Api key: <span>{ key.api }</span></p>
                                            <p>Secret: <span>{ key.secret }</span></p>
                                            <p>Date: <span>{ moment(key.date).format('MM/DD/YYYY') }</span></p>

                                            <button
                                                className="btn trash-btn"
                                                name="delete key"
                                                onClick={() => this.props.onShowModal('delete key', key)}
                                            >
                                                <i 
                                                    className="fa fa-trash">
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                            </div>
                            );
                        })
                    })()}
                </div>

                { this.modal }
                
            </div>
        );
    }
}

export default Keys;