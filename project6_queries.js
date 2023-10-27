// find, select, project, and1, sort1
printjson("****************************************************************");
printjson("1) Finds documents with qualityControlProcess = 'V020' and callLetters = 'PHRB' and returns their id, elevation, and type. The found documents are returned in order of id.");
printjson(db.data.find({qualityControlProcess: 'V020', callLetters:"PHRB"}, {_id:1, elevation:1, type:1 }).sort({_id:1}))

// find, select, project, or1, range1 (>0 and <5), embedded field 1lvl deep1 (value), elem. array1 (sections.2), sort2 
printjson("****************************************************************");
printjson("2) Finds 10 documents with in the sections array with the 3rd element matching 'MD1', or finds documents with dewPoint value greater than 0 and less than 5. Returns the documents' id, dewPoint value, and sections sorted by callLetters.");
printjson(db.data.find({$or: [{'sections.2': "MD1"}, {'dewPoint.value': {$gt: 0, $lt: 5}}]}, {_id: 1, 'dewPoint.value': 1, 'sections': 1}).sort({callLetters: 1}).limit(10));

// find, select, project, embedded field 2lvl deep1 (opaque), and2, elem. array2 (section.1), sort3
printjson("****************************************************************");
printjson("3) Finds 10 documents with skyConditionObservation.totalCoverage.opaque equal to '99' and sections array with 2nd element matching 'AY1'.Returns the documents' id, skyConditionObservation.totalCoverage.opaque, sections array, and airTemperature value. The found documents are sorted by airTemperature value.");
printjson(db.data.find({'skyConditionObservation.totalCoverage.opaque':'99', 'sections.1': "AY1"}, {_id: 1, 'skyConditionObservation.totalCoverage.opaque': 1, 'sections': 1,'airTemperature.value':1}).sort({'airTemperature.value': 1}).limit(10))

// find, select, project, embedded field 2lvl deep2 (pastweathobs.period.value), range2 (>1 and <6)
printjson("****************************************************************");
printjson("4) Finds 10 documents with pastWeatherObservationManual.period.value between 1 and 6. Returns their id and presentWeatherObservationManual quality.");
printjson(db.data.find({'pastWeatherObservationManual': {$elemMatch: {'period.value': {$gt: 1, $lt: 6}}}}, {_id: 1, 'pastWeatherObservationManual.period.value': 1}).limit(10));

// find, select, project, embedded field 1lvl deep2
printjson("****************************************************************");
printjson("5) Finds 10 documents with presentWeatherObservationManual.quality equal '1'. Returns their id and presentWeatherObservationManual quality.");
printjson(db.data.find({'presentWeatherObservationManual': {$elemMatch: {quality: "1"}}}, {_id: 1, 'presentWeatherObservationManual.quality': 1, 'dewPoint.quality': 1}).limit(10));

// find, select, project, sort4
printjson("****************************************************************");
printjson("6) Finds 10 documents with position type not 'FM-13'. Returns id and position type sorted by atmostphericPressureChange.tendency.code.");
printjson(db.data.find({type: {$ne: "FM-13"}}, {id: 1, type: 1, 'atmosphericPressureChange.tendency.code':1 }).sort('atmosphericPressureChange.tendency.code').limit(10))

//find, select, project, or2, embedded field 1lvl deep3 + 4, sort5
printjson("****************************************************************");
printjson("7) Find 10 documents with airTemperature value = 27.5 or pressure not 9999.9. Returns airTemperature value and pressure value sorted by airTemperature value.");
printjson(db.data.find({$or: [{'airTemperature.value': 27.5}, {'pressure.value': {$ne: 9999.9}}]}, {'airTemperature.value': 1, 'pressure.value': 1}).sort({'airTemperature.value': 1}).limit(10));

// find, select, project, embedded object in array match1
// printjson("****************************************************************");
printjson("8) Finds 10 documents with the an object element of condition '02' and quality '1' in the presentWeatherObservationManual array.");
printjson(db.data.find({'presentWeatherObservationManual': {$elemMatch: {condition:'02', quality: '1'}}}, {_id:1, 'presentWeatherObservationManual':1}).limit(10));

find, select, project, and3
printjson("****************************************************************");
printjson("9) Finds 10 documents with precipitationEstimatedObservation.discrepancy = '2' and visibility.distance.quality = '1'. Returns document id, precipitationEstimatedObservation.discrepancy, and visibility.distance.quality. ");
printjson(db.data.find({'precipitationEstimatedObservation.discrepancy': '2', 'visibility.distance.quality': '1' }, {_id:1, 'precipitationEstimatedObservation.discrepancy': 1, 'visibility.distance.quality': 1}).limit(10));

// find select, project, range3, sort6
printjson("****************************************************************");
printjson("10) Finds 10 documents with visibility.distance value greater than 10,000 and less than 20,000. Returns document id and visibility.distance value.");
printjson(db.data.find({'visibility.distance.value': {$gt: 10000, $lt: 20000}}, {_id: 1, 'visibility.distance.value': 1}).sort({'visibility.distance.value':1}).limit(10));