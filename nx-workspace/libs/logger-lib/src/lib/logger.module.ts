import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DefaultLogFormatterService } from './default-log-formatter.service';
import { LogFormatterService } from './log-formatter.service';
import { LoggerConfig } from './logger.config';

const defaultFormatterConfig = [
  {
    provide: LogFormatterService,
    useClass: DefaultLogFormatterService
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class LoggerModule {
  static forRoot(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        !config.logFormatterType ? defaultFormatterConfig : { provide: LogFormatterService, useClass: config.logFormatterType }
      ]
    };
  }
}
