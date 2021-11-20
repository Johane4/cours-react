import { useState, useEffect, useRef, Fragment } from 'react';

const TIMER_COUNT = 1000;

const Counter = () => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const refTimer = useRef(null);

    const start = () => {
        setActive(true);
    }

    const stop = () => {
        setActive(false);
        clearTimeout(refTimer.current);
    }

    const reset = () => {
        setActive(false);
        clearTimeout(refTimer.current); // stoper ici
        setCount(0);
    }

    useEffect(() => {

        if (active === true) {
            // current est propriété de l'objet useRef 
            // permet de définir un objet => ref unique 
            refTimer.current = setTimeout(() => {
                setCount(count + 1);
            }, TIMER_COUNT);
        }

    }, [count, active]);

    // juste au démontage
    useEffect(() => { return () => clearTimeout(refTimer.current); }, []);

    const showReset = () => {
               
        if (count > 0) {

            return (
                <p><button onClick={reset}>Reset</button></p>
            );
        }
    }

    return (
        <Fragment>
            <div>Counter : {count}</div>
            <p><button disabled={active} onClick={start}>Start</button></p>
            <p><button disabled={!active} onClick={stop}>Stop</button></p>
            {showReset()}
        </Fragment>
    );
};

export default Counter;