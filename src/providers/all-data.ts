import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AllData {
  public kandungan: any;

    constructor(public http: Http) { }

    public getJSONDataAsync(filePath: string) : Promise<any> {
	    return new Promise((resolve, reject) => {
	      this.http.get(filePath)
	        .subscribe(
	          res => {
	            if (!res.ok) {
	              reject("Failed with status: " + res.status + "\nTrying to find fil at " + filePath);
	            }

	            var jsonRes = res.json();
	            resolve(jsonRes);
	          }
	        );
	    }).catch((reason) => this.handleError(reason));
	  }

	public getKandungan() : Promise<any> {
	    return new Promise((resolve, reject) => {
	      this.http.get("./assets/data/kandungan.json")
	        .subscribe(
	          res => {
	            if (!res.ok) {
	              reject("Failed with status: " + res.status);
	            }

	            var jsonRes = res.json();
	            this.kandungan = res.json();
	            resolve(jsonRes);
	          }
	        );
	    }).catch((reason) => this.handleError(reason));
	}

	private handleError (error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
		  const body = error.json() || '';
		  const err = JSON.stringify(body);
		  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
		  errMsg = error.message ? error.message : error.toString();
		}
		return Observable.throw(errMsg);
	}

}