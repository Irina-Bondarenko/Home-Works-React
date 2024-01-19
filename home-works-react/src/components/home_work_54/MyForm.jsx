import React from "react";
import "./MyForm.css";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStates: {
                email: "",
                password: "",
                address: "",
                city: "",
                country: "",
                checkbox: "true",
            },
            isShown: "hide",
        };
    }

    changeValueHandler = ({ target }) => {
        const { name, value, type, checked } = target;

        const stateObj = this.state.formStates;

        for (let key in stateObj) {
            if (key === name) {
                return this.setState((state) => {
                    return {
                        ...state,
                        formStates: { ...state.formStates, [key]: value },
                    };
                });
            }
            if (key === type) {
                return this.setState((state) => {
                    return {
                        ...state,
                        formStates: {
                            ...state.formStates,
                            [key]: checked ? "true" : "false",
                        },
                    };
                });
            }
        }
    };

    submitHandler = (event) => {
        event.preventDefault();

        this.setState((state) => {
            return { ...state, isShown: "show" };
        });
    };

    backBtnHandler = () => {
        this.setState((state) => {
            return { ...state, isShown: "hide" };
        });
    };

    render() {
        const { isShown } = this.state;
        const { checkbox, address, city, country, email, password } =
            this.state.formStates;

        const data = [
            { title: "acceptRules", value: checkbox, id: 1 },
            { title: "address", value: address, id: 2 },
            { title: "city", value: city, id: 3 },
            { title: "country", value: country, id: 4 },
            { title: "email", value: email, id: 5 },
            { title: "password", value: password, id: 6 },
        ];

        const formShow = isShown === "show" ? "d-none" : "";
        const valuesShow = isShown === "hide" ? "d-none" : "";

        return (
            <>
                <form className={`"form ${formShow}`} name="myForm">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">
                            Email
                        </label>
                        <input
                            onChange={this.changeValueHandler}
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={email}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">
                            Password
                        </label>
                        <input
                            onChange={this.changeValueHandler}
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">
                            Address
                        </label>
                        <textarea
                            onChange={this.changeValueHandler}
                            className="form-control"
                            name="address"
                            id="address"
                            placeholder="1234 Main St"
                            value={address}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">
                            City
                        </label>
                        <input
                            onChange={this.changeValueHandler}
                            type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            value={city}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">
                            Country
                        </label>
                        <select
                            onChange={this.changeValueHandler}
                            id="country"
                            name="country"
                            className="form-control"
                            value={country}
                        >
                            <option>Choose</option>
                            <option value="argentina">Argentina</option>
                            <option value="russia">Vietnam</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input
                                    onChange={this.changeValueHandler}
                                    id="rules"
                                    type="checkbox"
                                    name="acceptRules"
                                    className="form-check-input"
                                    value={checkbox}
                                />
                                Accept Rules
                            </label>
                        </div>
                    </div>
                    <button
                        onClick={this.submitHandler}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Sign in
                    </button>
                </form>
                <div className={valuesShow}>
                    <table className="values-table">
                        <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.value}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <button
                        onClick={this.backBtnHandler}
                        type="button"
                        className="btn btn-danger"
                    >
                        Back to Form
                    </button>
                </div>
            </>
        );
    }
}

export default MyForm;