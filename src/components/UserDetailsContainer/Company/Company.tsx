import {FC} from 'react';
import {ICompany} from "../../UsersContainer";

interface ICompanyProps {
    company: ICompany;
}

const Company: FC<ICompanyProps> = ({company}) => {
    const {name, catchPhrase, bs} = company;

     return (
         <div>
             <h3>Company:</h3>
             <ul>
                 <li>Company name: {name}</li>
                 <li>Catch Phrase: {catchPhrase}</li>
                 <li>Bs: {bs}</li>
             </ul>
         </div>
    );
};

export {Company};