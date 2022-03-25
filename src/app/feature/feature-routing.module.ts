import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './character/components/home/home.component';
import { PlaceCharacterComponent } from './character/components/place-character/place-character.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location/:url', component: PlaceCharacterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
