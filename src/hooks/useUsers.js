import { useEffect, useState } from 'react'
import { usersApi } from '../api/userApi'

export const useUsers = () => {

    const [user, setuser] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const resp = await usersApi.get('https://reqres.in/api/users?page=2');
        setuser(resp.data.data)
    }

    return {
        user
    }
}
