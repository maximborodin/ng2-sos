import { Ng2SosPage } from './app.po';

describe('ng2-sos App', function() {
  let page: Ng2SosPage;

  beforeEach(() => {
    page = new Ng2SosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
