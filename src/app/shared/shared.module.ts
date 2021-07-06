import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxRippleDirective } from './directives/fx-ripple.directive';
import { UiButtonComponent } from './components/UiButton/UiButton.component';
import { UiCardComponent } from './components/UiCard/UiCard.component';
import { UiCardTitleComponent } from './components/UiCardTitle/UiCardTitle.component';
import { UiCardSubtitleComponent } from './components/UiCardSubtitle/UiCardSubtitle.component';
import { UiCardContentComponent } from './components/UiCardContent/UiCardContent.component';
import { UiCardActionsComponent } from './components/UiCardActions/UiCardActions.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiButtonComponent,
    FxRippleDirective,
    UiCardComponent,
    UiCardTitleComponent,
    UiCardSubtitleComponent,
    UiCardContentComponent,
    UiCardActionsComponent,
  ],
  exports: [
    UiButtonComponent,
    FxRippleDirective,
    UiCardComponent,
    UiCardTitleComponent,
    UiCardSubtitleComponent,
    UiCardContentComponent,
    UiCardActionsComponent,
  ],
})
export class SharedModule {}
