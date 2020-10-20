import { useSelector, useDispatch } from 'react-redux';
import { useListFetch } from '../../taskList/hooks/useListFetch';
import { globalizedActions } from '../actions';

export const useGlobalizedSet = () => {
    const dispatch = useDispatch();
    const { data, isFetching, error, receivedData } = useListFetch();

    const {
        isShownBlankCard,
        isShownSelectedCard,
        filteredData,
    } = useSelector((state) => state.globalized);

    const handleNewTask = () => {
        dispatch(globalizedActions.showNewTask());
    };

    const handleSelectItem = (hash) => {
        const [filteredData] = data.filter((item) => {
            return item.hash === hash});
        dispatch(globalizedActions.showSelectedTask(filteredData));
    };

    return {
        data,
        isFetching,
        error,
        receivedData,
        isShownBlankCard,
        handleNewTask,
        isShownSelectedCard,
        handleSelectItem,
        filteredData,
    }
}