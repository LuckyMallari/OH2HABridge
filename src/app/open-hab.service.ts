import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OpenHabService {

  private static http: Http;
  constructor(private _http: Http) { 
    OpenHabService.http = _http;
  }


  public static getItems(url: String, items?: String[]): Promise<String> {
    // Get from OpenHab url
    return OpenHabService.http.get(OpenHabService.trimmer(url, "/") + "/rest/items?recursive=true")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      .toPromise();
  }

  public static trimmer(s, mask) {
    while (~mask.indexOf(s[0])) {
        s = s.slice(1);
    }
    while (~mask.indexOf(s[s.length - 1])) {
        s = s.slice(0, -1);
    }
    return s;
}

}
