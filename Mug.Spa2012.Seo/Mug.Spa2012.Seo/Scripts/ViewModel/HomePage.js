Mug.ViewModel.HomePage = function (data) {
    var rthis = this;

    rthis.SearchValue = ko.observable('');
    rthis.SearchValue.subscribe(function () {
        Mug.Utils.Navigation.search(rthis.SearchValue());
    });

    rthis.search = function () {
        Mug.Utils.Navigation.search(rthis.SearchValue());

        return false;
    };
}