import { Amigo } from './Amigo';

export class ResponseServicioClientes {
    id: number;
    guid: string;
    isActive: boolean;
    balance: string;
    picture: string;
    age: string;
    eyeColor: string;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: Date;
    latitude: string;
    longitude: string;
    tags: string;
    friends: Array<Amigo>;
    greeting: string;
    favoriteFruid: string;
}
