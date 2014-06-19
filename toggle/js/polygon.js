var map;
require([
        "esri/map", "esri/layers/ArcGISDynamicMapServiceLayer", 
        "esri/layers/FeatureLayer", "dojo/on", "dojo/dom", "dojo/query", "dojo/domReady!"
    ], function(
        Map, ArcGISDynamicMapServiceLayer, FeatureLayer, on, query, dom
    ) {
        map = new Map("map",{
            basemap: "gray",
            center: [5, -10],
            zoom: 5
        });
        var info = new
            FeatureLayer("https://services.arcgis.com/iQ1dY19aHwbSDYIF/arcgis/rest/services/Uganda_Subnational/FeatureServer/0",{
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields:["*"]
        });
        map.addLayer(info);
        //click event for layers
        //using dojo for the event and class toggling but could just as easily be jQuery or vanilla javascript
        on(dojo.byId("info"), "click", function() {
            info.visible ? info.hide() :  info.show();
            dojo.toggleClass(this, "visible");
            dojo.query("#info .visibility-icon").toggleClass("fa-picture-o").toggleClass("fa-ban");
        });
        info.on("mouse-over", showInfo);
        info.on("mouse-out", clearInfo);
        function clearInfo(e) {
            dojo.byId("site-info").innerHTML = "";   
        }
            function showInfo(e) {
            dojo.byId("site-info").innerHTML = e.graphic.attributes.REC_NAME;   
        }
    }
);
