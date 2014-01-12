beforeEach(function() {
    d3.select("body").append("div").attr("id", "test-content");
    dc.events.trigger = function(f) { return f(); };
});

afterEach(function () {
    dc.deregisterAllCharts();
    d3.selectAll("#test-content").remove();
});

function appendChartID(id) {
    d3.select("#test-content").append("div").attr("id", id);
}

function coordsFromTranslate(translationString){
    var regex = /translate\((.+),(.+)\)/;
    var result = regex.exec(translationString);

    return { x: +result[1], y: +result[2] };
}
