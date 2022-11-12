import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new WrapResponseInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
