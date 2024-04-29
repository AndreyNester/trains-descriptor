import { jsx as _jsx } from "react/jsx-runtime";
import cn from "classnames";
import styles from './Button.module.css';
const Button = ({ children, className, type = 'submit', ...rest }) => {
    const classes = cn(className, {
        [styles.button]: true
    });
    return _jsx("button", { className: classes, type: type, ...rest, children: children });
};
export default Button;
