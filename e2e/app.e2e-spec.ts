import { PopupTestPage } from './app.po';

describe('popup-test App', () => {
  let page: PopupTestPage;

  beforeEach(() => {
    page = new PopupTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
