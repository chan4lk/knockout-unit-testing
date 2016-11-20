var PersonNameViewModel = function(first, last){
    var self = this;
    self.isValid = false;
    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);

    self.fullName = ko.computed(function(){
        return self.firstName() + " " + self.lastName();
    }, self); 

    self.submit = function(){
        if(self.validate()){
            alert('Successfully submited');
        }
    }  

    /**
     * validate the model.
     */
    self.validate = function(){
        if(self.firstName() !== "" && self.lastName() !== ""){
            self.isValid = true;
            return true;
        }

        return false;
    }

    return self;
};

(function(){
    ko.applyBindings(new PersonNameViewModel("Ada", "Lovelace"));
})();