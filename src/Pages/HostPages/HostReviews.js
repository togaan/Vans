import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';


const HostReviews = () => {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    return (
        <div className="host">
            <div className="container pt-5">
                <section className="host-reviews">
                    <div className="top-text">
                        <h2>Your reviews</h2>
                        <p>
                            Last <span>30 days</span>
                        </p>
                    </div>
                    <div className="overall-rating pb-5">
                        <div className="d-flex align-items-center gap-2">
                            <h1 className="fw-bolder">5.0</h1>
                            <FontAwesomeIcon icon={faStar} className="fs-4 review-star" />
                            <h4 className="">overall rating</h4>
                        </div>
                        <div className="rates ">
                            <div className="d-flex align-items-center gap-5 rate">
                                <h4>5 stars</h4>
                                <div className="w-75 rounded-3 progres"></div>
                                <h4>100%</h4>
                            </div>
                            <div className="d-flex align-items-center gap-5 rate">
                                <h4>4 stars</h4>
                                <div className="w-75 rounded-3 progres"></div>
                                <h4>0%</h4>
                            </div>
                            <div className="d-flex align-items-center gap-5 rate">
                                <h4>3 stars</h4>
                                <div className="w-75 rounded-3 progres"></div>
                                <h4>0%</h4>
                            </div>
                            <div className="d-flex align-items-center gap-5 rate">
                                <h4>2 stars</h4>
                                <div className="w-75 rounded-3 progres"></div>
                                <h4>0%</h4>
                            </div>
                            <div className="d-flex align-items-center gap-5 rate">
                                <h4>1 stars</h4>
                                <div className="w-75 rounded-3 progres"></div>
                                <h4>0%</h4>
                            </div>
                        </div>
                    </div>
                    <h3>Reviews (2)</h3>
                    {reviewsData.map((review) => (
                        <div key={review.id}>
                            <div className="review">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} className="fs-5 review-star" key={i}/>
                                ))}
                                <div className="info">
                                    <p className="name">{review.name}</p>
                                    <p className="date">{review.date}</p>
                                </div>
                                <p>{review.text}</p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default HostReviews