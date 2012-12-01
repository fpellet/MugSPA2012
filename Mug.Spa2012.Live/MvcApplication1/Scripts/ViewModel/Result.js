Mug.ViewModel.Result = function(data) {
    var rthis = this;

    rthis.imageUrl = data.ImageUri;
    rthis.name = data.Name;
    rthis.isSelected = ko.observable(false);
    rthis.creationDate = data.CreationDate;
    rthis.keywords = data.Keywords;
};