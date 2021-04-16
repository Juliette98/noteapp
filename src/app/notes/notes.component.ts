import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {Router} from '@angular/router';
import {Note} from '../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  noteTitle: string;
  noteText: string;
  colors: Array<any> = [
    'red', 'yellow', 'blue'
  ];
  notes: any;

  constructor(public notesService: NotesService, public router: Router) { }

  ngOnInit(): void {
    this.getNotes();
  }

  redirectEdit(note: Note): void{
    this.router.navigate(['/note', note.id]);
  }

  getNotes(): void{
    this.notesService.getNotes().subcribe(
        (notes: any) => {
          this.notes = notes.data;
        },
        (error) => {
          console.log('Error');
        }
    );
  }

  addNote(): void{
    const note: Note = new Note();
    note.id = Math.random();
    note.noteTitle = this.noteTitle,
    note.noteText = this.noteText,
    note.color = this.colors[Math.floor(Math.random() * Math.floor(2))];

    this.noteTitle = '';
    this.noteText = '';

    this.notesService.addNote(note).subscribe(
        (notes: any) => {
          this.notes = notes.data;
        },
        (error) => {
          console.log(('Error'));
        }
    );
  }
}
