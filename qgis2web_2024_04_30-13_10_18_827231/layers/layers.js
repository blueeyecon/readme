var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_D_1 = new ol.format.GeoJSON();
var features_D_1 = format_D_1.readFeatures(json_D_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_1.addFeatures(features_D_1);
var lyr_D_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_D_1, 
                style: style_D_1,
                popuplayertitle: "D",
                interactive: true,
    title: 'D<br />\
    <img src="styles/legend/D_1_0.png" /> 1<br />\
    <img src="styles/legend/D_1_1.png" /> 2<br />\
    <img src="styles/legend/D_1_2.png" /> 3<br />\
    <img src="styles/legend/D_1_3.png" /> 4<br />\
    <img src="styles/legend/D_1_4.png" /> main channel<br />'
        });
var format_manjeshwar_2 = new ol.format.GeoJSON();
var features_manjeshwar_2 = format_manjeshwar_2.readFeatures(json_manjeshwar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manjeshwar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manjeshwar_2.addFeatures(features_manjeshwar_2);
var lyr_manjeshwar_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manjeshwar_2, 
                style: style_manjeshwar_2,
                popuplayertitle: "manjeshwar",
                interactive: true,
                title: '<img src="styles/legend/manjeshwar_2.png" /> manjeshwar'
            });
var format_mainlocations_3 = new ol.format.GeoJSON();
var features_mainlocations_3 = format_mainlocations_3.readFeatures(json_mainlocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainlocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainlocations_3.addFeatures(features_mainlocations_3);
var lyr_mainlocations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mainlocations_3, 
                style: style_mainlocations_3,
                popuplayertitle: "main locations",
                interactive: true,
                title: '<img src="styles/legend/mainlocations_3.png" /> main locations'
            });
var format_mwatershedmanjeshwar_4 = new ol.format.GeoJSON();
var features_mwatershedmanjeshwar_4 = format_mwatershedmanjeshwar_4.readFeatures(json_mwatershedmanjeshwar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mwatershedmanjeshwar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mwatershedmanjeshwar_4.addFeatures(features_mwatershedmanjeshwar_4);
var lyr_mwatershedmanjeshwar_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mwatershedmanjeshwar_4, 
                style: style_mwatershedmanjeshwar_4,
                popuplayertitle: "m.watershed — manjeshwar",
                interactive: true,
                title: 'm.watershed — manjeshwar'
            });

lyr_OSMStandard_0.setVisible(true);lyr_D_1.setVisible(true);lyr_manjeshwar_2.setVisible(true);lyr_mainlocations_3.setVisible(true);lyr_mwatershedmanjeshwar_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_D_1,lyr_manjeshwar_2,lyr_mainlocations_3,lyr_mwatershedmanjeshwar_4];
lyr_D_1.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_manjeshwar_2.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_mainlocations_3.set('fieldAliases', {'feature na': 'feature na', 'latitude': 'latitude', 'longitude': 'longitude', 'photos': 'photos', });
lyr_mwatershedmanjeshwar_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_D_1.set('fieldImages', {'ORDER1': 'Range', });
lyr_manjeshwar_2.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'Range', 'KERWSDRP_I': 'Range', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_mainlocations_3.set('fieldImages', {'feature na': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'photos': 'ExternalResource', });
lyr_mwatershedmanjeshwar_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_D_1.set('fieldLabels', {'ORDER1': 'inline label - always visible', });
lyr_manjeshwar_2.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_mainlocations_3.set('fieldLabels', {'feature na': 'header label - always visible', 'latitude': 'header label - always visible', 'longitude': 'header label - always visible', 'photos': 'header label - always visible', });
lyr_mwatershedmanjeshwar_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'inline label - always visible', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'header label - always visible', 'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_mwatershedmanjeshwar_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});