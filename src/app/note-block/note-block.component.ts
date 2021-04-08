import {Component, Input, OnInit, Output} from '@angular/core';
import {Note} from '../models/note';
import {NotesService} from '../notes.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-note-block',
  templateUrl: './note-block.component.html',
  styleUrls: ['./note-block.component.scss']
})
export class NoteBlockComponent implements OnInit {

  @Input() note: Note;
  @Output() deleteNote = new EventEmitter<Note>();
  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
  }

  deleteNoteEvent(): void{
    this.deleteNote.emit(this.note);
  }

}
