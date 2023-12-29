export class Site{
    #title: string;
    #bannerTitle: string;
    #bannerTitleSlogan: string;
    #secao01Title: string;
    #secao01TitleDescription : string;


    constructor(title: string, bannerTitle: string, bannerTitleSlogan: string, secao01Title: string, secao01TitleDescription: string) {
        this.#title = title;
        this.#bannerTitle = bannerTitle;
        this.#bannerTitleSlogan = bannerTitleSlogan;
        this.#secao01Title = secao01Title;
        this.#secao01TitleDescription = secao01TitleDescription;
    }


    get title(): string {
        return this.#title;
    }

    get bannerTitle(): string {
        return this.#bannerTitle;
    }

    get bannerTitleSlogan(): string {
        return this.#bannerTitleSlogan;
    }

    get secao01Title(): string {
        return this.#secao01Title;
    }

    get secao01TitleDescription(): string {
        return this.#secao01TitleDescription;
    }
}