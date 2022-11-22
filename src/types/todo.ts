export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS='FETCH_TODOS',
    FETCH_TODOS_SUCCESS='FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR='FETCH_TODOS_ERROR',
    SET_TODO_PAGE='SET_TODO_PAGE',
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodoSuccess {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface FetchTodoError {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}
interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction =
    FetchTodoAction
    | FetchTodoError
    | FetchTodoSuccess
    | SetTodoPage


