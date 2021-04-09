import {Component, Input, OnInit, Output} from '@angular/core';
import {Note} from '../models/note';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-note-block',
  templateUrl: './note-block.component.html',
  styleUrls: ['./note-block.component.scss']
})
export class NoteBlockComponent implements OnInit {

  @Input() note: Note;
  @Output() deleteNote = new EventEmitter<Note>();
  @Output() editNote = new EventEmitter<Note>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteNoteEvent(): void{
    this.deleteNote.emit(this.note);
  }

  editNoteEvent(): void{
    this.editNote.emit(this.note);
  }

}
