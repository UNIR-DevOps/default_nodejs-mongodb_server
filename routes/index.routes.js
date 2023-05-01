let userRoutes = require("./users.routes");

module.exports.load = (app, env)  => {
    app.get('/', async (req, res) => {
        try {
            res.send(`Bienvenido al servicio de ${env.OWNER}`);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.use("/users", userRoutes);
}