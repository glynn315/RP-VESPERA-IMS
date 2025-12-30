import { Component } from '@angular/core';
import { LucideAngularModule , Home , OctagonAlertIcon , ClipboardClock, Contact, Form, FolderRoot } from 'lucide-angular';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-navigation',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  readonly HomeIco = Home;
  readonly IssueIcon = OctagonAlertIcon;
  readonly HistoryIcon = ClipboardClock;
  readonly UserIcon = Contact;
  readonly UserReportIcon = Form;
  readonly ProjectIcon = FolderRoot;
}
