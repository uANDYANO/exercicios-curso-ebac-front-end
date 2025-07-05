describe('Agenda de Contatos - Testes E2E', () => {
  const url = 'https://agenda-contatos-react.vercel.app/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[name="name"]').type('João da Silva');
    cy.get('input[name="email"]').type('joao@teste.com');
    cy.get('input[name="phone"]').type('11999999999');
    cy.get('button[type="submit"]').click();

    cy.contains('João da Silva').should('exist');
    cy.contains('joao@teste.com').should('exist');
    cy.contains('11999999999').should('exist');
  });

  it('Deve editar um contato existente', () => {
    cy.contains('João da Silva').parent().within(() => {
      cy.get('button').contains('Editar').click();
    });

    cy.get('input[name="name"]').clear().type('João Atualizado');
    cy.get('input[name="email"]').clear().type('joao@novo.com');
    cy.get('input[name="phone"]').clear().type('11888888888');
    cy.get('button[type="submit"]').click();

    cy.contains('João Atualizado').should('exist');
    cy.contains('joao@novo.com').should('exist');
    cy.contains('11888888888').should('exist');
  });

  it('Deve remover um contato', () => {
    cy.contains('João Atualizado').parent().within(() => {
      cy.get('button').contains('Remover').click();
    });

    cy.contains('João Atualizado').should('not.exist');
  });
});
