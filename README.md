# News API

## Overview

This is a simple API built with Node.js that interacts with the GNews API for fetching news articles. It supports fetching news articles, finding articles by specific titles or authors, and searching by keywords. The API also includes a caching mechanism to reduce redundant requests.

## Prerequisites

- Node.js
- npm

## Setup

1. Clone the repository:
   git clone 

2. Navigate to the project directory:
   cd news-api

3. Install the dependencies:
   npm install

4. Create a .env file in the root directory and add your GNews API key:
   API_KEY=your_gnews_api_key
   PORT=3000
   CACHE_TTL=3600

5. Running the Application
   To start the application, run:
   npm start
   The server will start on the port specified in your .env file (default: 3000).

## API Endpoints
GET /api/articles: Fetch news articles.
Query parameters:
q: Keyword to search for.
title: Title of the article.
author: Author of the article.
category: Category of the article.
lang: Language of the article.
max: Number of articles to fetch.
Example
To fetch 5 articles about "technology":

GET /api/articles?q=technology&max=5