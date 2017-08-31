import { NgReactiveFormsPage } from './app.po';

describe('ng-reactive-forms App', () => {
  let page: NgReactiveFormsPage;

  beforeEach(() => {
    page = new NgReactiveFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
