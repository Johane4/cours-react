import { useState, useEffect, Fragment } from 'react';
import Users from './components/Users.js';


const URL_USERS = `https://jsonplaceholder.typicode.com/users`;

const Search = () => {
    // pour les personnes à récupérer dans l'api  
    const [users, setUsers] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    // pour le champ de votre formulaire
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    // resultat de la recherche
    const [search, setSearch] = useState([]);

    // On récupère les données
    useEffect(() => {
        // requete sur des serveurs distants 
        // 1. then prépare les données dans un format demané
        // 2. then récupérer les données au format demandé
        fetch(URL_USERS).then(response => {

            // il a récupéré les données
            if (response.ok) {
                // les données ne sont plus en chargement 
                setIsloading(false)

                // retourner les données dans une promesse sous forme d'un JSON
                return response.json();
            }

        }).then(users => setUsers(users)) // 

    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if (user.trim() === '') {

            setMessage("Attention votre champ de recherche est vide")

            return;
        }
        if (users.filter(u => u.name.includes(user) === false )) {

            setMessage("Attention cette personne n'existe pas")

            return;
        }

        const search = users.filter(u => u.name.includes(user));
        setSearch(search);
    }

    const handleChange = e => {
        const { value } = e.target;
        setUser(value);
        setSearch([]);
        setMessage('');
    }

    return (
        <Fragment>
            <p>Fetch</p>
            <form onSubmit={handleSubmit}>
                {message !== '' && <p>{message}</p>}
                <div>
                    <input type="text" name="user" value={user} onChange={handleChange} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
            {isLoading ? <p>loading ...</p> : <Users users={search} />}
        </Fragment>
    )
};

export default Search;