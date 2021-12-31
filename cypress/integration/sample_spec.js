describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://site.qr-row.staging.goquo.io/')
        cy.get('#cmCloseBanner').click();
        cy.get('.flight-search-box').find('.box-search').eq(0).type("CDG").click();
        cy.get('.flight-result-ddr__item').find('.result-name').contains('CDG').click();
        cy.get('.flight-search-box').find('.box-search').eq(1).type("HKT").click();
        cy.get('.flight-result-ddr__item').find('.result-name').contains('HKT').click();
        cy.get('input[name="DepartureDate"]').eq(0).invoke('val', '2022-01-04');
        cy.get('input[name="ReturnDate"]').eq(0).invoke('val', '2022-01-05');
        cy.get('#btnSubmitStopoverSeparate').click();
        cy.get('.btn').contains('Book').click({force:true});
        })
  })