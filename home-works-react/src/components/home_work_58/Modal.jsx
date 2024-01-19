import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import "./modal.css";

class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const { isOpen } = this.props;
        const classNameModal = isOpen ? "modal fade show modal-style" : "modal";

        return (
            <div className={classNameModal} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export { Modal };