import {Component, Input, OnInit, Output} from '@angular/core';
import {Note} from '../models/note';
import {EventEmitter} from '@angular/core';
import {NotesService} from '../notes.service';

@Component({
  selector: 'app-note-block',
  templateUrl: './note-block.component.html',
  styleUrls: ['./note-block.component.scss']
})
export class NoteBlockComponent implements OnInit {

  noteStatus = 'view';
  @Input() note: Note;
  @Output() deleteNote = new EventEmitter<Note>();
  @Output() editNote = new EventEmitter<Note>();
  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
  }

  deleteNoteEvent(): void{
    this.deleteNote.emit(this.note);
  }

  editNoteEvent(): void{
    this.editNote.emit(this.note);
  }

  updateNote(): void{
    this.noteStatus = 'loading';
    this.notesService.updateNote(this.note).subscribe(
        (note: Note) => {
          this.noteStatus = 'view';
        },
        (error) => {
          this.noteStatus = 'error';
          console.log('Note update error');
        }
    );
  }

}
