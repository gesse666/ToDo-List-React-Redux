import React from 'react';

// функция приема комментариев принимает эддревью который мы берем из экшенов
const ReviewInput = ({addReview}) => {
  // возвращаем JSX элемент представляющий поля ввода
    return (
        <div>
            <hr className="line" />
            <div className="comment-block">
                <h2 className="title">Напишите свой отзыв:</h2>
                <input
                type="text"
                name='review'
                className="comment-name"
                placeholder="Ваше имя:"
                required
                />
                <textarea
                name='review'
                className="comment"
                placeholder="Ваш комментарий"
                required

                >
                </textarea>
                <input
                type="submit"
                name='review'
                className="comment-btn"
                value="Отправить"
                onClick={ev => {
                  // берем значение из инпута коммент нейм
                    let name = document.querySelector('.comment-name').value;
                  // берем значение из инпута коммент
                    let description = document.querySelector('.comment').value;
                  // если зачения пусты запускаем алерт
                    if(name == '' || description == '') {
                        alert('Вы заполнили не все поля!');
                    } else {
                  // если зачения есть запускам функцию эддревью со значениями наших инпутов
                        addReview(name, description);
                  //очищаем все значения
                        name = document.querySelector('.comment-name').value = '';
                        description = document.querySelector('.comment').value = '';
                    }

                }}
                />
            </div>
        </div>
    )
}

export default ReviewInput
