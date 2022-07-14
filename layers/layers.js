var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Wards_1 = new ol.format.GeoJSON();
var features_Wards_1 = format_Wards_1.readFeatures(json_Wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_1.addFeatures(features_Wards_1);
var lyr_Wards_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wards_1, 
                style: style_Wards_1,
                interactive: true,
    title: 'Wards<br />\
    <img src="styles/legend/Wards_1_0.png" /> Morogoro<br />\
    <img src="styles/legend/Wards_1_1.png" /> Tanga<br />'
        });
var format_Catchment_Tz_2 = new ol.format.GeoJSON();
var features_Catchment_Tz_2 = format_Catchment_Tz_2.readFeatures(json_Catchment_Tz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catchment_Tz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catchment_Tz_2.addFeatures(features_Catchment_Tz_2);
var lyr_Catchment_Tz_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Catchment_Tz_2, 
                style: style_Catchment_Tz_2,
                interactive: true,
    title: 'Catchment_Tz<br />\
    <img src="styles/legend/Catchment_Tz_2_0.png" /> 18<br />\
    <img src="styles/legend/Catchment_Tz_2_1.png" /> 19<br />\
    <img src="styles/legend/Catchment_Tz_2_2.png" /> 21<br />\
    <img src="styles/legend/Catchment_Tz_2_3.png" /> 22<br />\
    <img src="styles/legend/Catchment_Tz_2_4.png" /> 26<br />\
    <img src="styles/legend/Catchment_Tz_2_5.png" /> 37<br />\
    <img src="styles/legend/Catchment_Tz_2_6.png" /> 40<br />\
    <img src="styles/legend/Catchment_Tz_2_7.png" /> 43<br />\
    <img src="styles/legend/Catchment_Tz_2_8.png" /> 49<br />\
    <img src="styles/legend/Catchment_Tz_2_9.png" /> 69<br />\
    <img src="styles/legend/Catchment_Tz_2_10.png" /> 86<br />\
    <img src="styles/legend/Catchment_Tz_2_11.png" /> 88<br />\
    <img src="styles/legend/Catchment_Tz_2_12.png" /> 122<br />\
    <img src="styles/legend/Catchment_Tz_2_13.png" /> 130<br />\
    <img src="styles/legend/Catchment_Tz_2_14.png" /> 131<br />\
    <img src="styles/legend/Catchment_Tz_2_15.png" /> 133<br />\
    <img src="styles/legend/Catchment_Tz_2_16.png" /> 150<br />\
    <img src="styles/legend/Catchment_Tz_2_17.png" /> 151<br />\
    <img src="styles/legend/Catchment_Tz_2_18.png" /> 156<br />\
    <img src="styles/legend/Catchment_Tz_2_19.png" /> 162<br />\
    <img src="styles/legend/Catchment_Tz_2_20.png" /> 178<br />\
    <img src="styles/legend/Catchment_Tz_2_21.png" /> 202<br />\
    <img src="styles/legend/Catchment_Tz_2_22.png" /> 209<br />\
    <img src="styles/legend/Catchment_Tz_2_23.png" /> 220<br />\
    <img src="styles/legend/Catchment_Tz_2_24.png" /> 224<br />\
    <img src="styles/legend/Catchment_Tz_2_25.png" /> 227<br />\
    <img src="styles/legend/Catchment_Tz_2_26.png" /> 252<br />\
    <img src="styles/legend/Catchment_Tz_2_27.png" /> 256<br />\
    <img src="styles/legend/Catchment_Tz_2_28.png" /> 266<br />\
    <img src="styles/legend/Catchment_Tz_2_29.png" /> 275<br />\
    <img src="styles/legend/Catchment_Tz_2_30.png" /> 278<br />\
    <img src="styles/legend/Catchment_Tz_2_31.png" /> 291<br />\
    <img src="styles/legend/Catchment_Tz_2_32.png" /> 297<br />\
    <img src="styles/legend/Catchment_Tz_2_33.png" /> 303<br />\
    <img src="styles/legend/Catchment_Tz_2_34.png" /> 306<br />\
    <img src="styles/legend/Catchment_Tz_2_35.png" /> 310<br />\
    <img src="styles/legend/Catchment_Tz_2_36.png" /> 312<br />\
    <img src="styles/legend/Catchment_Tz_2_37.png" /> 322<br />\
    <img src="styles/legend/Catchment_Tz_2_38.png" /> 336<br />\
    <img src="styles/legend/Catchment_Tz_2_39.png" /> 340<br />\
    <img src="styles/legend/Catchment_Tz_2_40.png" /> 394<br />\
    <img src="styles/legend/Catchment_Tz_2_41.png" /> 408<br />\
    <img src="styles/legend/Catchment_Tz_2_42.png" /> 411<br />\
    <img src="styles/legend/Catchment_Tz_2_43.png" /> 415<br />\
    <img src="styles/legend/Catchment_Tz_2_44.png" /> 434<br />\
    <img src="styles/legend/Catchment_Tz_2_45.png" /> 439<br />\
    <img src="styles/legend/Catchment_Tz_2_46.png" /> 459<br />\
    <img src="styles/legend/Catchment_Tz_2_47.png" /> 478<br />\
    <img src="styles/legend/Catchment_Tz_2_48.png" /> 480<br />\
    <img src="styles/legend/Catchment_Tz_2_49.png" /> 488<br />\
    <img src="styles/legend/Catchment_Tz_2_50.png" /> 493<br />\
    <img src="styles/legend/Catchment_Tz_2_51.png" /> 501<br />\
    <img src="styles/legend/Catchment_Tz_2_52.png" /> 505<br />\
    <img src="styles/legend/Catchment_Tz_2_53.png" /> 509<br />\
    <img src="styles/legend/Catchment_Tz_2_54.png" /> 516<br />\
    <img src="styles/legend/Catchment_Tz_2_55.png" /> 517<br />\
    <img src="styles/legend/Catchment_Tz_2_56.png" /> 522<br />\
    <img src="styles/legend/Catchment_Tz_2_57.png" /> 527<br />\
    <img src="styles/legend/Catchment_Tz_2_58.png" /> 531<br />\
    <img src="styles/legend/Catchment_Tz_2_59.png" /> 533<br />\
    <img src="styles/legend/Catchment_Tz_2_60.png" /> 534<br />\
    <img src="styles/legend/Catchment_Tz_2_61.png" /> 536<br />\
    <img src="styles/legend/Catchment_Tz_2_62.png" /> 541<br />\
    <img src="styles/legend/Catchment_Tz_2_63.png" /> 560<br />\
    <img src="styles/legend/Catchment_Tz_2_64.png" /> 562<br />\
    <img src="styles/legend/Catchment_Tz_2_65.png" /> 566<br />\
    <img src="styles/legend/Catchment_Tz_2_66.png" /> 571<br />\
    <img src="styles/legend/Catchment_Tz_2_67.png" /> 572<br />\
    <img src="styles/legend/Catchment_Tz_2_68.png" /> 573<br />\
    <img src="styles/legend/Catchment_Tz_2_69.png" /> 575<br />\
    <img src="styles/legend/Catchment_Tz_2_70.png" /> 577<br />\
    <img src="styles/legend/Catchment_Tz_2_71.png" /> 578<br />\
    <img src="styles/legend/Catchment_Tz_2_72.png" /> 579<br />\
    <img src="styles/legend/Catchment_Tz_2_73.png" /> 588<br />\
    <img src="styles/legend/Catchment_Tz_2_74.png" /> 589<br />\
    <img src="styles/legend/Catchment_Tz_2_75.png" /> 590<br />\
    <img src="styles/legend/Catchment_Tz_2_76.png" /> 598<br />\
    <img src="styles/legend/Catchment_Tz_2_77.png" /> 603<br />\
    <img src="styles/legend/Catchment_Tz_2_78.png" /> 604<br />\
    <img src="styles/legend/Catchment_Tz_2_79.png" /> 611<br />\
    <img src="styles/legend/Catchment_Tz_2_80.png" /> 616<br />\
    <img src="styles/legend/Catchment_Tz_2_81.png" /> 620<br />\
    <img src="styles/legend/Catchment_Tz_2_82.png" /> 624<br />\
    <img src="styles/legend/Catchment_Tz_2_83.png" /> 627<br />\
    <img src="styles/legend/Catchment_Tz_2_84.png" /> 628<br />\
    <img src="styles/legend/Catchment_Tz_2_85.png" /> 630<br />\
    <img src="styles/legend/Catchment_Tz_2_86.png" /> 634<br />\
    <img src="styles/legend/Catchment_Tz_2_87.png" /> 637<br />\
    <img src="styles/legend/Catchment_Tz_2_88.png" /> 641<br />\
    <img src="styles/legend/Catchment_Tz_2_89.png" /> 644<br />\
    <img src="styles/legend/Catchment_Tz_2_90.png" /> 648<br />\
    <img src="styles/legend/Catchment_Tz_2_91.png" /> 651<br />\
    <img src="styles/legend/Catchment_Tz_2_92.png" /> 652<br />\
    <img src="styles/legend/Catchment_Tz_2_93.png" /> 659<br />\
    <img src="styles/legend/Catchment_Tz_2_94.png" /> 661<br />\
    <img src="styles/legend/Catchment_Tz_2_95.png" /> 665<br />\
    <img src="styles/legend/Catchment_Tz_2_96.png" /> 667<br />\
    <img src="styles/legend/Catchment_Tz_2_97.png" /> 671<br />\
    <img src="styles/legend/Catchment_Tz_2_98.png" /> 675<br />\
    <img src="styles/legend/Catchment_Tz_2_99.png" /> 678<br />\
    <img src="styles/legend/Catchment_Tz_2_100.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Wards_1.setVisible(true);lyr_Catchment_Tz_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Wards_1,lyr_Catchment_Tz_2];
lyr_Wards_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_1': 'Region', 'NAME_2': 'District', 'NAME_3': 'Ward', });
lyr_Catchment_Tz_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SI': 'CLUSTER_SI', 'ClstPop': 'Population', 'x': 'Longitude', 'y': 'Latitude', 'NAME_1': 'NAME_1', 'ca_id': 'Catchment ID', });
lyr_Wards_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', });
lyr_Catchment_Tz_2.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'CLUSTER_ID': 'Hidden', 'CLUSTER_SI': 'Hidden', 'ClstPop': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'NAME_1': 'Hidden', 'ca_id': 'TextEdit', });
lyr_Wards_1.set('fieldLabels', {'COUNTRY': 'header label', 'NAME_1': 'header label', 'NAME_2': 'header label', 'NAME_3': 'header label', });
lyr_Catchment_Tz_2.set('fieldLabels', {'ClstPop': 'header label', 'x': 'header label', 'y': 'header label', 'ca_id': 'header label', });
lyr_Catchment_Tz_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});