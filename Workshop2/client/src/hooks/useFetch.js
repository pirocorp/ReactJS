import { useState, useEffect } from 'react';

function useFetch (url, initialValue) {
    const [state, setState] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({})

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() =>{
            fetch(url)
            .then(res => res.json())
            .then(result => setState(result))
            .catch(err => setError(err))
            .finally(setIsLoading(false));
        }, 1000);


    }, [url]);

    return [
        state,
        isLoading,
        error
    ];
}

export default useFetch;