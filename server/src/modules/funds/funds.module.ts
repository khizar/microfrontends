import { Module } from '@nestjs/common';

import { FundsController } from './funds.controller';

@Module({
  controllers: [FundsController],
})
export class TodosModule {}
