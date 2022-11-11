import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Articles, initialArticles } from './article.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  countryForm: FormGroup;
  articles: Articles = initialArticles;

  constructor(private service: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.countryForm = this.buildCountryForm();
  }

  buildCountryForm(): FormGroup {
    return this.fb.group({
      country: ['', [Validators.required]]
    })
  }

  openArticle(url: string) {
    window.open(url, "_blank");
  }

  getCountryNews(){
    this.service.getNewsServiceByCountry(this.countryForm.get('country').value).subscribe((resp: Articles) => {
        this.articles = resp
        console.log(resp)
      });

  }
}
