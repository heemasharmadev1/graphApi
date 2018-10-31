import {IUserItem} from './IUserItem';

export interface IGraphSmapleState{
    users: Array<IUserItem>;
    searchFor: string;
}