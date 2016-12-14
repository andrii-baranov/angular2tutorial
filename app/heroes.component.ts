import { Component, OnInit } from '@angular/core';
import {Hero} from './hero'
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls : [ 'heroes.component.css' ],
  templateUrl : 'heroes.component.html',
  providers: [HeroService]
})

export class HeroesComponent implements OnInit
{ 
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }
  
  onSelect(hero: Hero): void {
   this.selectedHero = hero;
  };
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}