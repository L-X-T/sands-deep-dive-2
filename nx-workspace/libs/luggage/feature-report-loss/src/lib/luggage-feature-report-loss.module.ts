import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { ReportLossComponent } from './report-loss.component';
import { RouterModule } from '@angular/router';
import { LuggageUiCardModule } from '@flight-workspace/luggage/ui-card';
import { LoggerModule } from '@flight-workspace/logger-lib';

@NgModule({
  imports: [
    CommonModule,
    LuggageDomainModule,
    LuggageUiCardModule,
    LoggerModule,
    RouterModule.forChild([{ path: '', component: ReportLossComponent }])
  ],
  declarations: [ReportLossComponent],
  exports: [ReportLossComponent]
})
export class LuggageFeatureReportLossModule {}
