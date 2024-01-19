import React from "react";
import classNames from "classnames";

class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLeft: "",
            activeRight: "",
        };
    }

    clickHandleLeft = () => {
        this.setState(() => {
            return { activeLeft: "active", activeRight: "" };
        });
    };

    clickHandleRight = () => {
        this.setState(() => {
            return { activeLeft: "", activeRight: "active" };
        });
    };

    render() {
        const btnClassLeft = classNames("btn", "btn-outline-primary", "left", {
            active: this.state.activeLeft,
        });

        const btnClassRight = classNames("btn", "btn-outline-primary", "right", {
            active: this.state.activeRight,
        });

        return (
            <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
            >
                <button
                    type="button"
                    onClick={this.clickHandleLeft}
                    className={btnClassLeft}
                >
                    Left
                </button>
                <button
                    type="button"
                    onClick={this.clickHandleRight}
                    className={btnClassRight}
                >
                    Right
                </button>
            </div>
        );
    }
}

export default ButtonGroup;