import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import style from './styles/modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


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

function RenderNewRow(props) {
  const [newRow,setNewRow] = React.useState({});
  React.useEffect(() => {
    for (var i = 0; i < props.table.fields.length; i++) {
      newRow[props.table.fields[i].name] = '';
    }
    setNewRow(newRow);
  }, [props.table.fields]);

  console.log('newRow: ', newRow);
  function handleAddNewRow(event) {
    event.preventDefault();
    console.log(props.table);
    var rows = [...props.table.rows];
    newRow.id = Math.random();
    rows.push(newRow);
    props.table.rows= rows;

    console.log('rows: ', rows);
    console.log('newRow: ', props.table);
    props.updateTable(props.tableId,props.table);
  }
  return (
    <Modal
    open={props.modalProps.open}
    onClose={props.modalProps.handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    
    <Box sx={style}>
    {/* <button onClick={handleAddNewRow}>hi</button> */}
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <div className='flex justify-between'>
            Set the values for the new row
        </div>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <div>
          {
            props.table.fields.map(field => <NewTableField field={field} newRowProps={{
              newRow: newRow,
              setNewRow: setNewRow,
            }} />)
          }
        </div>
      </Typography>
      <Button onClick={handleAddNewRow}>Create</Button>
    </Box>
  </Modal>
  )
}


function NewTableField(props) {
  // console.log('NewTableField props: ', props);
  var field = props.field;
  var newRow = props.newRowProps.newRow;
  var setNewRow = props.newRowProps.setNewRow;

  function handleOnFieldChange (event) {
    event.preventDefault();
    newRow[field.name] = event.target.value;
    setNewRow(newRow);
  }
  return (
          <div className='flex items-center mb-2 justify-between'>
            <label className='mr-2'>{field.name}</label>
            <TextField onChange={handleOnFieldChange} label={field.type} variant="outlined" />
          </div>
  )
}

export function DataTable(props) {
  // Modal to add a new row
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var table = props.table;
  function getColumns(table){
    var columns = [];
    // columns.push({ field: 'id', width: 70 });
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
      <RenderNewRow table={table} updateTable={props.updateTable} modalProps={{
        open: open,
        handleOpen: handleOpen,
        handleClose: handleClose,
      }}/>
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
          <IconButton onClick={setOpen}>
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
