import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import * as express from 'express';
import {
  Module,
  Inject,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DynamicModule, NestModule } from '@nestjs/common/interfaces';
import { readFileSync } from 'fs';

// import { applyDomino } from './utils/domino.utils';
import { AngularUniversalOptions } from './interfaces/angular-universal-options.interface';
import { ANGULAR_UNIVERSAL_OPTIONS } from './angular-universal.constants';
import { AngularUniversalController } from './angular-universal.controller';
import { angularUniversalProviders } from './angular-universal.providers';
import { join } from 'path';
import { HTTP_SERVER_REF } from '@nestjs/core';

@Module({
  controllers: [AngularUniversalController],
  providers: [...angularUniversalProviders],
})
export class AngularUniversalModule implements NestModule {
  constructor(
    @Inject(ANGULAR_UNIVERSAL_OPTIONS)
    private readonly ngOptions: AngularUniversalOptions,
    @Inject(HTTP_SERVER_REF) private readonly serverRef: express.Application
  ) {
    this.serverRef.get('*.*', express.static(this.ngOptions.viewsPath));
  }

  static forRoot(options: AngularUniversalOptions): DynamicModule {
    options = {
      templatePath: join(options.viewsPath, 'index.html'),
      ...options,
    };
    const template = readFileSync(options.templatePath).toString();

    return {
      module: AngularUniversalModule,
      components: [
        {
          provide: ANGULAR_UNIVERSAL_OPTIONS,
          useValue: {
            ...options,
            template,
          },
        },
      ],
    };
  }

  // This approach doesn't work anymore
  configure(consumer: MiddlewareConsumer): void {
    // consumer
    //   .apply(express.static(this.ngOptions.viewsPath))
    //   .forRoutes('*.*');
  }
}
