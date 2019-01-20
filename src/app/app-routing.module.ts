import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {VersionComponent} from './version/version.component';
import {NgModule} from '@angular/core';
import {CookbookComponent} from './cookBook/cookbook.component';

const routes: Routes = [
  {path: '',  component: CookbookComponent},
  {path: 'viewAllVersions', component: VersionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
