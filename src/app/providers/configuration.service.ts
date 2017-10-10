import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import * as SampleData from  './SampleData';
import * as constants from '../common/constants'

import { Channel } from '../models/channel'

@Injectable()
export class ConfigurationService {

  api_url:string;
  cloud_api_url : string;
  products:any;
  
  constructor(public http : Http) { 
    this.api_url = "http://33c8c4d9.ngrok.io/katana_dat/public/product_list";
    this.cloud_api_url = "https://sandbox.gw.ebaocloud.com.cn/eBao/1.0"
  }
  
  getProducts() {
    // return new Promise(resolve => {
      // this.http.get(this.api_url)
      //   .map(res => res.json())
      //   .subscribe(data => {
      //     this.products = data;
      //     resolve(this.products);
      //   });                                                                                                                                                                                                                                                                                                             
    // });

    return new Promise(resolve=>{
      resolve(SampleData.sampleData);
    })
  }

  getProduct(code) {
    // let authToken    = constants.AUTH_TOKEN 
    // let headers      = new Headers({ 'Accept': 'application/json' })
    // let product_url  = this.cloud_api_url+'/pd/products/'+code;   
    
    // headers.append('Authorization', `Bearer ${authToken}`)
    // headers.append('X-ebao-tenant-id', `DAT`)

    // let options = new RequestOptions({ headers: headers })

    // return new Promise(resolve => {
    //   this.http.get(product_url, options)
    //     .map(res => res.json())
    //       .subscribe(data => {
    //         resolve(data);
    //   })                                                                                                                                                                                                                                                                                                             
    // })

    return new Promise(resolve=>{
      resolve(SampleData.product);
    })
  }

  getChannels() : Promise<Channel[]> {
    return new Promise(resolve => {
      resolve(SampleData.channels)
    })
  }

  getColumns()  {
    return new Promise(resolve=>{
      resolve(SampleData.columns)
    })
  }

  getParams()  { 
    return new Promise(resolve=>{
      resolve(SampleData.params)
    })
  }

  getHeadings(col) {
    return new Promise(resolve=>{
      resolve(SampleData.heading)
    })
  }

  getLifeRelation() {
    return new Promise(resolve=>{
      resolve(SampleData.lifeRelation)
    })
  }

  setConfiguration(data) {
    return new Promise(resolve => {
      resolve(true)
    })
  }
}