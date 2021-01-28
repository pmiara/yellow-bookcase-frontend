import { Pipe, PipeTransform } from '@angular/core';
import { CoverImg } from '../../models/cover-img.model';
import { EnvironmentService } from '../../services/environment.service';

@Pipe({ name: 'coverImgFullUrl' })
export class CoverImgFullUrlPipe implements PipeTransform {
  constructor(private environmentService: EnvironmentService) {}

  transform(coverImg: CoverImg): string {
    if (coverImg.provider === 'local') {
      const apiUrl = this.environmentService.getEnvConfig().apiUrl;
      return apiUrl + coverImg.url;
    } else {
      return coverImg.url;
    }
  }
}
