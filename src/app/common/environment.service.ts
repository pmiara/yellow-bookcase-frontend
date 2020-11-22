import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface EnvironmentConfig {
  production: boolean;
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  getEnvConfig(): EnvironmentConfig {
    return environment;
  }
}
