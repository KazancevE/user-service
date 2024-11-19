/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // замените на ваш хост
      port: 5432, // порт по умолчанию для PostgreSQL
      username: 'postgres', // ваш логин
      password: 'qwerty', // ваш пароль
      database: 'testdb', // название базы данных
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
