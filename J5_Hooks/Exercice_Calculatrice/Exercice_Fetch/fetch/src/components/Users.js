// par décomposition on récupère la clé users
const Users = ({ users }) => {

    return (
        <ul>
            {users.map((user, i) => <li key={i} >{user.name}</li>)}
        </ul>
    )
}

export default Users;