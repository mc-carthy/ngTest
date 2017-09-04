import { NgPipesPage } from './app.po';

describe('ng-pipes App', () => {
  let page: NgPipesPage;

  beforeEach(() => {
    page = new NgPipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
