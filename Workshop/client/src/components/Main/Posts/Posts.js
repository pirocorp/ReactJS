import style from './Posts.module.css'

import Post from './Post'

function Posts({
    posts
}) {
    let currentPosts = posts.map(p => 
        <Post 
            key={p.id}
            text={p.content} 
            author={p.author}
        ></Post>
    );
      
    return(
        <div className={style.posts}>
            { currentPosts }
        </div>
    ); 
}

export default Posts;