import Server from './Server';
import config from './config/config';
import Database from './libs/Database';

const db = new Database(config.mongoUri);

db.open()
    .then(() => {
        const server = new Server();
        server.init();
        server.application.listen(config.port, () => {
            console.log("Server started listening on port " + config.port);
        });
    })
    .catch(err => {
        console.log(":::::: GOT ERROR IN CREATING CONNECTION WITH DB ::::::", err);
    });
