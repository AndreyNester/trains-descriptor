import cn from "classnames";
import { IButtonProps } from "./types";
import styles from './Button.module.css';

const Button = ({children, className, type='submit', ...rest} : IButtonProps ) :JSX.Element => {

  const classes = cn(className, {
    [styles.button] : true
  })

  return <button className={classes} type={type} {...rest}>{children}</button>

}
export default Button;