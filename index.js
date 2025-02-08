const express = require(`express`);
const app = express();
const port = 3000;
const postsRouter = require("./router/posts")

app.use(express.static('public'));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});


app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log(`La porta è ${port}`);
});

