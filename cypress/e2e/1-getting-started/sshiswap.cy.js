describe('User can load page', () => {
  before(() => {
    // cy.visit('https://docs.cypress.io/guides/tooling/plugins-guide#Configuration')
    cy.setupMetamask();
    // cy.changeMetamaskNetwork('Ethereum')
    cy.visit('https://debank.com/')
    
  });
  it('Click Connect Wallet', () => {
    // cy.get('//*[@id="headlessui-menu-button-:ra:"]').click()
    cy.get('#root > div > div.DesktopFrame_mainContainer__2V8Re > div.container_mainSubContainer__39U6P > div.DesktopHeader_container__1-8UI > div > div.DesktopHeader_options__3wjuw > div.DesktopHeader_login__3xR6n > button').click()
    cy.get('body > div.ReactModalPortal > div > div > div > div > div.WalletSelectorModal_walletList__1R_dC > div:nth-child(2) > button').click()
    cy.get('body > div.ReactModalPortal > div > div > div > div > button').click()
    cy.confirmMetamaskSignatureRequest()
    // cy.visit('https://app.uniswap.org/#/swap')
    // cy.get('[data-cy=address').should('contain.text', 'Your address is: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
    // cy.setupMetamask();
  });
})

