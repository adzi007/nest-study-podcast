import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ){}

    @Post()
    async createUser(@Body() body: { name: string; age: number }) {
        return this.usersService.createUser(body.name, body.age);
    }

    @Get()
    async getUsers() {
        return this.usersService.getUsers();
    }


}
