// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.descrizione = ko.observable();
    this.costo = ko.observable();

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());