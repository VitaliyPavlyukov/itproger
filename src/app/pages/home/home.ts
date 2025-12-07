import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Note} from '../../models/note.model'
import { NoteService } from '../../services/note'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoteAdd } from '../../components/note-add/note-add';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterModule, NoteAdd],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private noteService: NoteService) {}

  showAlert() {
    alert("Clicked");
  }

  protected get notes() {
    return this.noteService.getNotes();
  }
  
}
