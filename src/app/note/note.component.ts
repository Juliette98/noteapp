import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';
import {Note} from '../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  id: any;
  note: Note;

  constructor(private route: ActivatedRoute, private router: Router, public notesService: NotesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.note = {noteTitle: '', noteText: '', color: ''};
    console.log('"id from comp' + this.id);
    this.notesService.getNote(this.id).subscribe(
        (note: Note) => {
          this.note = note;
        },
        (error) => {
          console.log('Error');
        }
    );
  }

  saveNote(): void{
    this.notesService.saveNote(this.note);
    this.router.navigate(['/notes']);
  }

  updateNote(): void{
    this.notesService.updateNote(this.note).subscribe(
        (note: Note) => {
          this.router.navigate(['/notes']);
        },
        (error) => {
          console.log('Error d update de note');
        }
    );
  }

}
