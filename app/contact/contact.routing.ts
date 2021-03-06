import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ContactComponent }    from './contact.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'contact', component: ContactComponent}
]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/