import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms'
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'
import { MdDialog } from '@angular/material'
import { Router  } from '@angular/router'

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
              public dialog: MdDialog,
              private router : Router,
              private gds :GlobalDataService ) {
                this.loading = true;
                this.route.params.subscribe(params => {
                  this.product_code  = params['product_code']
                  this.configurationService
                  .getProduct(params['product_code'])
                    .then(response => {
                      this.buildForm();

                      let productResponse = <any>response
                      this.product = productResponse
                      console.log()
                      this.initRiderArray(this.product.attachedRiders);
                     
                      this.configurationService.getChannels().then(res => {
                        this.channels = res
                      }).catch()
                      this.configurationService.getAllNeeds().then(response => {
                          response.map(need => {
                            const control = <FormArray>this.configureForm.controls['needs'];
                            const needCtrl = this.initNeeds(need)
                            control.push(needCtrl);
                          })
                      })
                      this.loading = false
                  })
                }, err => {
                  this.loading = false;
                });
                
              }
  
  ngOnInit() { }

  onSubmit(post) {
    console.log(JSON.stringify(post))
    this.configurationService.setConfiguration(post)
  }

  initRiderArray(riders) {
    riders.map(rider => {
      const control = <FormArray>this.configureForm.controls['attachedRiders'];
      const riderCtrl = this.initRelationship(rider.riderProductCode);
      control.push(riderCtrl);
    })
  }

  initNeeds(need): FormGroup {
    return this.formBuilder.group({
      id : [need.id, ""],
      lable : [need.lable, ""],
      value : [need.value, ""],
      need : [false, ""]
    });
  }

  initRelationship(productName) : FormGroup {
    return this.formBuilder.group({
      productCode : [productName, ""],
      mainLife  : [true, ""],
      spouse    : [false, ""],
      child     : [false, ""],
      join      : [false, ""],
      sumAssured: [, ""],
      default   : [false, ""],
    })
  }

  initFeild(): FormGroup {
    return this.formBuilder.group({
      param_id : ['', Validators.required],
      coloumn  : ['', Validators.required],
      headings : ['', Validators.required],
      feildTab : ['1', ]
    });
  }

  addFeild() {
    const control = <FormArray>this.configureForm.controls['extraFeild'];
    const feildCtrl = this.initFeild();
    control.push(feildCtrl);
  }

  removeFeild(i: number) {
    const control = <FormArray>this.configureForm.controls['extraFeild'];
    control.removeAt(i);
  }

  /**
   * 
   * Builds the master form.
   */
  private buildForm(): void {
    
    this.configureForm = this.formBuilder.group({
      productLifeRelationship: ['1', Validators.required],
      channel: ['', Validators.required],
      extraFeild: this.formBuilder.array([]),
      attachedRiders :  this.formBuilder.array([ ]),
      needs :  this.formBuilder.array([ ]),
    });
  }  
}