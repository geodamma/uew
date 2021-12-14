var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_T_1 = new ol.format.GeoJSON();
var features_T_1 = format_T_1.readFeatures(json_T_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_1.addFeatures(features_T_1);
var lyr_T_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T_1, 
                style: style_T_1,
                interactive: true,
                title: '<img src="styles/legend/T_1.png" /> T'
            });
var format_R_2 = new ol.format.GeoJSON();
var features_R_2 = format_R_2.readFeatures(json_R_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_2.addFeatures(features_R_2);
var lyr_R_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R_2, 
                style: style_R_2,
                interactive: true,
                title: '<img src="styles/legend/R_2.png" /> R'
            });
var format_M_3 = new ol.format.GeoJSON();
var features_M_3 = format_M_3.readFeatures(json_M_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M_3.addFeatures(features_M_3);
var lyr_M_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_M_3, 
                style: style_M_3,
                interactive: true,
                title: '<img src="styles/legend/M_3.png" /> M'
            });
var format_B_4 = new ol.format.GeoJSON();
var features_B_4 = format_B_4.readFeatures(json_B_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B_4.addFeatures(features_B_4);
var lyr_B_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B_4, 
                style: style_B_4,
                interactive: true,
                title: '<img src="styles/legend/B_4.png" /> B'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_T_1.setVisible(true);lyr_R_2.setVisible(true);lyr_M_3.setVisible(true);lyr_B_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_T_1,lyr_R_2,lyr_M_3,lyr_B_4];
lyr_T_1.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_R_2.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_M_3.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_B_4.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_T_1.set('fieldImages', {'type': 'TextEdit', 'floor': 'TextEdit', });
lyr_R_2.set('fieldImages', {'type': 'TextEdit', 'floor': 'TextEdit', });
lyr_M_3.set('fieldImages', {'type': 'TextEdit', 'floor': 'TextEdit', });
lyr_B_4.set('fieldImages', {'type': 'TextEdit', 'floor': 'TextEdit', });
lyr_T_1.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_R_2.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_M_3.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_B_4.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_B_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});