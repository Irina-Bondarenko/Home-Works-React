import React from "react";

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    getData = async () => {
        const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await postsRes.json();
        this.setState({ posts: posts });
    };
    componentDidMount() {
        this.getData();
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="posts">
                <ul className="posts__list">
                    {posts.map((item) => (
                        <li
                            key={item.id}
                            className="posts_single-post"
                            data-post-id={item.id}
                        >
                            <h3 className="posts__post-title">{item.title}</h3>
                            <p className="posts__post-description">{item.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export { PostCatalog };