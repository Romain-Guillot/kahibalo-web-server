import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AllExceptionFilter } from './all-exceptions.filter';

function initFilters(app: NestExpressApplication) : void {
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
}

function confTemplateEngine(app: NestExpressApplication) : void {
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
}

async function listen(app: NestExpressApplication) : Promise<void> {
  const port = app.get(ConfigService).get('PORT');
  await app.listen(port);
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  initFilters(app);
  confTemplateEngine(app);
  await listen(app);
}

bootstrap();
