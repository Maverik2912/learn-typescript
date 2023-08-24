import {FC, PropsWithChildren} from 'react';

interface ICarProps extends PropsWithChildren {

}

const Car: FC<ICarProps> = () => {
     return (
        <div>
            Car
        </div>
    );
};

export {Car};