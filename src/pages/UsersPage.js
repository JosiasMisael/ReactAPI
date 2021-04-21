import { useUsers } from '../hooks/useUsers';
import Tbody from './Tbody';
const UsersPage = () => {
    const {user}= useUsers();
    return (
        <div className="mt-5">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(({ id, email, first_name, last_name, avatar }) => (<Tbody key={id} id={id} email={email} name={`${first_name} ${last_name}`} avatar={avatar} />))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage
