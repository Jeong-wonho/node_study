const express = require('express');
const app = express();
const axisos = require('axios');
const cheerio = require('cheerio');
const PORT = 12010
const puppeteer = require('puppeteer');
const cors = require('cors')

app.use(cors());
const vo = require('vo');