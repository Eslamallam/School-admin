import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import Note from '@material-ui/icons/NoteAdd';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {doAddRejSchool} from '../../actions/rejectedSchool';
import {doAddAcceptedSchool} from '../../actions/acceptedSchool';
import {deleteSchool} from '../../actions/school';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {SchoolDocs} from './SchoolDocs';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
  tblCell: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export const SchoolItem = ({id, name, status, documents}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow key={id}>
        <TableCell align="left">{name}</TableCell>
        <TableCell align="left">{status}</TableCell>
        <TableCell align="center" className={classes.tblCell}>
          <IconButton
            edge="end"
            aria-label="check"
            onClick={() => {
              dispatch(doAddAcceptedSchool({name}));
              dispatch(deleteSchool({id}));
            }}
          >
            <Check style={{color: green[500]}} />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="clear"
            onClick={() => {
              dispatch(doAddRejSchool({name}));
              dispatch(deleteSchool({id}));
            }}
          >
            <Clear color="secondary" />
          </IconButton>
          <IconButton edge="end" aria-label="note" onClick={handleClickOpen}>
            <Note color="action" />
          </IconButton>
        </TableCell>
        <SchoolDocs open={open} handleClose={handleClose} docs={documents} />
      </TableRow>
    </>
  );
};
