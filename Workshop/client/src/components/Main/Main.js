import style from './Main.module.css'
import Posts from './Posts/Posts'

function Main({
    posts
}) {
    return(
        <main className={style.main}>
            <h1>Some Heading</h1>

            <Posts posts={posts}></Posts>
        </main>
    );
}

export default Main;