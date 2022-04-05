import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerModule } from '@flight-workspace/logger-lib';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';

@NgModule({
  imports: [CommonModule, LuggageDomainModule, LoggerModule]
})
export class LuggageUiCardModule {}
