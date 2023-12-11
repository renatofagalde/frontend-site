export class Site{
    get title(): string | undefined {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
    private _title: string | undefined;
}