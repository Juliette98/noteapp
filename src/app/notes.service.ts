import { Injectable } from '@angular/core';
import {Note} from './models/note';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  deleteNote(noteId: any): Observable<any>{
    return this.http.delete('http://localhost:3000/notes/' + noteId);
    /*const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);*/
  }

  getNote(noteId: any): Observable<any>{
    console.log(noteId);
    return this.http.get('http://localhost:3000/notes/' + noteId);
    // tslint:disable-next-line:prefer-for-of
    /*for (let i = 0; i < this.notes.length; i++){
      const note = this.notes[i];
      if (note._id === noteId){
        return note;
      }
    }
    return null;*/
  }

  saveNote(note: Note): void{
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    this.notes.push(note);
  }

  updateNote(note: Note): Observable<any>{
    return this.http.put('http://localhost:3000/notes/' + note._id, note);
  }
}
