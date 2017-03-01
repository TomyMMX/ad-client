import { AdClientPage } from './app.po';

describe('ad-client App', () => {
  let page: AdClientPage;

  beforeEach(() => {
    page = new AdClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
