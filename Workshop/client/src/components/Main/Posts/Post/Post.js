import style from './Post.module.css';

function Post({
    text,
    author
}) {
    return(
        <div className={style.post}>
            <img src="/logo/blue-origami-bird.png" alt="Origami"/>
            <p className={style.description}>
                {text}
            </p>
            <div>
                <span>
                    <small>Author: </small>
                    {author}
                </span>
            </div>
        </div>
    ); 
}

export default Post;