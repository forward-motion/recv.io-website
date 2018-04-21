import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import '../../../styles/compare/sections/CompareTable.scss';



export default class CompareTable extends Component {
  constructor(props) {
    super(props)
  }
  render(){

    const columns = [{
      Header: '',
      accessor: 'name',
      width: 300
    }, {
      Header: () => <span className="column-header seperator">Price</span>,
      accessor: 'price',
      Cell: props => <div className="value">{props.value}</div>,
      style: {
        borderRight: "solid rgb(221, 223, 226) 1px"
      }
    }, {
      Header: () => <span className="column-header seperator">Feature A</span>,
      accessor: 'feature_a',
      Cell: props => <div className="value">{props.value}</div>,
      style: {
        borderRight: "solid rgb(221, 223, 226) 1px"
      }
    }, {
      Header: () => <span className="column-header">Feature B</span>,
      accessor: 'feature_b',
      Cell: props => <div className="value">{props.value}</div>
    }
  ]
    return(
      <ReactTable
       data={this.props.data}
       columns={columns}
       showPaginationBottom={false}
       minRows={4}
       sortable={false}
       multiSort={false}
       resizable={false}
     />
    );
  }
}
