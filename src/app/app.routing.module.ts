import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { XformComponent } from './xform/xform.component';
import { XchartComponent } from './xchart/xchart.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', redirectTo: '/main', pathMatch: 'full' },
        { path: 'main',
          children: [
            {path: '', component: XformComponent},
            {path: ':serverport/:filename', loadChildren: 'app/xchart/xchart.module#XchartModule'}
          ]
        }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
