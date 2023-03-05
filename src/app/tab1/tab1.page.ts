import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  handlerMessage = '';
  roleMessage = '';
  titulo = "Room Mate";
  listaVideos: IFilme[] = [
    {
      nome:'Batem à Porta',
      lancamento:'2023',
      duracao:'1h 40m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w440_and_h660_face/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg',
      generos: ['Terror', 'Mistério', 'Thriller']
    },
    {
      nome:'Black Panther: Wakanda Para Sempre',
      lancamento:'2022',
      duracao:'2h 41m',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w440_and_h660_face/nZ69WTv7n01womaNz3SHa4inA9x.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica']
    }
  ];

  constructor(private alertController: AlertController, private toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja favoritar esse filme?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            this.notificacaoTemporaria('top');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async notificacaoTemporaria(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos!',
      duration: 1500,
      position: position,
      color: 'success'
    });

    await toast.present();
  }
}
