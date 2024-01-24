class RelocatePage {

    get news() { return $('a[href="https://dou.ua/lenta/news/?from=fpnews"]') }
    get blogs() { return $('a[href="https://relocate.dou.ua/blogs/?from=fpcol"]')}
    get PopularOnTheForum() { return $('a[href="https://dou.ua/forums/?from=fptopics"]')}
    
}

export default new RelocatePage()
