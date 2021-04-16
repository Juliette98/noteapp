import { Injectable } from '@angular/core';
import {Note} from './models/note';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Array<Note> = new Array<Note>();
  constructor(private http: HttpClient) { }

  getNotes(): any{
    return this.http.get('http://localhost:3000/notes');
  }

  addNote(note): any{
    return this.http.post('http://localhost:3000/notes', note);
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
