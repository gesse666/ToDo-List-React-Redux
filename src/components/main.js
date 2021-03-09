import React from 'react';

const ReviewMain = (props) => {

    const {review, removeReview, reviews} = props
    return (
        <div className="comment-published-block-container">
            {
                review.map((reviews, id) => {
                    return (
                        <div key={id} className="comment-published-block">
                            <div className="header-comment-published-block">
                                <div className="header-comment-published-block-left">
                                    <img src="src/image/user.svg" alt="user" className="comment-image-published" />
                                    <h2 className="comment-people-published">
                                        {reviews.name}
                                    </h2>
                                </div>
                                <div className="header-comment-published-block-right">
                                    <img src="src/image/cancel.svg"
                                         key={reviews.id}
                                         alt="close"
                                         className="header-comment-published-block-icon close"
                                         onClick={ev => removeReview(reviews.id)}
                                     />
                                </div>
                            </div>
                            <div className="main-comment-published-block">
                                <p className="comment-description-published">
                                    {reviews.description}
                                </p>
                            </div>
                            <div className="footer-comment-published-block">
                                <p className="date-published">
                                    {reviews.time}
                                </p>
                            </div>
                            <span className="circle"></span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ReviewMain
