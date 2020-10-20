import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../actions';

export const useListFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listActions.getListFetch());
    }, [dispatch]);

    const {
        data,
        isFetching,
        error,
    } = useSelector((state) => state.list);

    const receivedData = () => {
        if (!isFetching && data && data.length !== 0) {
            return data;
        };
    };

    return {
        data,
        isFetching,
        error,
        receivedData,
    }
}