import { Component } from '@angular/core';
import { LucideAngularModule, XCircle } from 'lucide-angular';

@Component({
  selector: 'app-modal',
  imports: [LucideAngularModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  readonly CloseIcon = XCircle;

}
