import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from "classnames";
import styles from './TrainsTable.module.css';
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { openDescription } from "../../../../app/store/trainSlice";
const TrainsTable = ({ className, isLoading, trains = [], ...rest }) => {
    const dispatch = useAppDispatch();
    const activeId = useAppSelector((state) => state.trains.openedDescriptionId);
    const classes = cn(className, {
        [styles.table]: true,
    });
    const getClassName = (id) => cn({
        [styles.trow]: true,
        [styles.active]: trains[id].id === activeId
    });
    const onOpenDescription = (id) => {
        dispatch(openDescription(id));
    };
    return (isLoading ? _jsx("div", { children: "loading..." }) :
        _jsxs("table", { className: classes, ...rest, children: [_jsx("caption", { className: styles.caption, children: "\u041F\u043E\u0435\u0437\u0434\u0430" }), _jsx("thead", { className: styles.thead, children: _jsxs("tr", { children: [_jsx("th", { children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" }), _jsx("th", { children: "\u041E\u043F\u0441\u0430\u043D\u0438\u0435" })] }) }), _jsx("tbody", { children: trains.map((item) => (_jsxs("tr", { className: getClassName(item.id), onClick: () => onOpenDescription(item.id), children: [_jsx("td", { children: item.name }), _jsx("td", { children: item.description })] }, item.id))) })] }));
};
export default TrainsTable;
