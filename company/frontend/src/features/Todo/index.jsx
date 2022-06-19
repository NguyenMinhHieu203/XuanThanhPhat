import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import TodoFormCreate from './components/TodoFormCreate';
import TodoFormUpdate from './components/TodoFormUpdate';
import './styles.scss';

Todo.propTypes = {};

function Todo(props) {
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);

  const handleClickCreate = () => {
    setOpen(true);
    setUpdate(false);
  };
  const handleClickUpdate = () => {
    setOpen(true);
    setUpdate(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="todo">
      <div className="todo__title">Todos</div>
      <Button variant="contained" onClick={() => handleClickCreate()}>
        Create
      </Button>
      <Button variant="contained" onClick={() => handleClickUpdate()}>
        Update
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update</DialogTitle>
        <DialogContent>{update ? <TodoFormUpdate /> : <TodoFormCreate />}</DialogContent>
      </Dialog>
    </div>
  );
}

export default Todo;
