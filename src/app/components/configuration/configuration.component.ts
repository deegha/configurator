import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms'
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'
import { MdSnackBar } from '@angular/material'
import { Router  } from '@angular/router'
import * as constants from '../../common/constants'

import { GlobalDataService } from '../../common/global-data.service'
import { Type } from '../../common/notification/shared/notification.model'

import { ConfigurationService } from '../../providers/configuration.service'

import { Channel } from '../../models/channel'
import { Configurator } from '../../models/configurarator'

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  animations: [
        trigger('listAnimation', [
          transition('* => *', [
            query(':enter', style({ opacity: 0 }), {optional: true}),
            query(':enter', stagger('300ms', [
              animate('1s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-55%)', offset: 0}),
                style({opacity: .5, transform: 'translateY(15px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
              ]))]), {optional: true}),
            query(':leave', stagger('300ms', [
              animate('1s ease-in', keyframes([
                style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                style({opacity: .5, transform: 'translateY(15px)',  offset: 0.3}),
                style({opacity: 0, transform: 'translateY(-55%)',     offset: 1.0}),
              ]))]), {optional: true})
            
          ])
        ],
      ),
      trigger('explainerAnim', [
        transition('* => *', [
          query('.life-check', style({ opacity: 0, transform: 'translateX(-40px)' }), {optional: true}),
  
          query('.life-check', stagger('100ms', [
            animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
          ]), {optional: true}),
  
          query('.life-check', [
            animate(100, style('*'))
          ], {optional: true})
          
        ])
      ])
    ]
})

export class ConfigurationComponent implements OnInit {
  private id              : number
  private product_code    : string
  private product         : any
  private channels        : Channel[]
  private attachedRiders  : any[] = []
  public  configureForm   : FormGroup
  public  heroForm : FormGroup
  private productLifeRelationship = 1
  
  private main    = true
  private family  = false
  private joint   = false
  public  loading = false

  @Output()
  onConfigurationSuccess: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private route: ActivatedRoute,
              private configurationService : ConfigurationService,
              private formBuilder: FormBuilder,
              private router : Router,
              private snackBar: MdSnackBar,
              private gds :GlobalDataService ) {               
              }
  
  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.product_code  = params['product_code']
      this.configurationService
      .getProduct(params['product_code'])
        .then(response => {
          console.log(response, "configuration component")
          let productResponse = <any>response
          this.product = productResponse     
          this.buildForm(this.product)    
          // this.productLifeRelationship = this.product.productLifeRelationship
          this.initRiderArray(this.product.attachedRiders)
          this.initNeedArray (this.product.needs)
          this.initFeildArray (this.product.extraFeild)
          // this.initProduct(this.product) 
          this.configurationService.getChannels().then(res => {
            this.channels = res
          }).catch()
          this.loading = false
      }).catch(err => {
        this.snackBar.open("No product found for this product ID", "No product", {
          duration: 4000,
        });
        console.log("No Product found")
      })
    }, err => {
      this.loading = false;
    });
  }
 
  onSubmit(post) {
    console.log(post)
    this.configurationService.setConfiguration(JSON.stringify(post))
  }

  initRiderArray(riders) {
    riders.map(rider => {
      const control = <FormArray>this.configureForm.controls['attachedRiders'];
      const riderCtrl = this.initRelationship(rider);
      control.push(riderCtrl);
    })
  }

  initNeedArray (needs) {
    needs.map(need => {
      const control = <FormArray>this.configureForm.controls['needs'];
      const needCtrl = this.initNeeds(need)
      control.push(needCtrl);
    })
  }

  initNeeds(need): FormGroup {
    return this.formBuilder.group({
      id : [need.id, ""],
      lable : [need.lable, ""],
      value : [need.value, ""],
      need : [need.status, ""]
    });
  }

  initRelationship(rider) : FormGroup {
    return this.formBuilder.group({
      productCode : [rider.productCode, ""],
      mainLife  : [rider.mainLife, ""],
      spouse    : [rider.spouse, ""],
      child     : [rider.child, ""],
      join      : [rider.join, ""],
      sumAssured: [rider.sumAssured , ""],
      default   : [rider.default, ""],
    })
  }

  initFeildArray (feilds) {
    feilds.map(feild => {
      const control = <FormArray>this.configureForm.controls['extraFeild'];
      const feildCtrl = this.initFeild(feild);
      control.push(feildCtrl);
    })
  }

  initFeild(feild=null): FormGroup {
    return this.formBuilder.group({
      param_id : [(feild)?feild.param_id: "", Validators.required],
      coloumn  : [(feild)?feild.coloumn: "", Validators.required],
      headings : [(feild)?feild.headings: "", Validators.required],
      feildTab : [(feild)?feild.feildTab: "", ]
    });
  }

  // initProduct(product) : void {

  //   // const pd = this.formBuilder.group({
  //   //   productLifeRelationship: [product.productLifeRelationship, Validators.required],
  //   //   channel: [product.channel, Validators.required],
  //   // });
  //   const control = <FormArray>this.configureForm.controls['productDetails']
  //   const pd = this.createProductDetails(product)
  //   control.push(pd)
  // }

  // createProductDetails(product) : FormGroup {
  //   return this.formBuilder.group({
  //     productLifeRelationship: [product.productLifeRelationship, Validators.required],
  //     channel: [product.channel, Validators.required],
  //   });
  // } 


  addFeild() {
    const control = <FormArray>this.configureForm.controls['extraFeild'];
    const feildCtrl = this.initFeild();
    control.push(feildCtrl);
    console.log(control)
  }

  removeFeild(i: number) {
    const control = <FormArray>this.configureForm.controls['extraFeild'];
    control.removeAt(i);
  }

  /**
   * 
   * Builds the master form.
   */
  private buildForm(product): void {
    this.configureForm = this.formBuilder.group({
      productLifeRelationship: [product.productLifeRelationship, Validators.required],
      channel: [product.channel, Validators.required],
      extraFeild: this.formBuilder.array([]),
      attachedRiders :  this.formBuilder.array([ ]),
      needs :  this.formBuilder.array([ ]),
    });
   
     console.log(this.configureForm)
  }  
}