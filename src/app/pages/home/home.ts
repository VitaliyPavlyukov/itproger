import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Note} from '../../models/note.model'
import { NoteService } from '../../services/note'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
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

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  })

  protected addNote() {
    const noteData = this.newNote();
    if (!noteData.title || !noteData.content) return;

    this.noteService.addNote(noteData.title, noteData.content);
    
    this.newNote.set({
      title: '',
      content: ''
    });
  }
}
