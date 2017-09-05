import { NgHttpPage } from './app.po';

describe('ng-http App', () => {
  let page: NgHttpPage;

  beforeEach(() => {
    page = new NgHttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
