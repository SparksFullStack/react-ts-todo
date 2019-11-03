import axios from 'axios';
import { Dispatch } from 'redux';

const reqUrl = 'http://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get(reqUrl);

        dispatch({
            type: 'FETCH_TODOS',
            payload: response.data
        });
    };
};