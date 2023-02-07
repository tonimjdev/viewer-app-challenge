import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

import { ImagesService } from '../services/images.service';
import { ImagesResponse } from '../interfaces/images.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public resultados: ImagesResponse[] = [];
  public page: number = 1;
  private totalPagesToLoad: number = 20;

  constructor(
    private imagesService: ImagesService,
    private dialog: MatDialog
  ) {}

  cargarImagenes() {
    this.imagesService.getImagesFromSplash(this.page).subscribe((resp) => {
      console.log(resp);
      this.resultados.push(...resp);
      console.log('Resultados', this.resultados);
      this.page++;
      console.log(this.resultados);
    });
  }
  onScroll() {
    if (this.page < this.totalPagesToLoad) {
      this.cargarImagenes();
    } else {
      console.log('No more lines. Finish page!');
    }
  }
  openModal(data:object) {
    console.log(data, typeof data);
    this.dialog.open(ModalComponent, {
      data: data,
      backdropClass: 'modal-backdrop',
    });
  }
}
