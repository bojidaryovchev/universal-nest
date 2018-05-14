import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule /*, applyDomino */ } from './angular-universal';
import { AppController } from './app.controller';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('./../dist/server/main'),
    }),
  ],
  controllers: [AppController],
})
export class ApplicationModule {}
