let activeIndex = 0;
const articles = document.getElementsByTagName("article")
const totalArticles = articles.length - 1;
const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= (totalArticles) ? activeIndex + 1 : 0;
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`), nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentArticle.dataset.status = "after" 
    nextArticle.dataset.status = "on";
    activeIndex = nextIndex;
}

const handleLeftClick = () => {
    const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : totalArticles - 1;
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`), prevArticle = document.querySelector(`[data-index="${prevIndex}"]`);
    currentArticle.dataset.status = "before";
    prevArticle.dataset.status = "on";
    activeIndex = prevIndex;
}