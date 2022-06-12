import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TableField(props) {
  console.log('TableField props: ', props);
  var id = props.id;
  var fields = props.fields;
  var setFields = props.setFields;
  console.log(fields);
  function handleOnNameChange (event) {
    event.preventDefault();
    fields[id].name = event.target.value;
    setFields(fields);
  }
  function handleOnTypeChange (event) {
    event.preventDefault();
    fields[id].type = event.target.value;
    setFields(fields);
  }
  function handleOnRadioChange (event) {
    event.preventDefault();
    fields[id].pk = event.target.value;
    setFields(fields);
  }
    return (
        <div className='flex mb-2' id={id}>
            {/* two text fields in a row */}
            <input onChange={handleOnNameChange} type="text" className="border h-12 mr-2 p-2" placeholder='Field Name'/>
            <input onChange={handleOnTypeChange} type="text" className="border h-12 mr-2 p-2" placeholder='Field Type'/>
            <FormControlLabel onSelect={handleOnRadioChange} value={id} control={<Radio />} label="PK" />
        </div>
    );
}

export default function AddTable(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tableName, setTableName] = React.useState('');

  
  const [fields, setFields] = React.useState([]);

  function handleAddNewField(){
        var id = fields.length;
        // var newField = <TableField id={id} fields={fields} setFields={setFields} />;
        setFields([...fields, {id: id, name: '', type: '',pk: false}]);
        
  }

  function submitForm(){
    props.addNewTable(tableName,fields);
  }

  function handleOnRadioChange (event) {
    event.preventDefault();
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].id == event.target.value) {
        fields[i].pk = true;
      }else{
        fields[i].pk = false;
      }
    }
    setFields(fields);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Add new Table</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='flex flex-col mb-2'>
                <p className='mb-2'>Choose table name</p>
                <TextField onChange={(value)=>{
                    setTableName(value.target.value);
                }} id="outlined-basic" label="Table Name" variant="outlined" />
            </div>
        </Typography>
        
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='flex justify-between'>
                Choose the fields
                <Button onClick={handleAddNewField}>Add field</Button>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
            <FormControl >
                
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="0"
                    name="radio-buttons-group"
                    onChange={handleOnRadioChange}
                >
                    {
                        fields.map(field => <TableField id={field.id} fields={fields} setFields={setFields}  />)
                    }
                </RadioGroup>
                <Button onClick={submitForm} >Create</Button>
                </FormControl>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
