import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  open_modal: boolean = false;
  title_modal: string = '';
  content_modal: string[] = [];
  url_img: string = '';

  constructor() { }

}
