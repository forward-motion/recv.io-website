import React from 'react';
import ReactTable from 'react-table'

import '../../../styles/dashboard/my-apps-subviews/Data.scss';

import { messages , clients , users } from '../../../data/data.js'; 


class Data extends React.Component {
    constructor(props) {
        super(props); 
        

        this.state = {
            selectorButtons: ['message', 'clients', 'users'],
            selectedTable: 'message', 
            messages: messages,
            clients: clients,
            users: users
        }

        this.onChangeTable = this.onChangeTable.bind(this);


    }

    onChangeTable(e) {
        
        this.setState({ selectedTable : e.target.name }); 

    }

    get tableSelectorButtons() {

        return this.state.selectorButtons.map((button) => {
            return (
                <div>
                    <button
                        className="btn table-btn-selector"
                        onClick={this.onChangeTable}
                        name={button}
                    >
                        {button}
                    </button>
                    <div className={`under-line ${this.state.selectedTable == button ? 'active' : null }`}></div>
                </div>
            );
        })
    }

    get showSelctedTable() {

        let data = null; 
        let columns = null;

        switch (this.state.selectedTable) {
            case 'message':
                data = this.state.messages; 
                columns = [
                    {
                        Header: 'Topic',
                        accessor: 'topic'
                    },
                    {
                        Header: 'Payload',
                        accessor: 'payload'
                    },
                    {
                        Header: 'Date',
                        accessor: 'date'
                    }
                ]; 
                
                break;
            case 'clients': 
                data = this.state.clients;
                columns = [
                    {
                        Header: 'ID',
                        accessor: 'id'
                    },
                    {
                        Header: 'User ID',
                        accessor: 'user_id'
                    },
                    {
                        Header: 'Date Created',
                        accessor: 'date_created'
                    },
                    {
                        Header: 'Status',
                        accessor: 'status'
                    }
                ];

                break;
            case 'users': 
                data = this.state.users;
                columns = [
                    {
                        Header: 'ID',
                        accessor: 'id'
                    },
                    {
                        Header: 'Clients',
                        accessor: 'clients'
                    },
                    {
                        Header: 'Status',
                        accessor: 'status'
                    }
                ];

                break;
        }

        return (
            <ReactTable
                defaultPageSize={5}
                data={data}
                columns={columns}
            />
        );


    }



    render() {


        return (
            <div className="container-fluid data-page">
        
                <div className="row">
                    <div className="col-md-2">
                        { this.tableSelectorButtons }
                    </div>
                    <div className="col-md-10">
                        { this.showSelctedTable }
                    </div>
                </div>
        
            </div>
        );
    }
}

export default Data;