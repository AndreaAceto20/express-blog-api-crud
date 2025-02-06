const posts = require("../data/postsData")

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);
    if (!post) {

        res.status(404);

        return res.json({
            error: "Non trovato",
            message: "Post non trovato"
        }
        )
    }
    res.json(post);
}

function store(req, res) {
    // const id = parseInt(req.params.id);
    res.send("creazione nuovo post");
}

function update(req, res) {
    res.send("modifica completa del post numero " + req.params.id)
}

function modify(req, res) {
    res.send("modifica parziale del post numero " + req.params.id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {

        res.status(404);

        return res.json({
            error: "Non trovato",
            message: "Post non trovato"
        }
        )
    }

    posts.splice(posts.indexOf(post), 1)

    res.sendStatus(204)
    console.log(posts);


}


module.exports = { index, show, store, update, modify, destroy };