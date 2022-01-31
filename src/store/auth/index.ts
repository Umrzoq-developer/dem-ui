import create, {GetState, SetState} from 'zustand';

interface IAuth {
    authed: boolean;
    openE: boolean;
    loggedIn: (payload: boolean) => void;
    handleSnack: (payload: boolean) => void;
}

export const useAuthStore = create<IAuth>(
    (set: SetState<IAuth>, get: GetState<IAuth>) => ({
        authed: false,
        openE: false,
        loggedIn: (payload): void => {
            set({authed: payload});
        },
        handleSnack: (payload): void => {
            set({openE: payload});
        },
    }),
);
