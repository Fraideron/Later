import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {AuthorizationService, UserService} from '../_services/index';
import {AddPostComponent} from "../add-post/add-post.component";
import {MaterialModule} from "./material.module";
import {LoginComponent} from "../login/login.component";
import {AuthGuard} from "../_guards";

@NgModule({
  declarations: [
    AddPostComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [

  ],
  providers:[
    AuthorizationService,
    UserService,
    AuthGuard
  ],
  entryComponents: [
    AddPostComponent
  ]
})
export class ShareModule { }
