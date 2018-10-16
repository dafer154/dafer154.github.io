import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  portfolioList = [
    {
      img : 'assets/images/portfolio/cier-sur.png',
      project: 'Objetos virtuales de aprendizaje',
      technologies: [
        'Html5', 'Javascript', 'JQuery', 'CSS3 with Display(flex)', '@media'
      ],
      webUrl: 'http://ciersur.univalle.edu.co/media-main/ovas'

    },
    {
      img: 'assets/images/portfolio/gimnasio.PNG',
      project: 'Gimnasio de habilidades',
      technologies: [
        'Django rest framework', 'Python', 'React', 'PostgreSQL', 'CSS3, display(flex)', 'Html5'
      ]
    },
    {
      img : 'assets/images/portfolio/Cursos_estudiante.png',
      project: 'Evaluacion formativa - EVAFORM',
      technologies: [
        'Python', 'Django-channels, Django-tenants', 'PostgreSQL', 'CSS3', 'Html5', 'JQuery'
      ]
    },
    {
      img : 'assets/images/portfolio/starmovielist.png',
      project: 'StarMovieList - Api TMDB',
      technologies: [
        'Angular 6', 'TypeScript', 'Api-TMDB', 'Promises', 'Angular-UI', 'CSS3', 'Bootstrap 4', 'Web Responsive'
      ],
      webUrl: 'https://dafer154.github.io/starmovielist/'
    },
    {
      img : 'assets/images/portfolio/portfolio-david.png',
      project: 'Portfolio - David Fernando Zuluaga',
      technologies: [
        'Angular 6', 'TypeScript', 'CSS3', 'HTML5', 'Bootstrap 4', 'Web Responsive'
      ],
      webUrl: 'https://dafer154.github.io/portafolio/'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
