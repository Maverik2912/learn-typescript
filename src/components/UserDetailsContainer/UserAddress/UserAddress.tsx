import {FC} from 'react';
import {IAddress} from "../../UsersContainer";

interface IUserAddressProps {
    address: IAddress;
}

const UserAddress: FC<IUserAddressProps> = ({address}) => {
    const {city, street, suite} = address;
     return (
         <div>
             <h3>Address:</h3>
             <ul>
                 <li>City: {city}</li>
                 <li>Street: {street}</li>
                 <li>Suite: {suite}</li>
             </ul>

         </div>
    );
};

export {UserAddress};