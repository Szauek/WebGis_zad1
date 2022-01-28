require([
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/LayerList",
    "esri/widgets/DistanceMeasurement2D",
    "esri/widgets/Search",
], function (WebMap, MapView, ScaleBar, Legend, BasemapGallery, Expand, LayerList, DistanceMeasurement2D, Search) {

    //mapa

    const webMap = new WebMap({
        portalItem: {
            id: "e62f11de979540b6971b53914092e053"
        }
    });

    const view = new MapView({
        container: "map",
        map: webMap,
        zoom: 6,
        center: [0, 52]
    });

    //odnosniki

    let link1 = document.getElementById("link1"); //peak
    link1.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [-2.224099, 54.260242]
        view.zoom = 10
    });

    let link2 = document.getElementById("link2");
    link2.addEventListener("click", function(event) { //lake
        event.preventDefault();
        view.center= [-3.078887, 54.469036]
        view.zoom = 10
    });

    let link3 = document.getElementById("link3");
    link3.addEventListener("click", function(event) { //dartmor
        event.preventDefault();
        view.center= [-3.915210, 50.588798]
        view.zoom = 11
    });

    let link4 = document.getElementById("link4");
    link4.addEventListener("click", function(event) { //north york moors
        event.preventDefault();
        view.center = [-0.868203, 54.398673]
        view.zoom = 10
    });

    let link5 = document.getElementById("link5");
    link5.addEventListener("click", function(event) { //Yorkshire
        event.preventDefault();
        view.center = [-2.223641, 54.269759]
        view.zoom = 10
    });

    let link6 = document.getElementById("link6");
    link6.addEventListener("click", function(event) { //Exmoor
        event.preventDefault();
        view.center = [-3.648594, 51.151304]
        view.zoom = 11
    });

    let link7 = document.getElementById("link7");
    link7.addEventListener("click", function(event) { //Northumberland
        event.preventDefault();
        view.center = [-2.233137, 55.308797]
        view.zoom = 10
    });

    let link8 = document.getElementById("link8");
    link8.addEventListener("click", function(event) { //The Broads
        event.preventDefault();
        view.center = [1.616182, 52.618754]
        view.zoom = 11
    });

    let link9 = document.getElementById("link9");
    link9.addEventListener("click", function(event) { //New Forest
        event.preventDefault();
        view.center = [-1.589254, 50.858308]
        view.zoom = 11
    });

    let link10 = document.getElementById("link10");
    link10.addEventListener("click", function(event) { //north york moors
        event.preventDefault();
        view.center = [-0.669836, 50.944482]
        view.zoom = 10
    });

    

    // Widgety

    const measurement = new DistanceMeasurement2D({
        view: view,
    });  

    const layerList = new LayerList({
        view:view
    });

    const legend = new Legend({
        view: view
    });

    const expandLg = new Expand({
        view: view,
        content: legend
    });

    const scalebar = new ScaleBar({
        view: view
    });

    const searchWidget = new Search({
        view: view
    });

    const bmWg = new BasemapGallery({
        view: view
    });

    const expandWg = new Expand({
        view: view,
        content: bmWg
    });

    view.ui.add(measurement,"top-right");  
    view.ui.add(layerList,"top-right");
    view.ui.add(scalebar, "bottom-right");
    view.ui.add(searchWidget,"top-right");
    view.ui.add(expandLg, "top-right");
    view.ui.add(expandWg,"top-right");

    let strzalka = document.getElementById("przesun_w_dol");
    let przesun = logo.scrollHeight + naglowek.scrollHeight;

    strzalka.addEventListener("click", () => window.scrollTo({
        top: przesun,
        behavior: "smooth"
    }));

});

