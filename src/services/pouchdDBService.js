import PouchDB from 'pouchdb'
import kuuid from 'kuuid';
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
export const getAllDocuments = async (type) => {

    /**
     * Get ALL DOCUMENTS
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
    /**
     * db.put  to Create new Documents
     */
    payload._id = kuuid.idr();
    payload.createdAt = new Date();
    payload.updatedAt = new Date();
    const res = await db.put({ ...payload });
    return res;
};

export const updateDocument = async (payload) => {

    /**
     * First I need to get the document by its id, 
     * then Update it with its new values
     */
    payload.updatedAt = new Date();
    const doc = await db.get(payload._id);
    await db.put({ ...doc, payload });

};

export const deleteDocument = async (id) => {
    /**
     * First get the document by its id and then remove the document.
     */
    const doc = await db.get(id);
    await this.db.remove(doc);
};