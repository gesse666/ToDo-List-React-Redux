// создаем счетчик
let nextReviewId = 2;

// экспортируем функцию добавления комментариев
export const addReview = (name, description, time) => {
    return {
        type: 'ADD_REVIEW',
        id: nextReviewId++,
        name: name,
        description: description,
        time: new Date().getDate() + "." + new Date().getMonth() + "." + new Date().getFullYear() + ", " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    }
}

// экспортируем функцию удаления комментариев
export const removeReview = (id) => {
    return {
        type: 'REMOVE_REVIEW',
        id: id
    }
}
