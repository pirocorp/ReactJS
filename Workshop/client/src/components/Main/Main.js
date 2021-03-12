import style from './Main.module.css'
import Posts from './Posts/Posts'

function Main() {
    return(
        <main className={style.main}>
            <h1>Sooooooooome Heading</h1>

            <Posts></Posts>
        </main>
    );
}

export default Main;