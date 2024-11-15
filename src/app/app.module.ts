import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    HttpClientModule,
    AuthComponent  // Include standalone component
  ],
})
export class AppModule {}
