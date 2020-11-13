export class SearchDataModel {

  constructor(
    private q: string,
    private qInTitle: string,
    private sources: string,
    private from: string,
    private to: string
  ) { }

  getSearchUrl(): string {
    const queryArray: string[] = [];
    Object.keys(this).forEach((key: string) => {
      if (this[key] !== '') {
        const query = key + '=' + this[key];
        queryArray.push(query);
      }
    });
    const searchUrl: string = 'every-news?' + queryArray.join('&');
    return searchUrl;
  }

}
