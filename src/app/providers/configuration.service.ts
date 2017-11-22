import { Injectable, } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import * as SampleData from  './SampleData';
import * as constants from '../common/constants'

import { Channel } from '../models/channel'

@Injectable()
export class ConfigurationService {

  private api_url:string;
  private cloud_api_url : string;
  private products:any;
  private options : RequestOptions 
  
  constructor(public http : Http) { 
    // this.api_url = "http://ualtpayment.ualink.lk/";
    this.api_url = "https://57a13997.ngrok.io/katana_dat/public/";
  
    this.setHeaders()
  }
  
  setHeaders() : void {
    let authToken    = constants.AUTH_TOKEN 
    let headers      = new Headers({ 'Accept': 'application/json' })

    headers.append('Authorization', `Bearer ${authToken}`)
    headers.append('X-ebao-tenant-id', `DAT`)

    let options = new RequestOptions({ headers: headers })

    this.options = options
  } 
  
  getProducts() {
    let url = this.api_url+'product'
   
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        },err => {
          console.log(err, "Check service")
          return reject()
        })                                                                                                                                                                                                                                                                                                          
    })
  }

  getProduct(code) {
    let url = this.api_url+'get_product_details/'+code
    console.log(url)
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        },err => {
          console.log(err, "Check service")
          return reject()
        })                                                                                                                                                                                                                                                                                                          
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
    let url = this.api_url+'param'
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        },err => {
          console.log(err, "Check service")
          return reject()
        })                                                                                                                                                                                                                                                                                                          
    })
    // return new Promise(resolve=>{
    //   resolve(SampleData.params)
    // })
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

  // setConfiguration(data) { console.log(data)
  //   return new Promise(resolve => {
  //     resolve(true)
  //   })
  // }
  setConfiguration(data:any): Promise<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = this.api_url+'set_product_details'
    let response

    return new Promise((resolve , reject) => {
        // response = this.http.post(url, data, options)
        // console.log(response)
        // resolve(response)
        this.http.post(url, data, options).toPromise().then(res => {
          resolve(res)
        }, err =>{
          reject(err)
        })
    }) 
  }

  getAllNeeds() : Promise<any[]> {

    let options  = this.options
    let endpoint = this.api_url+'need'

    return new Promise(resolve => {
      this.http.get(endpoint, options)
        .map(res => res.json())
          .subscribe(data => {
            resolve(data);
      })                                                                                                                                                                                                                                                                                                             
    })
  }
} 