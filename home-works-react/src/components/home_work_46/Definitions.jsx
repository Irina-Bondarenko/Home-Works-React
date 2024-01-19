import React from "react";

class Definitions extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <dl>
                {data.map(item => (
                    <>
                        <dt key={item.id}>{item.dt}</dt>
                        <dd key={item.id}>{item.dd}</dd>
                    </>
                ))}
            </dl>
        );
    }
}

export default Definitions;