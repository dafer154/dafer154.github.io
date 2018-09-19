import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  
  experience: Array<any> = [
    {
      date: 'Feb 18 - Jul 18',
      title: 'Fulltack Developer',
      company: 'CIER Sur(Univalle), Cali, Colombia',
      description: [
        'Project GIMNASIO DE HABILIDADES',
        'Back stack: Python, Django rest framework for the manage of API, PostgreSQL, Postman',
        'Front stack: Frontend: React, CSS3, JavaScript with interfaces responsives and adaptatives with Flexbox and @media'
      ]
    },
    {
      date: 'Nov 17 - Feb 18',
      title: 'Frontend Developer',
      company: 'CIER Sur(Univalle), Cali, Colombia',
      description: [
        'Project OBJETOS VIRTUALES DE APRENDIZAJE PARA EDUCACIÓN SUPERIOR',
        'Technologies and skills: HTMl5, CSS3 with interfaces responsives and adaptatives with Flexbox and @media, JQuery and JavaScript.'
      ]
    },
    {
      date: 'Dec 15 - May 16',
      title: 'Software Engineer',
      company: 'Banco de occidente, Cali, Colombia',
      description: [
        'Project UNIFICACION PSP-OCCIRED',
        'Managing services with SOAP UI, Managing of data base ORACLE, and control of logs of data through ESB(Bus enterprise service).',
      ]
    },
    {
      date: 'Jun 15-Dec 15',
      title: 'Software Tester',
      company: 'Banco de occidente, Cali, Colombia',
      description: [
        'Project SISTEMA DE CARTERA FACTORING',
        'Evaluating the quality of the product. Identifying the scope of the test. Design and performing of test cases.',
        'Analyse of test results. Conducting time estimation on assigned projects.',
        'Elaboration and evaluation of a the test plan and a test strategy for the project.',
        'Recording and tracking identified issues.'
      ]
    }
  ];
  education: Array<any> = [
    {
      date: 'Aug 13 - Dec 17',
      title: 'B.Sc Computer Science',
      company: 'Universidad del Valle, Cali, Colombia',
      description: [ 'Degree Project: Herramienta web para visualización de material educativo, en el aula de clase y evaluación continua', 
                      'Back Stack: Django, Django-channels, Django-tenant, PostgreSQL,',
                      'front Stack: Bootstrap, JavaScript, CSS3, Html, JQuery',
                      'The application allows teacher to evaluate students performance on real time. '
      ]
    },
    {
      date: 'Feb 09 - Mar 13',
      title: 'Tech, Technologist in systems information',
      company: 'Universidad del valle, Buenaventura, Colombia',
      description: ['Computers Room Assistant']
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
