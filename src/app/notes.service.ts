import { Injectable } from '@angular/core';
import {Note} from './models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  noteTitle: string;
  noteText: string;

  notes: Array<Note> = new Array<Note>();

  colors: Array<any> = [
      'red', 'yellow', 'blue'
  ];

  constructor() { }

  addNote(): void{
    const note: Note = new Note();
    note.id = Math.random();
    note.noteTitle = this.noteTitle,
    note.noteText = this.noteText,
    note.color = this.colors[Math.floor(Math.random() * Math.floor(2))];
    this.noteTitle = '';
    this.noteText = '';
    this.notes.push(note);
  }

  deleteNote(note: Note): void{
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }

  getNote(noteId: number): Note|null{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.notes.length; i++){
      const note = this.notes[i];
      if (note.id === noteId){
        return note;
      }
    }
    return null;
  }

  saveNote(note: Note): void{
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    this.notes.push(note);
  }
}
