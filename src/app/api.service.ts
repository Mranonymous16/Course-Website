import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // api_url='https://newsapi.org/v2/everything?q=tesla&from=2022-06-20&sortBy=publishedAt&apiKey=8cc9993b445b4164b781b58725fc0168'
 API_KEY: string = '8cc9993b445b4164b781b58725fc0168'
 url: string = 'http://newsapi.org/v2/everything?qInTitle=';
 params: string = '&inflation&from=2022-07-20&sortBy=relevancy&apiKey='
 constructor(private http: HttpClient) { }

 getNewsServiceByCountry(country: string) {
   return this.http.get(this.url + country + this.params + this.API_KEY);
   // return this.http.get(this.api_url + country);
 }
}
