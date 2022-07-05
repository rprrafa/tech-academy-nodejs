import express from 'express';
import * as ArticleService from './ArticleService.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    const articles = ArticleService.getArticles();
    response.render('pages/home', { title: 'EJS', articles });
});

app.get('/artigos/:articleId', (request, response) => {
    const articleId = request.params.articleId;
    const article = ArticleService.getArticleById(articleId);
    const title = (article) ? article.title : 'Artigo não encontrado';
    response.render('pages/artigos', { title, article })
});