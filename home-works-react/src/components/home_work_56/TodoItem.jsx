import React from "react";

class TodoItem extends React.Component {
    render() {
        const { task, onRemove } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button
                            onClick={onRemove}
                            id={task.id}
                            type="button"
                            className="btn btn-primary btn-sm"
                        >
                            -
                        </button>
                    </div>
                    <div className="col">{task.value}</div>
                </div>
                <hr />
            </div>
        );
    }
}

export { TodoItem };