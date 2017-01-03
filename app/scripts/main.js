import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import router from './router';
import config from './config';

let container = document.getElementById('container');
$(document).ajaxSend((evt, xhr, opts) => {
    if (opts.url.includes('backendless')) {
        console.log('interception backendless headers');
        xhr.setRequestHeader('application-id', config.appKey);
        xhr.setRequestHeader('secret-key', config.secret);
        xhr.setRequestHeader('application-type', 'REST');
        if (window.localStorage.getItem('user-token')) {
            xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'));
        }

    }
});

ReactDom.render(router, container);
