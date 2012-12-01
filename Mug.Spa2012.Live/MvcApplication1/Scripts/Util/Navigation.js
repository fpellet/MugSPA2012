Mug.Util.Navigation = function () {

};

Mug.Util.Navigation.search = function (keyword) {
    var vm;
    if (keyword == undefined) {
        vm = new Mug.ViewModel.HomePage();
    } else {
        vm = new Mug.ViewModel.SearchPage();
        vm.searchValue(keyword);
        vm.search();
    }

    var body = window.document.body;
    ko.cleanNode(body);
    ko.applyBindings(vm, body);
};