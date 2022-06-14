import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';


const columns = [
  { field: 'id', width: 70 },
  { field: 'firstName', width: 130 },
  { field: 'lastName',  width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export function DataTable(props) {
  var table = props.table;
  function getColumns(table){
    var columns = [];
    columns.push({ field: 'id', width: 70 });
    table.fields.forEach(field => {
      columns.push({
        field: field.name,
        headerName: field.name,
        type: field.type,
        width: 100,
      });
    });
    return columns;
  }
  function handleOnAddRecord(event) {
    event.preventDefault();
    var newRow = {};
    table.fields.forEach(field => {
      newRow[field.name] = '';
    }
    );
    table.rows.push(newRow);
  }
  return (
    <div style={{ height: 300, width: '100%' }} className="mb-14">
      <div className='flex'>
      <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          
        >
          {table.name}
        </Typography>

        <Tooltip title='Add record'>
          <IconButton onClick={handleOnAddRecord}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
      <DataGrid
        rows={table.rows}
        columns={getColumns(table)}
        pageSize={5}
        rowsPerPageOptions={[5]}
    
      />
    </div>
  );
}
