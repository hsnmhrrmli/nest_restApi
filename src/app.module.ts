import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule,MongooseModule.forRoot('mongodb+srv://Cassian:hsnmhrrmli@cluster0.hu4mocp.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule {}
