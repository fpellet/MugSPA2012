Mug.ViewModel.SearchPage = function () {
    var rthis = this;

    rthis.searchValue = ko.observable('');
    rthis.selectedResult = ko.observable();
    rthis.results = ko.observableArray();
    rthis.templateName = 'template.searchPage';

    rthis.hasSelectedResult = ko.computed(function() {
        return rthis.selectedResult() != undefined;
    });

    rthis.filtedResults = ko.computed(function() {
        return ko.utils.arrayFilter(rthis.results(), function(item) {
            return item.name.indexOf(rthis.searchValue()) != -1 || rthis.searchValue().length == 0;
        });
    });

    rthis.search = function () {
        $.ajax({
            url: "/api/mug",
            type: 'GET',
            dataType: 'json',
            success: function (result) {
                var results = ko.utils.arrayMap(result, function (item) {
                    return new Mug.ViewModel.Result(item);
                });
                rthis.results(results);
            },
            error: function (a) {
            }
        });
        return false;
    };

    rthis.select = function(item) {
        rthis.selectedResult(item);
        ko.utils.arrayForEach(rthis.results(), function(item) {
            item.isSelected(false);
        });

        item.isSelected(true);
    };
    
    rthis.displayItem = function (elem, index) {
        if (elem.nodeType === 1) {
            $(elem).hide().fadeIn(200 * index);
        }
    };

    rthis.hideItem = function (elem) {
        if (elem.nodeType === 1) {
            $(elem).fadeOut(200);
        }
    };
}