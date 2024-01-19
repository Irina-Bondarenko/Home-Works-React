import Definitions from "./Definitions";

function HomeWork46() {
    const definitions = [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
    ];


    return (
        <div className="HomeWork46">
            <Definitions data = {definitions} />
        </div>
    );
}

export default HomeWork46;