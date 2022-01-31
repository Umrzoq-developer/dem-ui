import Cookies from 'js-cookie';
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';

import {TOKEN} from '@src/constants';
import {useAuthStore} from '@src/store/auth';

import {AuthT, authReq} from './index';

const useAuthReq = () => {
    const navigation = useNavigate();
    const handleSnack = useAuthStore((state) => state.handleSnack);
    const handleLogin = useMutation((data: AuthT) => authReq(data), {
        onSuccess: (data) => {
            const accessToken = data.data.body.accessToken;
            Cookies.set(TOKEN.AUTH_TOKEN, accessToken);
            navigation('/main');
        },
        onError: (e) => {
            console.log(e, 'error');
            handleSnack(true);
        },
    });

    const handleClose = () => {
        handleSnack(false);
    };

    return {
        handleLogin,
        handleClose,
    };
};

export default useAuthReq;
