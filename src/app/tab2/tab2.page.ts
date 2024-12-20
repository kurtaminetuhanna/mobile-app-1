
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  email: string = ''; // Kullanıcı e-postası için bir değişken
  password: string = ''; // Kullanıcı şifresi için bir değişken

  constructor() {}

  // Şifre sıfırlama işlemi için örnek bir metod
  onForgotPassword() {
    console.log('Şifre sıfırlama işlemi başlatıldı');
    // Burada şifre sıfırlama işlemleri başlatılabilir (örn. bir servis çağrısı)
  }
}
