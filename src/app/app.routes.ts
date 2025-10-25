import { Routes } from '@angular/router';
import { UsersComponent } from './users/components/users.component';
import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './layout/main';

export const routes: Routes = [
{
    path:'',
    component:MainComponent,
    children:[
        {
            path:"",redirectTo:"chats",pathMatch:"full"
        },
        {
            path:"chats",component:ChatComponent
        },
        {
            path:"users",component:UsersComponent
        }
    ]
}
    
];
