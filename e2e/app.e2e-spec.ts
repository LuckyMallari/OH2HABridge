import { Oh2habridgePage } from './app.po';

describe('oh2habridge App', function() {
  let page: Oh2habridgePage;

  beforeEach(() => {
    page = new Oh2habridgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
