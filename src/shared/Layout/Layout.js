import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import styles from './Layout.module.css';
const Layout = ({ children, className, ...rest }) => {
    const classes = cn(className, {
        [styles.container]: true
    });
    return (_jsx("div", { className: classes, ...rest, children: children }));
};
export default Layout;
