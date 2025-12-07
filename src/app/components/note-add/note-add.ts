import { Component, signal } from '@angular/core';
import {Note} from '../../models/note.model'
import { NoteService } from '../../services/note'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-add',
  imports: [FormsModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {
  constructor(private noteService: NoteService) {}

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
