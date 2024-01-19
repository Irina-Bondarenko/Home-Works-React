const Header = (props) => {
    return (
        <div className="modal-header">
            <div className="modal-title">{props.children}</div>
            <button
                onClick={props.toggle}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default Header;