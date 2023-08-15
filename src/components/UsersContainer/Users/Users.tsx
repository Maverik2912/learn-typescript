import {FC} from 'react';
import {IUser} from "../UserType/UserTypes";
import {User} from "../User/User";

interface IUsersProps {
    users: IUser[];
}

const Users: FC<IUsersProps> = ({users}) => {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};