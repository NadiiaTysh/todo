import { root } from './config';

export const api = Object.freeze({
    todos: {
        getFetch: () => {
            return fetch(`${root}/todos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user': 'tyshko',
                },
            });
        },
        addFetch: (payload) => {
            return fetch(`${root}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user': 'tyshko',
                },
                body: JSON.stringify(payload),
            });
        },
        editFetch: (payload, hash) => {
            return fetch(`${root}/todos/${hash}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user': 'tyshko',
                },
                body: JSON.stringify(payload),
            })
        },
        removeFetch: (hash) => {
            return fetch(`${root}/todos/${hash}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user': 'tyshko',
                },
            })
        },
    },
})