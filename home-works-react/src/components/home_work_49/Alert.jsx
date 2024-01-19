import React from "react";
import classNames from "classnames";

class Alert extends React.Component {
    render() {
        const {color, text} = this.props;

        const alertClassType = classNames("alert", {
            "alert-primary": color === "blue",
            "alert-secondary": color === "grey",
            "alert-success": color === "green",
            "alert-danger": color === "red",
            "alert-warning": color === "yellow",
            "alert-info": color === "lightBlue",
            "alert-light": color === "whiteLightText",
            "alert-dark": color === "greyDarkText",
        });

        return (
            <div className={alertClassType} role="alert">{text}</div>
        );
    }
}

export default Alert;