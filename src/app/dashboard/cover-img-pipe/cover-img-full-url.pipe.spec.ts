import { CoverImgFullUrlPipe } from './cover-img-full-url.pipe';
import { EnvironmentService } from '../../services/environment.service';

describe('CoverImgFullUrlPipe', () => {
  const fakeEnvService = {
    getEnvConfig: () => ({ apiUrl: 'http://example.com', production: false })
  };
  const pipe = new CoverImgFullUrlPipe(fakeEnvService as EnvironmentService);

  it('given the local image provider adds a host prefix to a cover image url', () => {
    const coverImg = {
      name: 'foo.jpg',
      url: '/uploads/images/foo.jpg',
      provider: 'local'
    };

    expect(pipe.transform(coverImg)).toBe(
      'http://example.com/uploads/images/foo.jpg'
    );
  });

  it('given the non-local image provider leaves an original cover image url', () => {
    const coverImg = {
      name: 'foo.jpg',
      url: 'https://images.com/foo.jpg',
      provider: 'other'
    };

    expect(pipe.transform(coverImg)).toBe('https://images.com/foo.jpg');
  });
});
