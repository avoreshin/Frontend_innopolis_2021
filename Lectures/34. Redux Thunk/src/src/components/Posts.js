import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../app/reducers/posts";

function Posts() {
    const { entities, loading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Blog Posts</h2>
            {entities.map((post) => {
                return (<p key={post.id}>{post.title}</p>);
            })
            }
        </div>
    )
}

export default Posts;
