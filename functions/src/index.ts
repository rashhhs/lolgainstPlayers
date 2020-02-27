import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from "body-parser";
import {famous_players} from "./config/Players";

const app = express();
const main = express();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const Players = functions.https.onRequest(main);

app.get('/players', (req, res) => {
   res.status(200).send(famous_players);
});