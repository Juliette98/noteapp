import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  noteTitle: string;
  noteText: string;

  notes: Array<any> = new Array<any>();

  colors: Array<any> = [
      'red', 'yellow', 'blue'
  ];

  constructor() { }

  addNote(): void{
    const note: any = {
      id: Math.random(),
      noteTitle: this.noteTitle,
      noteText: this.noteText,
      color: this.colors[Math.floor(Math.random() * Math.floor(2))]
    };
    this.noteTitle = '';
    this.noteText = '';
    this.notes.push(note);
  }

  deleteNote(note: any): void{
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }

  getNote(noteId: number): any{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.notes.length; i++){
      const note = this.notes[i];
      if (note.id === noteId){
        return note;
      }
    }
    return null;
  }

  saveNote(note: any): any{
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    this.notes.push(note);
  }
}
