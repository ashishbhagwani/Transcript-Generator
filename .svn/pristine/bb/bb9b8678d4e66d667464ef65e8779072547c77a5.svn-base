import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { DataCommunicationService } from './data-communication.service';
import { FormsModule } from '@angular/forms';
import { TimeFormatterPipe } from './time-formatter.pipe';
import { TranslationCardsService } from './translation-cards.service';
import { ModalModule, CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    TimeFormatterPipe
  ],
  imports: [
    BrowserModule,
    NouisliderModule,
    FormsModule
  ],
  providers: [DataCommunicationService, TranslationCardsService, TimeFormatterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
