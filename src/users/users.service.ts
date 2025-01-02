import { Injectable } from '@nestjs/common';
import { db } from 'src/db';
import { users } from 'drizzle/drizzle.config';

@Injectable()
export class UsersService {

    async createUser(name:string, age: number) {
        const result = await db.insert(users).values({ name, age, email:"test@cmail.com" }).$returningId();
        return result;
    }

    async getUsers() {
        const result = await db.select().from(users);
        return result;
    }


}
