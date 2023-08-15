import {FC} from 'react';
import {IUser} from "../../UsersContainer";

interface IUserDetailsProps {
    user: IUser;
}

const UserDetails: FC<IUserDetailsProps> = ({user}) => {
    const {id,name,username,email,phone,website} = user;

     return (
        <div>
            <div>
                <h3>User Details</h3>
                <ul>
                    <li>Id: {id}</li>
                    <li>Name: {name}</li>
                    <li>Username: {username}</li>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                    <li>Website: {website}</li>
                </ul>
            </div>
        </div>
    );
};

export {UserDetails};