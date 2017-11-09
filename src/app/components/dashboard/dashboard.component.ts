import { Component, OnInit, Output} from '@angular/core'

import * as Constants from '../../common/constants'
import { Element } from '../../models/product'
import { DataSource } from '@angular/cdk/table'
import { ConfigurationService } from '../../providers/configuration.service'

import { Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

@Component({
  selector:     'app-dashboard',
  templateUrl:  './dashboard.component.html',
  styleUrls:    ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public loading = false;
  private products : any[] = []
  displayedColumns = ['ID', 'Product Name', 'Product Code', 'Status', 'Action']
  dataSource : TableDataSource
  
  constructor(public configurationService:ConfigurationService, 
              private router : Router) {
                this.loading = true
                this.configurationService.getProducts().then((res : any[])=>{ 
                    console.log(res)
                    this.products = res
                    this.dataSource = new TableDataSource(this.products);
                    this.loading = false
            
                }).catch(err => {
                  console.log(err)
                })
              }
  status(statusCode) { 
    if(statusCode === '1')
      return true
    if(statusCode === '0')
      return false
  }

  clickRow(product) {
    this.router.navigate(['./configure', product.product_code])
  }
  ngOnInit() { }
}



export class TableDataSource extends DataSource<any> {

  constructor(private products : any[]) {
    super()
  } 

  connect(): Observable<any[]> {
    return Observable.of(this.products)
  }
  disconnect() {}
}