// Работа начинается в файле, указанном в package.json см(title)

// Подключаем все необходимые штуки

import './css/style.css'
import React from 'react';
import ReactDOM from 'react-dom';

// подключаем редюссер
import review from './reducers';

// подключаем создать стор
import {createStore} from 'redux';

// поделючаем контейнер с приложением
import Reviewspost from './containers/app.js';

// создаем начальное состояние приложения
const initialState = [
        {id: 1, name: 'Mister React', description: 'Hello World!', time: '7.06.2019, 11:40:31'}
];

// берем значения из локал сторадж по ключу rewiewsLocal
const ls = JSON.parse(localStorage.getItem('rewiewsLocal'));

// создаем главное хранилище приложения
const store = () => {
  // если сторадж не пуст
    if(localStorage.getItem('rewiewsLocal') !== null) {
      // создать новый стор из комментариев и review
        return createStore(review, ls);
    } else {
            // создать новый стор из комментариев и начального состояния
        return createStore(review, initialState);
    }
}

// рендерим наш контейнер содержащий в себе стор
ReactDOM.render(
    <Reviewspost store={store()} />,
    document.querySelector('.container')
);
