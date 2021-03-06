import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';

import { routing }            from './contact.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/