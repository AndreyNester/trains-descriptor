
import cn from 'classnames';
import styles from './Layout.module.css';
import ILayoutProps from './types';

const Layout : React.FC<ILayoutProps> = ({children, className, ...rest}: ILayoutProps ) : JSX.Element => {
  const classes = cn(className, {
    [styles.container] : true
  });

  return (<div className={classes} {...rest}>{children}</div>)
}

export default Layout;