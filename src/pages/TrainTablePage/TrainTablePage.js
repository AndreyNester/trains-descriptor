import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './TrainTablePage.module.css';
import cn from 'classnames';
import { TableWrapper } from '../../shared/TableWrapper';
import { TrainsTable, TrainCharactericticTable } from '../../features/train/';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { useEffect } from 'react';
import { getTrains } from '../../app/store/trainSlice';
const TrainTablePage = ({ className, ...rest }) => {
    const { isLoading, trains, openedDescriptionId } = useAppSelector((state) => state.trains);
    const dispatch = useAppDispatch();
    const classes = cn({
        [styles.trainTablePage]: true,
        className
    });
    useEffect(() => {
        dispatch(getTrains());
    }, []);
    return (_jsxs("section", { className: classes, ...rest, children: [_jsx(TableWrapper, { className: styles.trainsTable, children: _jsx(TrainsTable, { isLoading: isLoading, trains: trains }) }), openedDescriptionId !== null ?
                _jsx(TableWrapper, { className: styles.trainCharactericticTable, children: _jsx(TrainCharactericticTable, { train: trains[openedDescriptionId] }) }) : null] }));
};
export default TrainTablePage;
