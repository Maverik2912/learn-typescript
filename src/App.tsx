import {useEffect, useState} from "react";
import {IUser, Users} from "./components";
import {usersService} from "./services";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));
    }, []);
    return (
        <div>
            <Users users={users} />
        </div>
    );
};

export default App;