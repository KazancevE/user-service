import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async resetIssues(): Promise<number> {
    const usersWithIssues = await this.usersRepository.count({
      where: { hasIssues: true },
    });

    await this.usersRepository
      .createQueryBuilder()
      .update(User)
      .set({ hasIssues: false })
      .where('hasIssues = :hasIssues', { hasIssues: true })
      .execute();

    return usersWithIssues;
  }
}
