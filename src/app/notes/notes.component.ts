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

  constructor(public notesService: NotesService, public router: Router) { }

  ngOnInit(): void {}

  redirectEdit(note: Note): void{
    this.router.navigate(['/note/' + note.id]);
  }
}
