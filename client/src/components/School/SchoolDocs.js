import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  dialogContent: {
    padding: theme.spacing(2),
    minWidth: '400px',
  },
}));

export const SchoolDocs = ({open, handleClose, docs}) => {
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Documents</DialogTitle>

      <List>
        {docs === (null || undefined) ? (
          <p>No Docs Yet ...</p>
        ) : (
          docs.map((doc, index) => {
            return (
              <div key={index} className={classes.dialogContent}>
                <ListItem>
                  <ListItemText primary={doc.name} />
                  <Link href={doc.url} target="_blank" rel="noopenner">
                    View
                  </Link>
                </ListItem>
                <Divider light />
              </div>
            );
          })
        )}
      </List>
    </Dialog>
  );
};
