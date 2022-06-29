describe("My First Test", () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit("http://127.0.0.1:5500/Front/Accueil/accueil.html");
    cy.wait(500);

    cy.get(".btn").click();

    cy.url().should("include", "/connexion/connexion.html");
    
    cy.get("#email")
      .type("yassine60000@gmail.com")
      .should("have.value", "yassine60000@gmail.com");
    
      cy.get("#password")
      .type("AZERTY123456789")
      .should("have.value", "AZERTY123456789");
    
      cy.get("#connexion").click();

    cy.url().should("include", "/transform/transform.html", () => {
      expect(localStorage.getItem("token"));
    });
    
    cy.get("#link")
      .type("https://www.google.fr/")
      .should("have.value", "https://www.google.fr/");

    cy.get("button").click();

   
    

  });
});
