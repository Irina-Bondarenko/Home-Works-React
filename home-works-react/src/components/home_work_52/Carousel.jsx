import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1,
        };
    }

    previousSlide = () => {
        if (this.state.slideIndex !== 1) {
            this.setState({ slideIndex: this.state.slideIndex - 1 });
        } else if (this.state.slideIndex === 1) {
            this.setState({ slideIndex: this.props.children.length });
        }
    };

    nextSlide = () => {
        if (this.state.slideIndex !== this.props.children.length) {
            this.setState({ slideIndex: this.state.slideIndex + 1 });
        } else if (this.state.slideIndex === this.props.children.length) {
            this.setState({ slideIndex: 1 });
        }
    };

    render() {
        return (
            <div className="container d-flex mt-5">
                <button
                    className="slidePrevious btn btn-outline-primary"
                    onClick={this.previousSlide}
                >
                    Previous Slide
                </button>
                <div className="carousel slide">
                    <div className="carousel-inner">
                        {this.props.children.map((item, index) => (
                            <div
                                key={index}
                                className={`animate__animated carousel-item animate__fadeIn ${
                                    this.state.slideIndex === index + 1 ? "active" : ""
                                }`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="slideNext btn btn-outline-primary"
                    onClick={this.nextSlide}
                >
                    Next Slide
                </button>
            </div>
        );
    }
}

export default Carousel;