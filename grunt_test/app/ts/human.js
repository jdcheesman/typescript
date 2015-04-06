var Human = (function () {
    function Human(firstName, lastName) {
        if (firstName === void 0) { firstName = "John"; }
        if (lastName === void 0) { lastName = "Doe"; }
        this.firstName = firstName;
        this.lastName = lastName;
        console.log("Hello ", firstName, lastName);
    }
    return Human;
})();
