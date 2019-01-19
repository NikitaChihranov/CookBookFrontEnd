import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  private host = 'http://localhost:12000/';

  findAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.host}`);
  }
  findByName(name: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.host}${name}`);
  }
  create(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.host}`, recipe);
  }
  uploadPhoto(photos: File[], recipe: Recipe): Observable<Recipe> {
    const formData: FormData = new FormData();
    formData.append('photo', photos[0], photos[0].name);
    const id = recipe._id;
    return this.http.post<Recipe>(`${this.host}uploadPhoto/${id}`, formData);
  }
  updateRecipe(name: string, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.host}${name}`, recipe);
  }
  updatePhoto(photos: File[], recipe: Recipe): Observable<Recipe> {
    const formData: FormData = new FormData();
    formData.append('photo', photos[0], photos[0].name);
    const id = recipe._id;
    return this.http.put<Recipe>(`${this.host}updatePhoto/${id}`, formData);
  }
  deleteRecipe(name: string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.host}${name}`);
  }
  deleteAllRecipes(): Observable<Recipe[]> {
    return this.http.delete<Recipe[]>(`${this.host}deleteAll`);
  }


}
