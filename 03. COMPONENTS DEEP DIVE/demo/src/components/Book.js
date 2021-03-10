 // Create style object from css file
 // And css classes are isolated
 import style from './Book.module.css';
 
 function Book(props) {
    return (
        <article onClick={props.clickHandler}>
            <h3>{ props.title }</h3>
            <span className={style.description}>{ props.description || 'Default Description' }</span>
        </article>
    );
 }

 export default Book;