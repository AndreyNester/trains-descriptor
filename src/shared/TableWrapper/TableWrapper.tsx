import styles from './TableWrapper.module.css';
import { ITableWrapper } from './types';
import cn from 'classnames';

const TableWrapper = ({children, className, ...rest} : ITableWrapper): JSX.Element => {

  const classes = cn({
    className,
    [styles.wrapper] : true,
  });

  return <div className={classes} {...rest}>{children}</div>
}
export default TableWrapper;