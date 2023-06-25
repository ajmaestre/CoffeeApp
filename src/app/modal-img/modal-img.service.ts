import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalImgService {

  open_modal: boolean = false;
  title_modal: string = '';
  url_image: string = '';

  constructor() { }

}
