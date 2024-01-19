import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            idNew: 0,
            itemsLog: [],
        };
    }

    addBtn = () => {
        const data = { ...this.state };
        const addDataId = (data.id += 1);
        data.itemsLog = [{ id: data.id, idNew: addDataId }, ...this.state.itemsLog];

        this.setState(data);
    };

    decreaseBtn = () => {
        const data = { ...this.state };
        const decreaseDataId = (data.id -= 1);
        data.itemsLog = [
            { id: data.id, idNew: decreaseDataId },
            ...this.state.itemsLog,
        ];

        this.setState(data);
    };

    removeLog = ({ target }) => {
        const data = { ...this.state };
        const targetValueNum = Number(target.value);
        const newItems = data.itemsLog.filter((item) => item.id !== targetValueNum);
        this.setState({ itemsLog: newItems });
    };

    render() {
        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button
                        onClick={this.addBtn}
                        type="button"
                        className="btn btn-outline-success"
                    >
                        +
                    </button>
                    <button
                        onClick={this.decreaseBtn}
                        type="button"
                        className="btn btn-outline-danger"
                    >
                        -
                    </button>
                </div>
                <div className="list-group d-flex flex-direction-column">
                    {this.state.itemsLog.map((item) => (
                        <button
                            key={item.id}
                            onClick={this.removeLog}
                            value={item.id}
                            type="button"
                            className="list-group-item list-group-item-action"
                        >
                            {item.idNew}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Component;