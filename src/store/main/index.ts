import produce from 'immer';
import create, {GetState, SetState} from 'zustand';

interface IMain {
    open: boolean;
    handleTap: (payload: boolean) => void;
}

export const useMainStore = create<IMain>(
    (set: SetState<IMain>, get: GetState<IMain>) => ({
        open: false,
        handleTap: (payload): void => {
            set(produce(() => ({open: payload})));
        },
    }),
);
