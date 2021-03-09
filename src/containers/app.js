// загружаем реакт
import React from 'react';

// загружаем объект коннект
import { connect } from 'react-redux';

// загружаем компоненты
import ReviewMain from '../components/main.js';
import ReviewInput from '../components/input.js';

// загружаем экшены
import { addReview, removeReview } from '../action';

// создаем функцию принимающую пропсы комментариев
let Reviewspost = (props) => {

  // ???
    const {
        review, addReview, removeReview
    } = props;
// возврашаем в JSX внешний вид страницы подключая компоненты
    return (
        <div className="block">
            <ReviewMain review={review} removeReview={removeReview} />
            <ReviewInput addReview={addReview} />
        </div>
    )
}

// передаем текущее состояние
const mapStateToProps = (state) => {
    if (localStorage.getItem('rewiewsLocal') !== null) {
        return {
            review: JSON.parse(localStorage.getItem('rewiewsLocal'))
            }
    } else {
        return {
            review: state
        }
    }
}

// отправляем экшены
const mapDispatchToProps = (dispatch) => {
    return {
        addReview: (name, description, time) => dispatch(addReview(name, description, time)),
        removeReview: (id) => dispatch(removeReview(id)),
    }
}

// присоединяем все данные к нашей функции
Reviewspost = connect(
        mapStateToProps,
        mapDispatchToProps
)(Reviewspost);

// экспортируем ее
export default Reviewspost
