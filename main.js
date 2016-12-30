$(document).ready(function() {
    $.getJSON("categories.json", function(data) {

        $.each(data, function(key, val) {
            var key_id = key.replace(/\s+/g, "-").replace(/&+/g, "-");
            var item = '<li><a href="#" data-toggle="collapse" data-target="#' + key_id + '">' +
                key + '</a>' + '<div style="padding-left:10px;"> <ul id="' + key_id + '" class="nav nav-pills nav-stacked collapse">';

            for (var category in val) {
                item += '<li><a href="http://www.netflix.com/browse/genre/' + val[category] + '">' + category + '</a></li>';
            }

            item += '</ul> </div> </li>';

            $(item).appendTo("#drilldown");
        });

    });

    var $drilldown = $('#drilldown');
    $drilldown.on('show.bs.collapse', '.collapse', function() {
        $drilldown.find('.collapse.in').collapse('hide');
    });
});
