
// Serverless data (no fetch). Loaded via <script src="data.js"></script>
// Exposes globals: CP_USERS, CP_COMPANIES, CP_TYPES, CP_COLLECTIONS, CP_WEIGHTS, CP_POINTS

var CP_USERS = [
  {"id":1,"name":"Danielle Campbell","email":"danielle@cleanpoint.co","role":"Administrator","status":"Online","avatar":"https://i.pravatar.cc/80?img=1","password":"admin123"},
  {"id":2,"name":"Nicholas Patrick","email":"nicholas@cleanpoint.co","role":"Administrator","status":"Offline","avatar":"https://i.pravatar.cc/80?img=2","password":"admin123"},
  {"id":3,"name":"Cordell Edwards","email":"cordell@cleanpoint.co","role":"Seller","status":"Online","avatar":"https://i.pravatar.cc/80?img=3","password":"seller123"},
  {"id":4,"name":"Derrick Spencer","email":"derrick@cleanpoint.co","role":"Support","status":"Offline","avatar":"https://i.pravatar.cc/80?img=4","password":"support123"},
  {"id":5,"name":"Larissa Burton","email":"larissa@cleanpoint.co","role":"Seller","status":"Online","avatar":"https://i.pravatar.cc/80?img=5","password":"seller123"},
  {"id":6,"name":"Pedro Picapiedra","email":"pedro@cleanpoint.co","role":"Seller","status":"Online","avatar":"https://i.pravatar.cc/80?img=6","password":"seller123"}
];

var CP_COMPANIES = [
  {"id":1,"name":"GreenCycle SAS","specialty":["organic","inorganic"],"localities":["Chapinero","Usaquén"]},
  {"id":2,"name":"Peligrosos Andinos","specialty":["dangerous"],"localities":["Chapinero","Suba"]}
];

var CP_TYPES = [
  {"code":"organic","label":"Organic","subtypes":["FO","FV","Poda"],"points_per_kg":2},
  {"code":"inorganic","label":"Inorganic (recyclable)","subtypes":["Plastics","Cardboard","Glass","Metals"],"points_per_kg":1},
  {"code":"dangerous","label":"Dangerous","subtypes":["Batteries","Electronics","Chemicals"],"points_per_kg":5}
];

var CP_COLLECTIONS = [
  {"id":101,"userId":3,"companyId":1,"type":"organic","date":"2025-10-09","turn":"AM-1","status":"scheduled","locality":"Chapinero"},
  {"id":102,"userId":4,"companyId":1,"type":"inorganic","date":"2025-10-10","turn":"PM-2","status":"scheduled","locality":"Usaquén"},
  {"id":103,"userId":5,"companyId":2,"type":"dangerous","date":"2025-10-20","turn":"AM-3","status":"scheduled","locality":"Suba"}
];

var CP_WEIGHTS = [
  {"collectionId":102,"userId":4,"kg":10,"type":"inorganic","recordedAt":"2025-10-10T16:21:00Z"},
  {"collectionId":101,"userId":3,"kg":40,"type":"organic","recordedAt":"2025-10-09T09:30:00Z"}
];

var CP_POINTS = [
  {"userId":3,"earned":80,"redeemed":10,"history":[{"date":"2025-10-09","action":"earn","value":80,"ref":"collection#101"},{"date":"2025-10-10","action":"redeem","value":10,"ref":"Store: EcoMarket"}]},
  {"userId":4,"earned":10,"redeemed":0,"history":[{"date":"2025-10-10","action":"earn","value":10,"ref":"collection#102"}]}
];
