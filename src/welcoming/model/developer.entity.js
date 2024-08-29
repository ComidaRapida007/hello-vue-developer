/**
 * Developer entity
 * @description
 * this class represents a developer entity.
 * It has a first name and a last name.
 */

export class Developer {
    firstName;
    lastName;

    constructor(firstName,lastName) {
        this.firstName=firstName;
        this.lastName=lastName;
    }

    get fullName(){
        return this.firstName == null || this.lastName == null ? "Unknown" : `${this.firstName} ${this.lastName}`.trim();
    }

}