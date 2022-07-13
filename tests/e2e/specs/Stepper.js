import Stepper from '@/components/tests/e2e/cypress/Stepper.vue'

describe('Stepper component testing', () => {
  it('mounts', () => {
    cy.mount(Stepper)
  })
})
