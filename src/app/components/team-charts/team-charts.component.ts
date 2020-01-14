import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../core/services/team.service';
import {element} from 'protractor';

@Component({
  selector: 'app-team-charts',
  templateUrl: './team-charts.component.html',
  styleUrls: ['./team-charts.component.css']
})
export class TeamChartsComponent implements OnInit {

  public chartType = 'horizontalBar';
  public radarType: string = 'pie';

  public chartDatasets1: Array<any> = [
    { data: [90, 80, 57, 67], label: 'Andreea Gui'}
  ];

  public chartDatasets2: Array<any> = [
    { data: [85, 30, 40, 90], label: 'Sirca Narcisa'}
  ];

  public chartDatasets3: Array<any> = [
    { data: [90, 80, 70, 44], label : 'Moldovan Flavius'}
  ];

  public chartDatasets4: Array<any> = [
    { data: [70, 90, 88, 67], label : 'Onofrei Ioana'}
  ];

  public chartDatasets5: Array<any> = [
    { data: [82, 67, 34, 67], label : 'Solovastru Ioan'}
  ];

  //model
  // second chart
  public chartDatasetProgrammingLanguages: Array<any> = [
    {data: [90, 80, 40, 30, 20, 30, 10, 70, 30], label: 'Programming languages'}
  ];

  public chartLabelsProgrammingLanguages: Array<any> = [
    'C/C++', 'Java', 'SQL', 'VHDL', 'Haskell', 'Prolog', 'Assembly', 'Python', 'JavaScript'];

  public chartColorsProgrammingLanguages: Array<any> = [
    {
      backgroundColor: ['#DF2A1E', '#DFCC1E', '#91DF1E', '#118B17',
        '#1EDF6A', '#1EDFD0', '#1E93DF', '#873AE3', '#DF1EB3'],
      hoverBackgroundColor: ['#EB7A72', '#EBDF72', '#ADE756', '#4DA851',
        '#72EBA2', '#72EBE2', '#72BCEB', '#A972EB', '#EB72CF'],
      borderWidth: 2,
    }
  ];

  public chartFinal: Array<any> = [
    { data: [83, 46, 57, 55], label: 'team composition'}
    // { data: [90, 80, 57, 67], label: 'Andreea Gui'},
    // { data: [85, 30, 40, 90], label: 'Sirca Narcisa'},
    // { data: [90, 80, 70, 44], label : 'Moldovan Flavius'} ,
    // { data: [70, 90, 88, 67], label : 'Onofrei Ioana'},
    // { data: [82, 67, 34, 67], label : 'Solovastru Ioan'}

  ];

  public chartLabels: Array<any> = ['Innovation', 'Teamwork', 'Organization', 'Communication'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public radarColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 250, 220, .2)',
      borderColor: 'rgba(0, 213, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },

    {
      backgroundColor: 'rgba(250,62,44,0.2)',
      borderColor: 'rgba(213,24,42,0.7)',
      borderWidth: 2,
    }
  ];

  teams = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getAllTeams();
  }

}
