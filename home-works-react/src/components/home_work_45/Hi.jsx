import React from "react";

class Hi extends React.Component {
    render() {
        const { text, title } = this.props;

        if (text === undefined || title === undefined) {
            return null;
        }

        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        );
    }
}

export default Hi;