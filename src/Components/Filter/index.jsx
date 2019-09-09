import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
  menu: {
    'font-size': '14px'
  }
}));

function Filter({ data, update, setBlank }) {
  const classes = useStyles();
  const [lastName, setLastName] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setLastName(event.target.value);
    update(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <React.Fragment>
      <Select
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={lastName}
        onChange={handleChange}
        inputProps={{
          name: 'lastName',
          id: 'lastName',
        }}
        renderValue={selected => {
          return setBlank === true ? '' : selected;
        }}
        className={classes.menu}
      >
        <MenuItem value="" className={classes.menu}>
          <em>None</em>
        </MenuItem>
        {data.length > 0 &&
          data.map(item => <MenuItem key={item} className={classes.menu} value={item}>{item}</MenuItem>)}
      </Select>
    </React.Fragment>
  );
}
export default Filter;
