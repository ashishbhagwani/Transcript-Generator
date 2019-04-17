import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';
import { TranslationCardModel } from './translation-card.model';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  requestEditTranslation = new Subject<TranslationCardModel>();
  requestVideoPreview = new Subject<void>();
  constructor() { }
}
