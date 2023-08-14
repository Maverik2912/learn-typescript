import {useEffect, useState} from "react";
import {PostType} from "../PostType/PostType";
import {postService} from "../../../services/postsService/postService";
import {Post} from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<Array<PostType>>([]);
    const [activePostId, setActivePostId] = useState<null | number>(null);
    const clickHandler = (id: number) => {
        setActivePostId(id);
    }

    const closeDetailInfo = () => {
        setActivePostId(null);
    }

    useEffect(() => {
        postService.getAll().then((data: Array<PostType>) => setPosts(data));
    }, []);
    return (
        <div>
            {posts.map((post: PostType) => <Post
                key={post.id}
                post={post}
                activePostId={activePostId}
                clickHandler={clickHandler}
                closeDetailInfo={closeDetailInfo}
                />
            )}
        </div>
    );
};

export {Posts};