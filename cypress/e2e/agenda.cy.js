describe('Agenda de Contatos - Testes E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('João da Silva');
    cy.get('input[placeholder="E-mail"]').type('joao@teste.com');
    cy.get('input[placeholder="Telefone"]').type('11999999999');
    cy.get('button[type="submit"]').click();

    cy.contains('João da Silva').should('exist');
  });

  it('Deve editar um contato existente', () => {
    cy.contains('João da Silva')
      .parents('.contato')
      .within(() => {
        cy.get('button.edit').click();
      });

    cy.get('input[placeholder="Nome"]').clear().type('João Atualizado');
    cy.get('input[placeholder="E-mail"]').clear().type('joao@novo.com');
    cy.get('input[placeholder="Telefone"]').clear().type('11888888888');
    cy.get('button[type="submit"]').click();

    cy.contains('João Atualizado').should('exist');
  });

  it('Deve remover um contato', () => {
    cy.contains('João Atualizado')
      .parents('.contato')
      .within(() => {
        cy.get('button.delete').click();
      });

    cy.contains('João Atualizado').should('not.exist');
  });
});
