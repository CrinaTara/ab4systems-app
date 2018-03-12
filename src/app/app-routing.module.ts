import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ListOfDevelopersComponent } from './list-of-developers/list-of-developers.component';
import { DeveloperComponent } from './developer/developer.component';


const routes: Routes = [
    {path: '', component: ListOfDevelopersComponent},
    {path: 'list-of-developers', component: ListOfDevelopersComponent},
    {path: 'developer/:id', component: DeveloperComponent},
    // {path: '**', component: PageNotFound}
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
export const routingComponents = [
                                    DeveloperComponent,
                                    ListOfDevelopersComponent
                                  ];
   
