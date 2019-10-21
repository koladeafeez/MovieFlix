import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user-routes';
import { UserProfileComponent } from './user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        UserProfileComponent
    ],
    imports:[

        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(UserRoutes)
    ]
})
export class UserModule{

}