import { Injectable } from '@angular/core';
import { TranslationCardModel } from './translation-card.model';
import { Subject } from 'rxjs';
import { TimeFormatterPipe } from './time-formatter.pipe';

interface VTTCue {
  StartTime;
  EndTime;
  TranslationText;
}
@Injectable({
  providedIn: 'root'
})
export class TranslationCardsService {
  private translationCards: Array<TranslationCardModel> = [];
  translationAdded = new Subject<TranslationCardModel>();
  translationEdited = new Subject<{ index: number, translationCard: TranslationCardModel }>();
  translationDeleted = new Subject<number>();
  constructor(private timeFormatter: TimeFormatterPipe) { }

  addTranslationCard(translationCard: TranslationCardModel) {
    this.translationCards.push(translationCard);
    this.translationAdded.next(translationCard);
  }

  editTranslationCard(translationCard: TranslationCardModel, index: number) {
    this.translationCards[index] = translationCard;
    this.translationEdited.next({ index: index, translationCard: translationCard });
  }

  deleteTranslationCard(index: number) {
    this.translationCards.splice(index, 1);
    this.translationDeleted.next(index);
  }

  getAllTranslationCards() {
    return this.translationCards.slice();
  }

  getTranslationCardAtIndex(index: number) {
    return this.translationCards[index];
  }

  getVTTStringOfTranslationCards() {
    const translationCards = this.getAllTranslationCards();
    translationCards.sort((a, b) => {
      return a.startTime - b.startTime;
    });
    let vttString = 'WEBVTT\n\n';
    translationCards.forEach((value, index) => {
      vttString = vttString.concat((index + 1) + '\n' +
        this.timeFormatter.transform(value.startTime) + ' --> ' +
        this.timeFormatter.transform(value.endTime) + '\n' +
        value.translationText + '\n\n');
    });
    return vttString;
  }

  addVTTCuesToTrack(track: TextTrack) {
    this.translationCards.forEach((value, index) => {
      track.addCue(new (window as any).VTTCue(this.translationCards[index].startTime,
        this.translationCards[index].endTime,
        this.translationCards[index].translationText));
    });
  }
}
