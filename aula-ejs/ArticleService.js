const articles = [
    {
        id: 1,
        title: 'Healthtech de “telemedicina aumentada” chega ao Brasil',
        description: 'A telemedicina por si só deixou de ser uma grande novidade no mundo de saúde – e já foi até regulamentada no Brasil. Agora, depois de 2 anos de pandemia, startups e empresas do setor precisam buscar novas ferramentas para melhorar o acesso e a experiência do paciente e facilitar o trabalho das instituições de saúde.'
    },
    {
        id: 2,
        title: 'Tesla: entregas caem com lockdown na China',
        description: 'A Tesla entregou quase 18% menos veículos elétricos no segundo trimestre em relação ao trimestre anterior. A empresa alega que a paralisação na China relacionada à Covid-19 interrompeu a produção. No Bom Dia Califórnia de hoje, você confere a análise deste cenário e as possíveis apostas'
    }
];

function getArticles() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(article => {
        return article.id === Number(articleId)
    });
}

export { getArticles, getArticleById };