import PouchDB from 'pouchdb'
import PouchDBFind from 'pouchdb-find';
import kuuid from 'kuuid';
PouchDB.plugin(PouchDBFind);

const db = new PouchDB('nyumbudata');
const remote = new PouchDB('http://localhost:5984/nyumbudata');

export const syncData = async (options) => {
    try {
        const opts = { live: true, retry: true };
        await db.sync(remote, [opts]).on('change', function (info) {
            console.log('something changed ', info)
        }).on('complete', function () {
            console.log('sync completed')
        }).on('error', function (err) {
            console.log('something happend while sync ', err)
        });
        return { status: 'success' }
    } catch (err) {
        console.log(err)
        return err;
    }
}
export const getAllDocumentsByType = async (type) => {
    await db.createIndex({
        index: {
          fields: ['type']
        }
      });
    /**
     * Get ALL DOCUMENTS
     */
    let allDocuments = await db.find({
        selector: { type: { $eq: type } }
    });
    return allDocuments.docs;
};


export const getAllSchemaDocumentsByFormId = async (formId) => {
    console.log(formId);
    /**
     * Get ALL SCHEMA DOCUMENTS BY 
     */
    let allDocuments = await db.allDocs({ include_docs: true });

    /**BIDERECTIONAL REPLICATION Moved to user triggered
     * This is the main step to make the synchronization process possible
     */
    return allDocuments.rows;
};

export const getDocumentById = async (id) => {
    const doc = await db.get(id);
    return doc;
};

export const createDocument = async (payload) => {
    console.log('Save',payload);
    /**
     * db.put  to Create new Documents
     */
    delete payload._id;
    delete payload._rev;
    payload._id = kuuid.idr();
    payload.createdAt = new Date();
    payload.updatedAt = new Date();
    const res = await db.put({ ...payload });
    const doc = await db.get(res.id);
    return doc;
};

export const updateDocument = async (payload) => {

    /**
     * First I need to get the document by its id, 
     * then Update it with its new values
     */
    payload.updatedAt = new Date();
    const doc = await db.get(payload._id);
    const res = await db.put({ ...doc, ...payload });
    const updatedDoc = await db.get(res.id);
    return updatedDoc;
};

export const deleteDocument = async (id) => {
    /**
     * First get the document by its id and then remove the document.
     */
    const doc = await db.get(id);
    await this.db.remove(doc);
};