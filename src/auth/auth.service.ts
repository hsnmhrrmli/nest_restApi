import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './schema/auth.schema';
import { Model } from 'mongoose';
// import * as bcr from "bcrypt"
// import { CreateAuthDto }  from './dto/create-dto.auth';
@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<AuthSchema>) {}

  async create(createAuthDto): Promise<Auth> {
    const newAuth = new this.authModel(createAuthDto);
    return newAuth.save();
  }
  async findAll(): Promise<Auth[]> {
    return this.authModel.find();
  }
  async findOne(id: string): Promise<Auth> {
    return await this.authModel.findOne({ _id: id });
  }
  async delete(id: string): Promise<Auth> {
    return await this.authModel.findByIdAndRemove(id);
  }
  async update(id: string, item: Auth): Promise<Auth> {
    return await this.authModel.findByIdAndUpdate(id, item, { new: true });
  }
}
