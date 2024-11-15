import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AuthComponent } from './app/auth/auth.component';

bootstrapApplication(AuthComponent, {
  providers: [provideHttpClient()]
}).catch((err) => console.error(err));
