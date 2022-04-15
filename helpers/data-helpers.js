var db = require('../config/connection')
var collection = require('../config/collections')
var objectId = require('mongodb').ObjectId
const { ObjectId } = require('mongodb');
const { response } = require('express');

module.exports = {
    /*Here we add items to list*/
    additem: function (itemData) {
        return new Promise(async (resolve, reject) => {
            /*Date format*/
            let date = new Date()
            itemData.date = await date.toDateString() + ' Time: ' + date.toLocaleTimeString()
            db.get().collection(collection.ITEM_COLLECTION).insertOne(itemData).then((data) => {
                resolve()
            })

        })
    },
    /*Here we get all items in the list*/
    getItemList: () => {
        return new Promise(async (resolve, reject) => {
            let listItem = await db.get().collection(collection.ITEM_COLLECTION).find().toArray()
            resolve(listItem)
        })
    },
}