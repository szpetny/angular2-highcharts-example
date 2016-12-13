import { AngczartPage } from './app.po';

describe('angczart App', function() {
  let page: AngczartPage;

  beforeEach(() => {
    page = new AngczartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
