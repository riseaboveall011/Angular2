import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totalIncidents = 250;  // Example static data
  resolvedIncidents = 180;

  totalProblems = 100;
  resolvedProblems = 75;

  jiraReceived = 50; // JIRA received this week
  jiraResolved = 40; // JIRA resolved this week
}
