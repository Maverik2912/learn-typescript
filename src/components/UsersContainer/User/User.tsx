import {FC} from 'react';

import {IUser} from "../UserType/UserTypes";
import {Company, UserAddress, UserDetails} from "../../UserDetailsContainer";
import styles from './User.module.css';
interface IUserProps {
    user: IUser;
}

const User: FC<IUserProps> = ({user}) => {

     return (
         <div className={styles.user}>
             <h2 className={styles.userName}>{user.name} "{user.username}"</h2>
             <UserDetails user={user} />
             <UserAddress address={user.address} />
             <Company company={user.company} />
         </div>
    );
};

export {User};