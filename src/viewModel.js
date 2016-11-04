var PersonNameViewModel = function(first, last){
    var self = this;

    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);

    self.fullName = ko.computed(function(){
        return self.firstName() + " " + self.lastName();
    }, self);   
};

(function(){
    ko.applyBindings(new PersonNameViewModel("Ada", "Lovelace"));
})();