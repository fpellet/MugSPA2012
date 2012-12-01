Mug.ViewModel.HomePage = function () {
    var rthis = this;

    rthis.searchValue = ko.observable('');
    rthis.templateName = 'template.homePage';
    rthis.searchValue.subscribe(function () {
        Mug.Util.Navigation.search(rthis.searchValue());
    });

    rthis.submitForm = function () {
        Mug.Util.Navigation.search(rthis.searchValue());
        return false;
    };
}