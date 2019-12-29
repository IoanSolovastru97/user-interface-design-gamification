import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent implements OnInit {

  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    {data: [80, 80, 40, 10, 50], label: 'Graphic design'}
  ];

  public chartLabels: Array<any> = ['OpenGL', 'OpenCV', 'Blender', 'Cinema4D', 'Illustrator'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
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
  // third chart
  public chartDatasetsWeb: Array<any> = [
    {data: [80, 50, 70, 30, 20], label: 'Web development'}
  ];

  public chartLabelsWeb: Array<any> = ['Spring', 'React', 'Angular', 'gRPC', 'Dockers'];

  public chartColorsWeb: Array<any> = [
    {
      backgroundColor: ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#DAF7A6'],
      hoverBackgroundColor: ['#FFDA60', '#FF9680', '#D5406B', '#AC496F', '#E3F9BC'],
      borderWidth: 2,
    }
  ];
  // fourth chart
  public chartDatasetsAI: Array<any> = [
    {data: [10, 30, 10, 10, 20], label: 'Artificial Intelligence'}
  ];

  public chartLabelsAI: Array<any> = ['Neural Networks', 'Clustering', 'Computer Vision', 'NLP', 'Expert Systems'];

  public chartColorsAI: Array<any> = [
    {
      backgroundColor: ['#980EA9', '#6A0EA9', '#3C0EA9', '#0E61A9', '#0E94A9'],
      hoverBackgroundColor: ['#BF68C9', '#A268C9', '#542CB4', '#2C75B4', '#68BCC9'],
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }


  constructor() {
  }

  ngOnInit() {
  }

}

