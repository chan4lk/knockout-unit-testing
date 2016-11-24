var PersonNameViewModel = function (first, last) {
    var self = this;

    Object.defineProperty(self, 'IsValid', {
        get: function () {
            return self.isValid();
        }
    });

    self.firstName = ko.observable(first).extend({ required: true});
    self.lastName = ko.observable(last).extend({ required: true});    

    self.age = ko.observable(0).extend({max: 100, min:5});

    self.fullName = ko.computed(function () {
        return self.firstName() + " " + self.lastName();
    }, self);

    self.submit = function () {
        if (self.IsValid) {
            alert('Successfully submited');
        }
    }

    /**
     * validate the model.
     */
    self.isValid = function () {
        if (self.firstName() !== "" && self.lastName() !== "") {
            return true;
        }

        return false;
    }

    return self;
};

(function () {
    ko.applyBindingsWithValidation(new PersonNameViewModel("Ada", "Lovelace"));
})();