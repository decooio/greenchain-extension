import React from 'react';
// import Draggable from 'react-draggable';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import './styles.css';

function PaperComponent(props) {
  return (
    // <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
    <Paper {...props} />
    // </Draggable>
  );
}

function DraggableDialog({
  isOpen,
  handleClose,
  title,
  msg,
  handleYes,
  isShowTextField,
  onTextChange,
  propName,
  yesText,
  noText,
  textFieldLabel,
  textFieldType,
  importVaultFileName,
  classes,
}) {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        classes={{ paper: classes.paperRoot }}
      >
        <DialogTitle
          classes={{ root: classes.titleRoot }}
          style={{ cursor: 'move' }}
          id="draggable-dialog-title"
        >
          {title}
        </DialogTitle>
        <DialogContent classes={{ root: classes.contentRoot }}>
          <DialogContentText align="center">{importVaultFileName}</DialogContentText>
          <DialogContentText classes={{ root: classes.textRoot }}>{msg}</DialogContentText>
          {isShowTextField && (
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label={textFieldLabel}
              type={textFieldType}
              name={propName}
              onChange={onTextChange(propName)}
              fullWidth
            />
          )}
        </DialogContent>
        <DialogActions classes={{ root: classes.root }}>
          <div className="button-secondary">
            <Button onClick={handleClose} color="primary" variant="contained" autoFocus>
              {noText}
            </Button>
          </div>
          <div className="button-primary">
            <Button onClick={handleYes} color="primary">
              {yesText}
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(DraggableDialog);
