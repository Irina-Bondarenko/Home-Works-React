import React from "react";
import { TodoItem } from "./TodoItem";
import { uniqueId } from "lodash/util";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            dataInputs: [],
        };
    }

    onChangeHandler = ({ target }) => {
        const localDataState = { ...this.state };
        localDataState.inputValue = target.value;
        this.setState(localDataState);
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        const todoItem = {
            id: uniqueId(),
            value: this.state.inputValue,
        };

        this.setState({
            inputValue: this.state.inputValue,
            dataInputs: [todoItem, ...this.state.dataInputs],
        });
    };

    removeHandler = ({ target }) => {
        const newTodos = this.state.dataInputs.filter(
            (item) => item.id !== target.id
        );

        this.setState({ dataInputs: newTodos });
    };

    render() {
        const { inputValue, dataInputs } = this.state;
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input
                                onChange={this.onChangeHandler}
                                type="text"
                                value={inputValue}
                                required=""
                                className="form-control"
                                placeholder="I am going..."
                            />
                        </div>
                        <button
                            onClick={this.onSubmitHandler}
                            type="submit"
                            className="btn btn-primary"
                        >
                            add
                        </button>
                    </form>
                </div>
                {dataInputs.map((item) => (
                    <TodoItem key={item.id} task={item} onRemove={this.removeHandler}>
                        {item.value}
                    </TodoItem>
                ))}
            </div>
        );
    }
}

export { TodoBox };