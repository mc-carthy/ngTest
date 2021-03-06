import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "app/home/home.component";
import { UsersComponent } from "app/users/users.component";
import { UserComponent } from "app/users/user/user.component";
import { ServersComponent } from "app/servers/servers.component";
import { ServerComponent } from "app/servers/server/server.component";
import { EditServerComponent } from "app/servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { ErrorPageComponent } from './error-page/error-page.component';

import { AuthGuardService } from "app/auth-guard.service";
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolverService } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent },
    ] },
    { path: 'servers', canActivateChild: [AuthGuardService], component: ServersComponent, children: [
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] },
    ] },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page Not Found' } },
    { path: '**', redirectTo: '/not-found' },
]   

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes, { useHash: true} )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}