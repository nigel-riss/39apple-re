;
$(document).ready(function() {
    // filters 
    var toggleFiltersOn = $('#toggle-filters-on');
    var toggleFiltersOff = $('#toggle-filters-off');
    var filtersDiv = $('#filters');

    toggleFiltersOn.click(function() {
        filtersDiv.show();
    });

    toggleFiltersOff.click(function() {
        filtersDiv.hide();
    });

    // filters set
    var toggleSets = $('.catalog-filter-set__toggle');

    toggleSets.click(function() {
        $(this).parent().children('.catalog-filter-set__filters').toggle();
        $(this).toggleClass('catalog-filter-set__toggle--on');
        $(this).toggleClass('catalog-filter-set__toggle--off');
    });
});