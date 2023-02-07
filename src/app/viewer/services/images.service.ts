import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagesResponse } from '../interfaces/images.interface';
import { environment } from 'src/environments/environments';

const clientId = environment.clientId;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor( private http: HttpClient ) { }

getImagesFromSplash( page:number ) {
  return this.http.get<ImagesResponse[]>(`${ apiUrl }/`, {
    params: {
      client_id: clientId,
      page: page,
    }
  })
}
}
