import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VersionComponent } from './version/version.component';
import {AppRoutingModule} from './app-routing.module';
import { CookbookComponent } from './cookBook/cookbook.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GetAllComponent } from './cookBook/get-all/get-all.component';
import { FindByTitleComponent } from './cookBook/find-by-title/find-by-title.component';
import { CreateComponent } from './cookbook/create/create.component';
import { UpdateComponent } from './cookBook/update/update.component';
import { DeleteComponent } from './cookBook/delete/delete.component';
import { DeleteAllComponent } from './cookBook/delete-all/delete-all.component';
import { FoundComponent } from './cookBook/found/found.component';
import { CreateCComponent } from './cookBook/create-c/create-c.component';
@NgModule({
  declarations: [
    VersionComponent,
    AppComponent,
    CookbookComponent,
    GetAllComponent,
    FindByTitleComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    DeleteAllComponent,
    FoundComponent,
    CreateCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
