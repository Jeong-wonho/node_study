const express = require('express');
const path = require('path');
const app = express();
const PORT = 12010;

const _path = path.join(__dirname, './dist');
app.use(express.static(_path));
app.listen(PORT, () => console.log(`portfolio server start`));