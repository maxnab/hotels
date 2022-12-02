import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersMongooseSchema, UsersSchema } from './models/users.schema';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UsersMongooseSchema.name, schema: UsersSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
class UsersModule {}

export { UsersModule };
