let activeIndex = 0;
const articles = document.getElementsByTagName("article")
const totalArticles = articles.length - 1;
const handleRightClick = () => {
    // increase the next index by 1, moving the article rightwards
    const nextIndex = activeIndex + 1 <= (totalArticles) ? activeIndex + 1 : 0;
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`), nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    

    // active article becomes new 'after'
    currentArticle.dataset.status = "after" 

    // next article comes on-screen (active)
    nextArticle.dataset.status = "on";
    activeIndex = nextIndex;
}

const handleLeftClick = () => {
    // decrease the current index by 1, moving the article leftwards
    const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : totalArticles;
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`), prevArticle = document.querySelector(`[data-index="${prevIndex}"]`);

    // active article becomes new 'after'
    currentArticle.dataset.status = "after";

    // previous article comes on-screen (active)
    prevArticle.dataset.status = "on";
    activeIndex = prevIndex;
}