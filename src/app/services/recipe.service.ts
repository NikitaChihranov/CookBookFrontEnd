import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Recipe} from '../models/Recipe';
import {AllRecipes} from '../models/AllRecipes';
import {All} from 'tslint/lib/rules/completedDocsRule';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {
  }
  dataSource = new BehaviorSubject<Recipe[]>([]);
  private host = 'http://localhost:12000/';

  findAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.host}`);
  }
  findByName(name: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.host}${name}`);
  }
  viewAllVersions(id: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.host}viewAllVersions/${id}`);
  }
  create(recipe: Recipe): Observable<AllRecipes> {
    return this.http.post<AllRecipes>(`${this.host}`, recipe);
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
  updatePhoto(photos: File[], allRecipes: AllRecipes): Observable<Recipe> {
    const formData: FormData = new FormData();
    formData.append('photo', photos[0], photos[0].name);
    const id = allRecipes._id;
    return this.http.put<Recipe>(`${this.host}updatePhoto/${id}`, formData);
  }
  deleteRecipe(name: string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.host}${name}`);
  }
  deleteAllRecipes(): Observable<Recipe[]> {
    return this.http.delete<Recipe[]>(`${this.host}`);
  }
  sortRecipes(valueToSort: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${this.host}sort/${valueToSort}`);
  }
}
