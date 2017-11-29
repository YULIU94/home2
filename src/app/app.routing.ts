
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';

import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';

import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';

import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {WidgetNewImageComponent} from './components/widget/widget-new/widget-new-image/widget-new-image.component';
import {WidgetNewHeaderComponent} from './components/widget/widget-new/widget-new-header/widget-new-header.component';
import {WidgetNewYoutubeComponent} from './components/widget/widget-new/widget-new-youtube/widget-new-youtube.component';
import {WidgetNewTextComponent} from './components/widget/widget-new/widget-new-text/widget-new-text.component';
import {WidgetNewHtmlComponent} from './components/widget/widget-new/widget-new-html/widget-new-html.component';

import {WidgetEditHeaderComponent} from './components/widget/widget-edit/widget-edit-header/widget-edit-header.component';
import {WidgetEditImageComponent} from './components/widget/widget-edit/widget-edit-image/widget-edit-image.component';
import {WidgetEditYoutubeComponent} from './components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component';
import {WidgetEditTextComponent} from './components/widget/widget-edit/widget-edit-text/widget-edit-text.component';
import {WidgetEditHtmlComponent} from './components/widget/widget-edit/widget-edit-html/widget-edit-html.component';

import {AuthenticationService} from './services/authentication.service.client';


// import {WidgetYoutubeComponent} from "./components/widget/widget-edit/widget-youtube/widget-youtube.component";



const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService]},
  // {path: 'profile/:userId', component: ProfileComponent},
  {path: 'profile/website', component: WebsiteListComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/new', component: WebsiteNewComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid', component: WebsiteEditComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page', component: PageListComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthenticationService]},
  // {path: 'profile/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},

  {path: 'profile/website/:wid/page/:pid/widget/header', component: WidgetNewHeaderComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/image', component: WidgetNewImageComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/youtube', component: WidgetNewYoutubeComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/text', component: WidgetNewTextComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/html', component: WidgetNewHtmlComponent, canActivate: [AuthenticationService]},

  {path: 'profile/website/:wid/page/:pid/widget/:wgid/header', component: WidgetEditHeaderComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid/image', component: WidgetEditImageComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid/youtube',
    component: WidgetEditYoutubeComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid/text', component: WidgetEditTextComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid/html', component: WidgetEditHtmlComponent, canActivate: [AuthenticationService]},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
