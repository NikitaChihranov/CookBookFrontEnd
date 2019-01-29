import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {VersionComponent} from './version/version.component';
import {NgModule} from '@angular/core';
import {CookbookComponent} from './cookBook/cookbook.component';
import {FoundComponent} from './cookBook/found/found.component';
import {CreateCComponent} from './cookBook/create-c/create-c.component';

const routes: Routes = [
  {path: '',  component: CookbookComponent},
  {path: 'create', component: CreateCComponent},
  {path: 'viewAllVersions', component: VersionComponent},
  {path: 'foundC', component: FoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
