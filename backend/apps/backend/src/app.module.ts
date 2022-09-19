import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppCommonModule } from '@malaka/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
@Module({
  imports: [...AppCommonModule(), UserModule, AuthModule, CaslModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
