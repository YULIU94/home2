
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';


import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetYoutubeComponent } from './components/widget/widget-youtube/widget-youtube.component';


// import
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { Routing } from './app.routing';
import { QuillEditorModule } from 'ngx-quill-editor';

// providers
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';
import {FlickrService} from './services/flickr.service.client';

import {Widget} from './models/widget.model.client';
import { WidgetHeadingComponent } from './components/widget/widget-heading/widget-heading.component';
import {WidgetNewHeaderComponent} from './components/widget/widget-new/widget-new-header/widget-new-header.component';
import { WidgetNewImageComponent } from './components/widget/widget-new/widget-new-image/widget-new-image.component';
import { WidgetNewYoutubeComponent } from './components/widget/widget-new/widget-new-youtube/widget-new-youtube.component';
import { WidgetEditHeaderComponent } from './components/widget/widget-edit/widget-edit-header/widget-edit-header.component';
import { WidgetEditImageComponent } from './components/widget/widget-edit/widget-edit-image/widget-edit-image.component';
import { WidgetEditYoutubeComponent } from './components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component';
import {WidgetImageComponent} from './components/widget/widget-image/widget-image.component';
import {SafePipe} from './services/SafePipe';
import { FlickrImageSearchComponent } from './components/widget/widget-image/flickr-image-search/flickr-image-search.component';
import { WidgetTextComponent } from './components/widget/widget-text/widget-text.component';
import { WidgetNewTextComponent } from './components/widget/widget-new/widget-new-text/widget-new-text.component';
import { WidgetEditTextComponent } from './components/widget/widget-edit/widget-edit-text/widget-edit-text.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,

    PageNewComponent,
    PageEditComponent,
    PageListComponent,

    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,

    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetTextComponent,
    WidgetHeadingComponent,
    WidgetNewHeaderComponent,
    WidgetNewImageComponent,
    WidgetNewYoutubeComponent,
    WidgetNewTextComponent,
    WidgetEditHeaderComponent,
    WidgetEditImageComponent,
    WidgetEditYoutubeComponent,
    WidgetEditTextComponent,

    SafePipe,
    FlickrImageSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    HttpModule,
    QuillEditorModule
  ],
  providers: [
    UserService, WebsiteService, PageService, WidgetService, FlickrService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
