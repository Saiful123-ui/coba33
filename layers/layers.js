ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([101.347812, -1.968268, 101.361379, -1.961013]);
var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_PipaEksisting_1 = new ol.format.GeoJSON();
var features_PipaEksisting_1 = format_PipaEksisting_1.readFeatures(json_PipaEksisting_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PipaEksisting_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipaEksisting_1.addFeatures(features_PipaEksisting_1);
var lyr_PipaEksisting_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PipaEksisting_1, 
                style: style_PipaEksisting_1,
                popuplayertitle: "Pipa Eksisting",
                interactive: true,
                title: '<img src="styles/legend/PipaEksisting_1.png" /> Pipa Eksisting'
            });
var format_BANGUNAN_PELANGGAN_2 = new ol.format.GeoJSON();
var features_BANGUNAN_PELANGGAN_2 = format_BANGUNAN_PELANGGAN_2.readFeatures(json_BANGUNAN_PELANGGAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BANGUNAN_PELANGGAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PELANGGAN_2.addFeatures(features_BANGUNAN_PELANGGAN_2);
var lyr_BANGUNAN_PELANGGAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PELANGGAN_2, 
                style: style_BANGUNAN_PELANGGAN_2,
                popuplayertitle: "BANGUNAN_PELANGGAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PELANGGAN_2.png" /> BANGUNAN_PELANGGAN'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_PipaEksisting_1.setVisible(true);lyr_BANGUNAN_PELANGGAN_2.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_PipaEksisting_1,lyr_BANGUNAN_PELANGGAN_2];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PipaEksisting_1.set('fieldAliases', {'id': 'id', 'Diameter': 'Diameter', 'Jenis': 'Jenis', 'Length': 'Length', 'Kedalaman': 'Kedalaman', 'Tahun Pasa': 'Tahun Pasa', 'Pelaksana': 'Pelaksana', 'Sumber Dan': 'Sumber Dan', 'Jenis Jari': 'Jenis Jari', 'Nomor Asb': 'Nomor Asb', 'Nomor SPT': 'Nomor SPT', 'Foto Pipa': 'Foto Pipa', 'Foto Konek': 'Foto Konek', 'Penggambar': 'Penggambar', 'LAYER': 'LAYER', });
lyr_BANGUNAN_PELANGGAN_2.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PipaEksisting_1.set('fieldImages', {'id': 'TextEdit', 'Diameter': 'TextEdit', 'Jenis': 'TextEdit', 'Length': 'TextEdit', 'Kedalaman': 'TextEdit', 'Tahun Pasa': 'Range', 'Pelaksana': 'TextEdit', 'Sumber Dan': 'TextEdit', 'Jenis Jari': 'TextEdit', 'Nomor Asb': 'TextEdit', 'Nomor SPT': 'TextEdit', 'Foto Pipa': 'TextEdit', 'Foto Konek': 'TextEdit', 'Penggambar': 'TextEdit', 'LAYER': 'TextEdit', });
lyr_BANGUNAN_PELANGGAN_2.set('fieldImages', {'DATA UMUM': '', 'ID_2': '', 'Nama Pada': '', 'Nama Pemil': '', 'Nama Pengh': '', 'Alamat': '', 'Kecamatan': '', 'Telp/Hp': '', 'Nomor Samb': '', 'Kondisi Ba': '', 'Jenis Bang': '', 'Status Ban': '', 'DATA TEKNI': '', 'Meter Air': '', 'Posisi Met': '', 'Kondisi Me': '', 'Merk Meter': '', 'Segel Mete': '', 'Box Meter': '', 'Jenis Pipa': '', 'Diameter P': '', 'Koneksi da': '', 'Kondisi Pi': '', 'DATA SOSIA': '', 'Jumlah Pen': '', 'Sumber Air': '', 'Keluhan Pe': '', 'Catatan': '', 'Y': '', 'X': '', 'Photo Ruma': '', 'Photo Mete': '', 'Koord.Lok': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_PipaEksisting_1.set('fieldLabels', {'id': 'inline label - always visible', 'Diameter': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Length': 'inline label - always visible', 'Kedalaman': 'inline label - always visible', 'Tahun Pasa': 'inline label - always visible', 'Pelaksana': 'inline label - always visible', 'Sumber Dan': 'inline label - always visible', 'Jenis Jari': 'inline label - always visible', 'Nomor Asb': 'inline label - always visible', 'Nomor SPT': 'inline label - always visible', 'Foto Pipa': 'inline label - always visible', 'Foto Konek': 'inline label - always visible', 'Penggambar': 'inline label - always visible', 'LAYER': 'inline label - always visible', });
lyr_BANGUNAN_PELANGGAN_2.set('fieldLabels', {'DATA UMUM': 'inline label - always visible', 'ID_2': 'inline label - always visible', 'Nama Pada': 'inline label - always visible', 'Nama Pemil': 'inline label - always visible', 'Nama Pengh': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Telp/Hp': 'inline label - visible with data', 'Nomor Samb': 'inline label - always visible', 'Kondisi Ba': 'inline label - always visible', 'Jenis Bang': 'inline label - always visible', 'Status Ban': 'inline label - always visible', 'DATA TEKNI': 'inline label - always visible', 'Meter Air': 'inline label - always visible', 'Posisi Met': 'inline label - always visible', 'Kondisi Me': 'inline label - always visible', 'Merk Meter': 'inline label - always visible', 'Segel Mete': 'inline label - always visible', 'Box Meter': 'inline label - always visible', 'Jenis Pipa': 'inline label - always visible', 'Diameter P': 'inline label - always visible', 'Koneksi da': 'inline label - always visible', 'Kondisi Pi': 'inline label - always visible', 'DATA SOSIA': 'inline label - always visible', 'Jumlah Pen': 'inline label - always visible', 'Sumber Air': 'inline label - always visible', 'Keluhan Pe': 'inline label - always visible', 'Catatan': 'inline label - always visible', 'Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Photo Ruma': 'inline label - always visible', 'Photo Mete': 'inline label - always visible', 'Koord.Lok': 'inline label - always visible', });
lyr_BANGUNAN_PELANGGAN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});