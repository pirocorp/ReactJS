import { Redirect, useHistory } from 'react-router';

import style from './About.module.css';

/* Props injected by the Route */
function About({
    match,
    history
}) {
    console.log(match);

    //if (Math.random() > 0.5) {
    //   return <Redirect to="/" />
    //   history.push('/');
    //
    //   return <></>;
    //}

    return(
        <main className="main-container">
            <h1>About {match.params.name} Page</h1>
        </main>
    );
}

export default About;