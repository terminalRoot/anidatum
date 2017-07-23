import { AdDreamPage } from './app.po';

describe('ad-dream App', () => {
  let page: AdDreamPage;

  beforeEach(() => {
    page = new AdDreamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
