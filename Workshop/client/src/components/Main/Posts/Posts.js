import style from './Posts.module.css'

import Post from './Post'

function Posts() {
    let msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est unde neque cumque. Ut est itaque libero voluptatum nesciunt, autem dicta? Quaerat, assumenda quo ad vel excepturi sint impedit ratione asperiores hic veniam ullam, necessitatibus, nihil ab quas in recusandae! Porro, suscipit repellat, sit laudantium corrupti odio earum ex harum voluptatum commodi reprehenderit autem eos vero distinctio atque. Repellat autem aspernatur quis consectetur inventore eligendi, doloribus dolorum, asperiores dolor provident officia? Alias rem magni odio? Perspiciatis unde dignissimos soluta laborum magnam! Voluptatibus ipsam, itaque dolorum doloribus dicta ex, quia deserunt facere quod temporibus in nemo dignissimos quisquam unde quae error?";

    return(
        <div className={style.posts}>
            <Post text={msg} author="Some Anonymous"></Post>
            <Post text={msg} author="Some Anonymous"></Post>
            <Post text={msg} author="Some Anonymous"></Post>
            <Post text={msg} author="Some Anonymous"></Post>
        </div>
    ); 
}

export default Posts;