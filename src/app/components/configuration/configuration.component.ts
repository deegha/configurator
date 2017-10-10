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
  
          query('.life-check', stagger('500ms', [
            animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
          ]), {optional: true}),
  
          query('.life-check', [
            animate(1000, style('*'))
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
                    .then(response=> {
                      let productResponse = <any>response
                      this.product = productResponse.productInfo
                      this.initRiderArray(this.product.attachedRiders);
                      this.buildForm();
                      this.configurationService.getChannels().then(res => {
                      this.channels = res
                      }).catch()
                      this.loading = false
                  })
                }, err => {
                  this.loading = false;
                });
                
              }
  
  ngOnInit() { }

  onSubmit(post) {
    let arry : any[] = []
    arry.push({
      "slected-riders" : this.attachedRiders,
      "other-detials" : post
    })

    this.configurationService.setConfiguration(arry).then(ers=>{
      const message = {
        content: 'Successful',
        title: 'Successfully configured',
        type: Type.SUCCESS
      };
      this.onConfigurationSuccess.emit()
      this.gds.setNotification(message)
      this.router.navigate(['/dashboard']);
    })
  }

  initRiderArray(riders) {
    riders.map(rider => {
      let riderCode = rider.riderProductCode
      this.attachedRiders[riderCode] = 
         {  
          "main" : true,
          "spouse" : false,
          "child" : false,
          "joint" : false,
        }
    })
  }

  onCheckRelationship(event, relationship){
    switch(relationship) {
      case 1:
        if(event.checked)
          this.attachedRiders[event.source.name].main = true;
        else
          this.attachedRiders[event.source.name].main = false;
        break
      case 2:
        if(event.checked)
          this.attachedRiders[event.source.name].spouse = true;
        else
          this.attachedRiders[event.source.name].spouse = false;
        break
      case 3:
        if(event.checked)
          this.attachedRiders[event.source.name].child = true;
        else
          this.attachedRiders[event.source.name].child = false;
        break
      case 4:
        if(event.checked)
          this.attachedRiders[event.source.name].joint = true;
        else
          this.attachedRiders[event.source.name].joint = false;
        break
    }
  }

  initFeild(): FormGroup {
    return this.formBuilder.group({
      param_id : ['', Validators.required],
      coloumn  : ['', Validators.required],
      headings : ['', Validators.required]
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
      extraFeild: this.formBuilder.array([ ])
    });
  }  
}