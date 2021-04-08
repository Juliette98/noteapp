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

  id: number;
  note: Note;

  constructor(private route: ActivatedRoute, private router: Router, public notesService: NotesService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.note = this.notesService.getNote(this.id);
  }

  saveNote(): void{
    this.notesService.saveNote(this.note);
    this.router.navigate(['/notes']);
  }

}
