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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TableField(id) {
    return (
        <div className='flex' id={id}>
            <TextField class="mr-2" id='0' label="Field type" variant="outlined" />
            <TextField class="mr-2" id='1' label="Field Name" variant="outlined" />
            {/* <FormControlLabel value={id} control={<Radio />} label="PK" /> */}
        </div>
    );
}

export default function AddTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var schema = {};
  const [fields, setFields] = React.useState([]);

  function handleAddNewField(){
        setFields([...fields, TableField(fields.length)]);
  }

  function submitForm(){
        // Parse and add everything to schema and send to app.js as callback
        console.log(schema);
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
            <div className='flex justify-between'>
                Choose the fields
                <Button onClick={handleAddNewField}>Add field</Button>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
            <FormControl>
                
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="0"
                    name="radio-buttons-group"
                >
                    {
                        fields.map(field => TableField(field))
                    }
                </RadioGroup>
                </FormControl>
            </div>
            <Button onClick={submitForm} >Create</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
