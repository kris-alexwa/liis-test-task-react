import React from 'react';
import './Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        color: '#1157A7'
    },
    input: {
        color: '#1157A7',
        fontSize: '25px',
        fontWeight: 600
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
    }
}));

function Calendar() {
    const classes = useStyles();
    return (
        <form noValidate>
            <TextField
                classes={{
                    root: classes.root,
                }}
                id="date"
                type="date"
                format="yyyy-"
                defaultValue="2020-07-07"
                InputProps={{
                    classes
                }}
                
            />
        </form>
    )
}

export default Calendar;