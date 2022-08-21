import { Module } from '@nestjs/common';
import { TodosModule } from './modules/funds/funds.module';
import { FavsModule } from './modules/favorites/favs.module';

@Module({
  imports: [TodosModule, FavsModule],
})
export class AppModule {}
