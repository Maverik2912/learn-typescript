import React from "react";

import {PostType} from "../PostType/PostType";
import styles from './Post.module.css';

interface PostProps {
    post: PostType,
    activePostId: number | null,
    clickHandler: (id: number) => void,
    closeDetailInfo: () => void
}
const Post: React.FC<PostProps> = ({post, clickHandler, closeDetailInfo, activePostId }) => {
    const {id, title, body, userId} = post;

    return (
        <>
            {activePostId !== id ?
                <div className={styles.postContainer}>
                    <h4 className={styles.postTitle}>{id}. {title}</h4>
                    <button className={styles.myBtn} onClick={() => clickHandler(id)}>More</button>
                </div>
                :
                <div className={styles.postContainer}>
                    <h4 className={styles.postTitle}>{id}. {title}</h4>
                    <ul className={styles.details}>
                        <li><b>User id: </b>{userId}</li>
                        <li><b>Post text:</b> {body}</li>
                    </ul>
                    <button className={styles.myBtn} onClick={() => closeDetailInfo()}>Hide</button>
                </div>

            }

        </>
    );
};

export {Post};