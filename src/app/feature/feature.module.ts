import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './character/components/home/home.component';
import { CardCharacterComponent } from './character/components/card-character/card-character.component';
import { PlaceCharacterComponent } from './character/components/place-character/place-character.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,
    CardCharacterComponent,
    PlaceCharacterComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, NgbModule, NgxPaginationModule],
})
export class FeatureModule {}
