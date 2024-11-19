import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('reset-issues')
  async resetIssues(): Promise<{ count: number }> {
    const count = await this.usersService.resetIssues();
    return { count };
  }
}
