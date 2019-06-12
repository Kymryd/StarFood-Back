import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Lang } from '../models/lang.model';
import { LangService } from './lang.service';

@Component({
  templateUrl: './add-lang.component.html'
})
export class AddLangComponent {

  lang: Lang = new Lang();

  constructor(private router: Router, private langService: LangService) {

  }

  createLang(): void {
    this.langService.createLang(this.lang)
      .subscribe( data => {
        alert('lang created successfully.');
      });

  }

}
