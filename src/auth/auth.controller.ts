import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-dto.auth';
import { Auth, AuthSchema } from './schema/auth.schema';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto): Promise<Auth> {
    return this.authService.create(createAuthDto);
  }
  @Get()
  findAll(): Promise<Auth[]> {
    return this.authService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Auth> {
    return this.authService.findOne(id);
  }
  @Put(':id')
  update(@Body() updateAuthDto: CreateAuthDto, @Param('id') id): Promise<Auth> {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Auth> {
    return this.authService.delete(id);
  }
}
