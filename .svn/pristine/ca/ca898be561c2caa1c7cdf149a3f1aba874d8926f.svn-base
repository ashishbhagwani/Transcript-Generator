import { Component, ViewChildren, ViewChild, ElementRef, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { TranslationCardModel } from './translation-card.model';
import { DataCommunicationService } from './data-communication.service';
import { TranslationCardsService } from './translation-cards.service';
import { ModalDirective } from 'ngx-bootstrap';

const KEY_X = 88;
const KEY_Z = 90;
const KEY_T = 84;
const KEY_D = 68;
const KEY_G = 71;
const KEY_U = 85;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('vttDownload') vttDownloaderAnchorElement: ElementRef;
  @ViewChild('selectionBox') selectionBoxTextArea: ElementRef;
  @ViewChild('translationTextInput') translationTextInputTextArea: ElementRef;
  @ViewChild('tutorialModal') appTutorialModal: ModalDirective;
  fileAlreadyDropped = false;
  videoFileHovered = false;
  textFileHovered = false;
  textFileUploaded = false;
  editableTranslationCard: TranslationCardModel;
  videoPlayerInputFile: File;
  editableTranslationCardEditMode = false;
  selectedCardIndex = 0;
  selectionBoxContent: string;
  selectionStart: number;
  selectionBoxEditMode = false;

  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_X && event.shiftKey) {
      event.preventDefault();
      this.useSelectedText();
    }
    if (event.keyCode === KEY_T && event.shiftKey) {
      event.preventDefault();
      this.translationTextInputTextArea.nativeElement.focus();
    }
    if (event.keyCode === KEY_Z && event.shiftKey) {
      event.preventDefault();
      this.undoTextSelection();
    }
    if (event.keyCode === KEY_D && event.shiftKey) {
      event.preventDefault();
      this.addTranslation();
    }
    if (event.keyCode === KEY_G && event.shiftKey) {
      event.preventDefault();
      this.generteVTT();
    }
    if (event.keyCode === KEY_U && event.shiftKey) {
      event.preventDefault();
      this.selectionBoxTextArea.nativeElement.focus();
    }
  }

  constructor(private dataCommunication: DataCommunicationService, private translationCardService: TranslationCardsService) { }

  ngOnInit() {
    this.resetOrInitializeEditableTranslationCard();
  }

  useDroppedFileAsVideoSource(event) {
    event.preventDefault();
    this.fileAlreadyDropped = true;
    this.videoPlayerInputFile = event.dataTransfer.files[0];
  }

  useUploadedFileAsVideoSource(event) {
    this.fileAlreadyDropped = true;
    this.videoPlayerInputFile = event.target.files[0];
  }

  uploadTextFile(event, isFileDropped) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.textFileUploaded = true;
      this.selectionBoxContent = e.target.result;
    };
    reader.readAsText((isFileDropped) ? event.dataTransfer.files[0] : event.target.files[0]);
  }

  addTranslation() {
    if (!((this.editableTranslationCard.endTime - this.editableTranslationCard.startTime === 0) ||
      this.editableTranslationCard.translationText === '')) {
      if (this.editableTranslationCardEditMode) {
        this.translationCardService.editTranslationCard(this.editableTranslationCard, this.selectedCardIndex);
        this.editableTranslationCardEditMode = false;
      } else {
        this.translationCardService.addTranslationCard(this.editableTranslationCard);
      }
      this.resetOrInitializeEditableTranslationCard();
    }
  }

  editTranslation(index) {
    this.editableTranslationCardEditMode = true;
    this.selectedCardIndex = index;
    const translationCard = this.translationCardService.getTranslationCardAtIndex(index);
    this.setEditableTranslationCardValues(translationCard.startTime, translationCard.endTime, translationCard.translationText);
    this.dataCommunication.requestEditTranslation.next(translationCard);
  }

  deleteTranslation() {
    if (this.editableTranslationCardEditMode) {
      this.translationCardService.deleteTranslationCard(this.selectedCardIndex);
      this.resetOrInitializeEditableTranslationCard();
    }
  }

  generteVTT() {
    const translationVtt = this.translationCardService.getVTTStringOfTranslationCards();
    this.vttDownloaderAnchorElement.nativeElement.href = URL.createObjectURL(new Blob([translationVtt], { type: 'text/plain' }));
    this.vttDownloaderAnchorElement.nativeElement.click();
  }

  cursorChanged(event) {
    if (event.type === 'keydown') {
      if ((event.keyCode < 37 || event.keyCode > 40) && !event.shiftKey) {
        event.preventDefault();
      }
      this.selectionBoxTextArea.nativeElement.selectionStart = this.selectionBoxTextArea.nativeElement.selectionEnd;
    } else {
      this.selectionStart = this.selectionBoxTextArea.nativeElement.selectionStart;
      this.selectionBoxTextArea.nativeElement.setSelectionRange(0, this.selectionStart);
    }
  }

  useSelectedText() {
    const selectedText: string = this.selectionBoxTextArea.nativeElement.value.substr(0, this.selectionStart);
    const translationText = this.getEditableTranslationCardText().concat(selectedText);
    this.setEditableTranslationCardText(translationText);
    this.selectionBoxContent = this.selectionBoxTextArea.nativeElement.value.substr(this.selectionStart);
  }

  undoTextSelection() {
    this.selectionBoxContent = this.getEditableTranslationCardText().concat(this.selectionBoxContent);
    this.setEditableTranslationCardText('');
  }

  previewWorkDone() {
    this.dataCommunication.requestVideoPreview.next();
  }

  resetOrInitializeEditableTranslationCard() {
    this.editableTranslationCard = {
      startTime: null,
      endTime: null,
      translationText: ''
    };
  }

  setEditableTranslationCardValues(startTime, endTime, translationText) {
    this.editableTranslationCard = {
      startTime: startTime,
      endTime: endTime,
      translationText: translationText
    };
  }

  setEditableTranslationCardText(text: string) {
    this.editableTranslationCard.translationText = text;
  }

  getEditableTranslationCardText(): string {
    return this.editableTranslationCard.translationText;
  }

  isTranslationCardCollectionEmpty() {
    return this.translationCardService.getAllTranslationCards().length > 0;
  }
}
