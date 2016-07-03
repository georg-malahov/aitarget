import { AitargetPage } from './app.po';

describe('aitarget App', function() {
  let page: AitargetPage;

  beforeEach(() => {
    page = new AitargetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
