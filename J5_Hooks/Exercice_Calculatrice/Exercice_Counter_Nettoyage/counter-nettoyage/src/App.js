import './App.css';
import { useState, useEffect } from 'react';

const TIMER_COUNT = 1000;

    const App = () => {
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(10);
    
    useEffect(() => {

        if( active && count > 0 )
            setTimeout(() => {
                setCount(count - 1);
            }, TIMER_COUNT);
        
        /*
            Ce mécanisme optionnel nettoye les effets du rendu. 
            Tout effet (changement des props ou state) peut renvoyer une fonction 
            qui se chargera de son propre nettoyage

            1. est exécutée lorsque les states changent de valeur
            2. Ou on démontage de App (ici on ne le fait pas)
        */
        return () => {
            if(count === 1) { 
                setActive(false); 
                setCount(10) ; 
            }
        }
    }, [count, active]); // il faut écouter la variable active 


    return (
        <div>
            { active === false && <button onClick={() => setActive(true)}>Go</button> }
            <p>{count}</p>
        </div>
    )
}

export default App;
