// создаем функцию принимающую состояние, экшены, и объект с комментариями
const review = (state, action, reviews) => {

// проверяем экшены на известные кейсы
    switch (action.type) {
        case 'ADD_REVIEW':
        // создаем массив дополняющий наше состояние
            let nAddState = [
                ...state,
                { id: action.id, name: action.name, description: action.description, time: action.time }
            ];

            // отправляем его в хранилище
            let newAddLocalStorage = JSON.stringify(nAddState);
            localStorage.setItem('rewiewsLocal',  newAddLocalStorage);
            // возвращаем новый массив
            return nAddState

        case 'REMOVE_REVIEW':
        // отфильтровываем удаленные элементы стейта
                let nRemoveState = state.filter((reviews) => reviews.id !== action.id);
            // отправляем его в хранилище
                let newRemoveLocalStorage = JSON.stringify(nRemoveState);
                localStorage.setItem('rewiewsLocal',  newRemoveLocalStorage);
            // возвращаем новый массив
                return nRemoveState

        default:
         return state;
    }

}

export default review;
