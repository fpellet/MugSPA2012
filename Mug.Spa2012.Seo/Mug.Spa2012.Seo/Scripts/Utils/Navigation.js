Mug.Utils.Navigation = function() {

};

Mug.Utils.Navigation.search = function (keyword) {
    var url;

    if (keyword == undefined) {
        url = "/home/index";
    } else {
        url = "/home/search/" + escape(keyword);
    }

    Mug.Utils.Navigation._goToUrl(url);
};

Mug.Utils.Navigation.update = function (vm) {
    if (vm == undefined) return;

    window["viewModel"] = vm;
    Mug.Utils.Navigation.initialize();
};

Mug.Utils.Navigation.initialize = function () {
    var data = window["viewModel"];

    document.title = data.Title;

    var type = data.ViewModelType;
    var viewModel = undefined;
    if (type == "HomePage") viewModel = new Mug.ViewModel.HomePage(data);
    else if (type == "SearchPage") viewModel = new Mug.ViewModel.SearchPage(data);

    if (viewModel == undefined) return;

    viewModel.ViewName = type;

    var body = window.document.body;
    ko.cleanNode(body);
    ko.applyBindings(viewModel);
};

Mug.Utils.Navigation._historySupported = !(typeof history.pushState === 'undefined');
Mug.Utils.Navigation._lastRequest = undefined;

Mug.Utils.Navigation.initializeHistory = function () {
    window.addEventListener('popstate', function (event) {
        Mug.Utils.Navigation.update(event.state);
    });

    if (!Mug.Utils.Navigation._historySupported) return;

    history.replaceState(window["viewModel"], document.title, document.location.href);
};

Mug.Utils.Navigation._goToUrl = function(url) {
    if (!Mug.Utils.Navigation._historySupported) {
        window.location = url;
        return;
    }

    if (Mug.Utils.Navigation._lastRequest != undefined) {
        Mug.Utils.Navigation._lastRequest.abort();
    }

    var successCallback = function(data) {
        Mug.Utils.Navigation._lastRequest = undefined;

        Mug.Utils.Navigation.update(data);

        history.pushState(data, data.Title, url);
    };

    Mug.Utils.Navigation._lastRequest = $.ajax({
        url: url + "?json",
        type: 'GET',
        dataType: 'json',
        success: successCallback,
        error: function(a) {
        }
    });
};