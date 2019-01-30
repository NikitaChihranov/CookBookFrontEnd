import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {VersionComponent} from './version/version.component';
import {NgModule} from '@angular/core';
import {CookbookComponent} from './cookBook/cookbook.component';
import {FoundComponent} from './cookBook/found/found.component';
import {CreateCComponent} from './cookBook/create-c/create-c.component';
import {Update2Component} from './cookBook/update2/update2.component';
import {Delete2Component} from './cookBook/delete2/delete2.component';

const routes: Routes = [
  {path: '',  component: CookbookComponent},
  {path: 'create', component: CreateCComponent},
  {path: 'viewAllVersions', component: VersionComponent},
  {path: 'foundC', component: FoundComponent},
  {path: 'update', component: Update2Component},
  {path: 'delete', component: Delete2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
