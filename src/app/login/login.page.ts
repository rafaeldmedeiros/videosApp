import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  senha: string = '';


  constructor(private toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'a@a.com' && this.senha === 'a'){
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Seja bem vindo!', 'success');
      console.log('Seja bem vindo!');

    }else{
      this.presentToast('ERRO, usuário e/ou senha inválidos!', 'danger');
      console.log('ERRO, usuário e/ou senha inválidos!');
    }
  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    await toast.present();
  }

}
