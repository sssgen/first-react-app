import React, {useContext} from 'react';
import { AuthContext } from '../context';
import PrivateRoutes from '../router/PrivateRoutes';
import PublicRoutes from '../router/PublicRoutes';

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <div>
            {isAuth
                ? <PrivateRoutes />
                : <PublicRoutes />
            }
        </div>
    );
};

export default AppRouter;