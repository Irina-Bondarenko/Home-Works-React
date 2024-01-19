import React, { Component } from "react";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: props.opened,
        };
    }

    collapseHandle = () => {
        const { isShown } = this.state;
        this.setState({ isShown: !isShown });
    };

    render() {
        const { isShown } = this.state;
        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={isShown}
                        onClick={this.collapseHandle}
                    >
                        {isShown ? "Show" : "Hide"}
                    </a>
                </p>
                <div className={`collapse ${isShown ? "show" : ""}`}>
                    <div className="card card-body">{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default Collapse;
