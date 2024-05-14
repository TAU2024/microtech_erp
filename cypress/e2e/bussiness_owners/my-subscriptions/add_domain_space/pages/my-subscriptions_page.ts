import { BussinessOwnerFunction } from "../../../functions/get_expiry_date";

export class MySubscriptionsPage {
  static clickAddDomainSpaceBtn() {
    cy.get(".plan_header > .btn").click();
  }
  static inputeCount(count: any) {
    cy.get(
      ":nth-child(1) > lib-form-group > .group > .ng-untouched > .p-inputtext"
    )
      .clear()
      .type(count + "{enter}");
  }
  static validateMonthlyCount(count: any) {
    var cost = count * 50;
    cy.get(".cost").should("have.value", cost.toString());
    cy.get(".period").should("have.value", "Monthly");
  }
  static clickYearly() {
    cy.get("#Yearly").click();
  }
  static validateYearlyCount(count: number) {
    var cost = count * 600;
    cy.get(".cost").should("have.value", cost.toString());
    cy.get(".period").should("have.value", "Yearly");
  }

  static inputeYourDomainSpace(subDomain: any) {
    cy.get(
      ":nth-child(4) > lib-form-group > .group > .ng-untouched > .p-inputtext"
    )
      .clear()
      .type(subDomain);
  }
  static validateAddedSubdomain(subDomain: any) {
    // Validate The Subdomain Url is displayed
    cy.get(":nth-child(3) > .card_header > .supdomain").should(
      "include",
      subDomain
    );
    // Validate The Subdomain Url is Expire date is Displayed
    cy.get(":nth-child(3) > .card_header > .date > .expire_date").should(
      "include",
      BussinessOwnerFunction.getExpiryDate()
    );
  }
  static validateRequiredComponents(len: number) {
    cy.get("span.errorMessage.ng-star-inserted")
      .contains(/required/i)
      .should("have.length", len);
  }

  static validateDublicatedDomainSpace() {
    cy.get("div.domain_invalid.ng-star-inserted").should("be.visible");
  }

  static validateAvailableDomainSpace() {
    cy.get("div.domain_valid.ng-star-inserted").should("be.visible");
  }

  static validateInvalidCount() {
    cy.get("span.errorMessage.ng-star-inserted")
      .contains(/length/i)
      .should("be.visible");
  }


static verifyValidSubDomainCount(count:any){
    MySubscriptionsPage.inputeCount(count);
    count >12 ?MySubscriptionsPage.validateInvalidCount():null;
    MySubscriptionsPage.clickAddDomainSpaceBtn();
    // Close Dialoge Button
    cy.get("div.pi.pi-times.cancel::before").click();
    // Alert Pop Up
    cy.get("#swal2-html-container").should("be.visible");
}
  static clickAddToCartButton() {
    cy.get(".actions > .btn").click();
  }
}
