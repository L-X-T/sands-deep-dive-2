import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';
import { RouterModule } from '@angular/router';
import { LuggageUiCardModule } from '@flight-workspace/luggage/ui-card';
import { LoggerModule } from '@flight-workspace/logger-lib';

@NgModule({
  imports: [
    CommonModule,
    LuggageDomainModule,

    // Add this:
    LuggageUiCardModule,

    // Add this:
    RouterModule.forChild([{ path: '', component: CheckinComponent }]),

    LoggerModule
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent]
})
export class LuggageFeatureCheckinModule {}
