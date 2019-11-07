import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import styles from './MaterialButton.module.scss';

interface OwnProps {
  text: string;
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
    textDecoration: 'underline',
    '&:hover': {
      color: 'green',
      backgroundColor: 'yellow',
      textDecoration: 'underline',
    },
  },
  input: {
    display: 'none',
  },
}));

const MaterialButton: FunctionComponent<Props> = ({ text }) => {
  const classes = useStyles();

  return <Button
    className={classes.button}
    color="secondary"
    href="#"
    size="large"
  >{text}</Button>;
};

export default MaterialButton;
