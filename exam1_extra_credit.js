// doc insertOne 1
printjson("****************************************************************");
printjson("1) Insert one document with position.elevation 9999, position.callLetters 'NK3S', st: x+43500-038420, dewPoint value 999.9, quality '7', airTemperature value 240.5, quality'6', pressure value 9999.9 quality '5'.");
doc1 = {st: "x+43500-038420", position: {elevation: 999.9, callLetters: "NK3S"}, dewPoint: {value: 999.9, quality: '7'}, airTemperature:{value:240.5, quality:'6'}, pressure:{value:9999.9, quality:'5'}};
printjson(db.data.insertOne(doc1));

// doc insertMany 1
printjson("****************************************************************");
printjson("2) Insert two documents with position.elevation 9999, position.callLetters 'NK3S', dewPoint value 999.9, quality '7', airTemperature value 240.5, quality'6', pressure value 9999.9 quality '5', but different wind speed, direction, type, and qualities.");
doc2 = {position: {elevation: 999.9, callLetters: "NK3S"}, dewPoint: {value: 999.9, quality: '7'}, airTemperature:{value:240.5, quality:'6'}, pressure:{value:9999.9, quality:'5'}, wind: {direction: {angle: 500, quality:"7"}, type: "6", speed: {rate: 400.9, quality: "4"}}};
doc3 = {position: {elevation: 999.9, callLetters: "NK3S"}, dewPoint: {value: 999.9, quality: '7'}, airTemperature:{value:240.5, quality:'6'}, pressure:{value:9999.9, quality:'5'}, wind: {direction: {angle: 322, qality:"7"}, type: "2", speed: {rate: 122.3, quality: "8"}}};
printjson(db.data.insertMany([doc2, doc3]));

// doc insertMany 2
printjson("****************************************************************");
printjson("3) Insert three documents with position.elevation 9999, position.callLetters 'NK3S', dewPoint value 999.9, quality '7', airTemperature value 240.5, quality'6', pressure value 9999.9 quality '5', same wind conditions but different sections.");
doc4 = {position: {elevation: 999.9, callLetters: "NK3S"}, dewPoint: {value: 999.9, quality: '7'}, airTemperature:{value:240.5, quality:'6'}, pressure:{value:9999.9, quality:'5'}, wind: {direction: {angle: 500, quality:"7"}, type: "6", speed: {rate: 400.9, quality: "4"}}, sections: ["AG1", "AY1"]};
doc5 = {position: {elevation: 999.9, callLetters: "NK3S"}, dewPoint: {value: 999.9, quality: '7'}, airTemperature:{value:240.5, quality:'6'}, pressure:{value:9999.9, quality:'5'}, wind: {direction: {angle: 500, quality:"7"}, type: "6", speed: {rate: 400.9, quality: "4"}}, sections: ["AG1", "AY1", "GF1"]};
doc6 = {position: {elevation: 999.9, callLetters: "NK3S"}, dewPoint: {value: 999.9, quality: '7'}, airTemperature:{value:240.5, quality:'6'}, pressure:{value:9999.9, quality:'5'}, wind: {direction: {angle: 500, quality:"7"}, type: "6", speed: {rate: 400.9, quality: "4"}}, sections: ["AG1"]};
printjson(db.data.insertMany([doc4, doc5, doc6]));

// doc updateOne 1
printjson("****************************************************************");
printjson("4) Updates document with _id :ObjectId('5553a998e4b02cf7151190cb') to add field rain:'False'.");
field = {rain: "false"};
printjson(db.data.updateOne({_id :ObjectId('5553a998e4b02cf7151190cb')}, {"$addToSet": field}))

// doc updateOne and push 1
printjson("****************************************************************");
printjson("5) Updates document with _id :ObjectId('5553a998e4b02cf7151190cb') to add 'MW2' as the 5th value in the sections array, index value 4.");
printjson(db.data.updateOne({_id :ObjectId('5553a998e4b02cf7151190cb')}, {"$push": {sections: "MW2"}}))

// updateMany 1
printjson("****************************************************************");
printjson("6) Updates documents with dewPoint value of 999.9 to change dewPoint value to 10.");
printjson(db.data.updateMany({'dewPoint.value': 999.9}, {$set: {'dewPoint.value': 10}}))

// updateMany 2
printjson("****************************************************************");
printjson("7) Updates documents with airTemperature value of 240.5 to change airTemperature value to 150.");
printjson(db.data.updateOne({'airTemperature.value': 240.5}, {$set: {'airTemperature.value': 150}}))

// deleteOne 1
printjson("****************************************************************");
printjson("8) Deletes document with _id :ObjectId('653b0a55508e04632047c290').");
printjson(db.data.deleteOne({_id :ObjectId('653b0a55508e04632047c290')}))

// deleteMany 1
printjson("****************************************************************");
printjson("9) Deletes documents with pressure value of 9999.9.");
printjson(db.data.deleteMany({'pressure.value': 9999.9}))

// deleteMany 2
printjson("****************************************************************");
printjson("10) Deletes documents with dewPoint quality of '3'.");
printjson(db.data.deleteMany({'dewPoint.quality': '3'}))

