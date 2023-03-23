import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-dto.auth';
import { Auth } from './schema/auth.schema';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto): Promise<Auth>;
    findAll(): Promise<Auth[]>;
    findOne(id: any): Promise<Auth>;
    update(updateAuthDto: CreateAuthDto, id: any): Promise<Auth>;
    delete(id: any): Promise<Auth>;
}
