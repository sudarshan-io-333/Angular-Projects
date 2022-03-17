import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import {ListComponent} from './observable/list/list.component'
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObsComponent } from './observable/custom-obs/custom-obs.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';

const routes: Routes = [
  {
    path: 'observable', component: ObservableComponent, children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custom-obs', component: CustomObsComponent },
      { path: 'map-obs', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent}
    ]
  },
  { path: '', component: HomeComponent},
 
  { path: ':user', component: UserComponent },
  { path: ':user/:id', component: UserComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
