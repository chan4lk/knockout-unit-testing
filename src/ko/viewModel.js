var PersonNameViewModel = function (first, last) {
    var self = this;

    Object.defineProperty(self, 'IsValid', {
        get: function () {
            return self.isValid();
        }
    });

    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);

    self.fullName = ko.computed(function () {
        return self.firstName() + " " + self.lastName();
    }, self);

    self.submit = function () {
        if (self.IsValid) {
            alert('Successfully submited');
        }
    };

    /**
     * validate the model.
     */
    self.isValid = function () {
        if (self.firstName() !== "" && self.lastName() !== "") {
            return true;
        }

        return false;
    };

    return self;
};

(function () {
    ko.applyBindings(new PersonNameViewModel("Ada", "Lovelace"));
})();