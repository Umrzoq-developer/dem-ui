import {IUser} from '@src/services/models/users_model';

export const mockData: IUser[] = Array(30)
    .fill('Jons')
    .map((item, index) => ({
        id: index + 1,
        fullname: index + 1 + ': ' + 'John' + ' ' + item,
        login: item,
        password: item + (index + 1),
        roleId: index + 2,
        regionId: index + 4,
        parkId: index + 3,
        remark: 'lorem something big text ' + (index + 1),
        isActivated: index % 2 === 0 ? 'activated' : 'notActivated',
    }));
