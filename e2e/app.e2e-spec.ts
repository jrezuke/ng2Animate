import { Ng2animatePage } from './app.po';

describe('ng2animate App', function() {
  let page: Ng2animatePage;

  beforeEach(() => {
    page = new Ng2animatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
