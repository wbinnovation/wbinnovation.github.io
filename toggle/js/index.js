var map;
require([
        "esri/map", "esri/layers/ArcGISDynamicMapServiceLayer", 
        "esri/layers/FeatureLayer", "dojo/on", "dojo/dom", "dojo/query", "dojo/domReady!"
    ], function(
        Map, ArcGISDynamicMapServiceLayer, FeatureLayer, on, query, dom
    ) {
        map = new Map("map",{
            basemap: "topo",
            center: [-121, 47.55],
            zoom: 11
        });
        var info = new
            FeatureLayer("http://services1.arcgis.com/mRXrgD3LWwGHJmpS/arcgis/rest/services/wenatchee_rec/FeatureServer/0",{
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields:["*"]
        });
        var camp = new
            FeatureLayer("http://services1.arcgis.com/mRXrgD3LWwGHJmpS/arcgis/rest/services/wenatchee_rec/FeatureServer/5",{
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields:["*"]
        });
        var trail = new
            FeatureLayer("http://services1.arcgis.com/mRXrgD3LWwGHJmpS/arcgis/rest/services/wenatchee_rec/FeatureServer/4",{
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields:["*"]
        });
        var boat = new
            FeatureLayer("http://services1.arcgis.com/mRXrgD3LWwGHJmpS/arcgis/rest/services/wenatchee_rec/FeatureServer/3",{
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields:["*"]
        });
        var picnic = new
            FeatureLayer("http://services1.arcgis.com/mRXrgD3LWwGHJmpS/arcgis/rest/services/wenatchee_rec/FeatureServer/2",{
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields:["*"]
        });
        var ski = new
            FeatureLayer("http://services1.arcgis.com/mRXrgD3LWwGHJmpS/arcgis/rest/services/wenatchee_rec/FeatureServer/1",{
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields:["*"]
        });
        map.addLayer(info);
        map.addLayer(camp);
        map.addLayer(trail);
        map.addLayer(boat);
        map.addLayer(picnic);
        map.addLayer(ski);
        //click event for layers
        //using dojo for the event and class toggling but could just as easily be jQuery or vanilla javascript
        on(dojo.byId("trail"), "click", function() {
            trail.visible ? trail.hide() :  trail.show();
            dojo.toggleClass(this, "visible");
            dojo.query("#trail .visibility-icon").toggleClass("fa-picture-o").toggleClass("fa-ban");
        });
        on(dojo.byId("camp"), "click", function() {
            camp.visible ? camp.hide() :  camp.show();
            dojo.toggleClass(this, "visible");
            dojo.query("#camp .visibility-icon").toggleClass("fa-picture-o").toggleClass("fa-ban");
        });
        on(dojo.byId("picnic"), "click", function() {
            picnic.visible ? picnic.hide() :  picnic.show();
            dojo.toggleClass(this, "visible");
            dojo.query("#picnic .visibility-icon").toggleClass("fa-picture-o").toggleClass("fa-ban");
        });
        on(dojo.byId("ski"), "click", function() {
            ski.visible ? ski.hide() :  ski.show();
            dojo.toggleClass(this, "visible");
            dojo.query("#ski .visibility-icon").toggleClass("fa-picture-o").toggleClass("fa-ban");
        });
        on(dojo.byId("boat"), "click", function() {
            boat.visible ? boat.hide() :  boat.show();
            dojo.toggleClass(this, "visible");
            dojo.query("#boat .visibility-icon").toggleClass("fa-picture-o").toggleClass("fa-ban");
        });
        on(dojo.byId("info"), "click", function() {
            info.visible ? info.hide() :  info.show();
            dojo.toggleClass(this, "visible");
            dojo.query("#info .visibility-icon").toggleClass("fa-picture-o").toggleClass("fa-ban");
        });
        trail.on("mouse-over", showInfo);
        trail.on("mouse-out", clearInfo);
        camp.on("mouse-over", showInfo);
        camp.on("mouse-out", clearInfo);
        picnic.on("mouse-over", showInfo);
        picnic.on("mouse-out", clearInfo);
        ski.on("mouse-over", showInfo);
        ski.on("mouse-out", clearInfo);
        boat.on("mouse-over", showInfo);
        boat.on("mouse-out", clearInfo);
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