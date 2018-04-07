import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import '../../styles/compare/CompareTable.scss';

export default class CompareTable extends Component {
  constructor(props) {
    super(props)
  }
  render(){

    const columns = [{
      Header: '',
      accessor: 'name'
    }, {
      Header: 'Price',
      accessor: 'price',
      // Cell: props => <span>{props.value}</span> // Custom cell components!
    }, {
      Header: 'Feature A',
      accessor: 'feature_a',
    }, {
      Header: 'Feature B',
      accessor: 'feature_b',
    },
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
