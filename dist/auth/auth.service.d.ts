import { Auth, AuthSchema } from './schema/auth.schema';
import { Model } from 'mongoose';
export declare class AuthService {
    private authModel;
    constructor(authModel: Model<AuthSchema>);
    create(createAuthDto: any): Promise<Auth>;
    findAll(): Promise<Auth[]>;
    findOne(id: string): Promise<Auth>;
    delete(id: string): Promise<Auth>;
    update(id: string, item: Auth): Promise<Auth>;
}
