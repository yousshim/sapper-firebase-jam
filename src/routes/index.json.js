import admin from "firebase-admin"

admin.initializeApp({
    credential: admin.credential.applicationDefault()
})

const db = admin.firestore()

export function get(req, res) {
    db.collection("categories").get()
        .then(snapshot => {
            const cats = []
            snapshot.forEach(doc => {
                cats.push(doc.data())
            })
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({ categories: cats }))
        })
        .catch(err => {
            console.log(err)
        })
}