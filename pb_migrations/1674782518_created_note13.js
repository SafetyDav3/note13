migrate((db) => {
  const collection = new Collection({
    "id": "2eycyu1bakl7yb4",
    "created": "2023-01-27 01:21:58.305Z",
    "updated": "2023-01-27 01:21:58.305Z",
    "name": "note13",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2bnbmyvc",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "o73a3vyw",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2eycyu1bakl7yb4");

  return dao.deleteCollection(collection);
})
