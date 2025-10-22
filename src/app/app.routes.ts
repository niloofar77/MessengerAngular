import { Routes } from '@angular/router';
import { UsersComponent } from './users/components/users.component';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [

    {
        path:"",component:ChatComponent
    },
    {
        path:"users",component:UsersComponent
    }
];
