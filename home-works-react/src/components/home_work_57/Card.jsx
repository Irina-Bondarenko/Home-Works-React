import React from "react";
import Title from "./Title";
import Body from "./Body";

class Card extends React.Component {
    static Title = Title;
    static Body = Body;

    render() {
        return (
            <div className="card">
                <div className="card-body">{this.props.children}</div>
            </div>
        );
    }
}

export default Card;