describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
      cy.visit('http://127.0.0.1:5500/Front/Accueil/accueil.html')
      cy.wait(500)
      cy.get(".btn").click()


    })
  })
