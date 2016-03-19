'use strict';

import dispatcher from './../../infrastructure/dispatcher';
import api from './../../infrastructure/web.api';

export function getUsers(data) {
    return api.get('api/v1/user', data)
        .then(res => {
            if (!res.hasErrors) {
                dispatcher.dispatch({action: 'users.retrieved', data: res});
            }
        });
}

export function removeUser(id) {
    return api.put(`api/v1/user/${id}/remove`)
        .then(res => {
            if (!res.hasErrors) {
                dispatcher.dispatch({action: 'user.removed', data: res});
            }
        });
}

export function getTeachers() {
    return api.get('api/v1/user', {role: 'teacher'});
}

export function getCurrentUser() {
    return api.get('api/v1/user/current');
}