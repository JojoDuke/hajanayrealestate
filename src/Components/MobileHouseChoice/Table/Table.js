import React from 'react';
import { useTable } from 'react-table';
import { useHistory } from 'react-router-dom';

/*SASS*/
import './Table.scss';

const Table = ({ columns, data }) => {

    const history = useHistory();

    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <div className="table-container">
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            const id = row.original.id; // Using original id from data
            return (
                <tr {...row.getRowProps()} onClick={()=>{row.original.available === "K dispozici" && history.push('/detail-domu/' + id)}} className={row.original.available === "K dispozici" ? "hoverable" : ""}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    )
  }

  export default Table;