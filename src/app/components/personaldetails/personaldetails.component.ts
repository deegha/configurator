import { Component, OnInit, Input } from '@angular/core';

import { ConfigurationService } from '../../providers/configuration.service'
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {
 
  @Input() feildIndex : number
  @Input() values
  @Input('group')
  public  rForm    : FormGroup
  private extraFeild
  public  loading = false
  
  private personalInpuFeildsMain : any[] = []
  private layout_column: any
  private params: any
  private sectionHeadings : any[] = [];

  private diableHeading = true
  private param_id : number = 0;
  private paramValues : any[] = []

  constructor(private configurationService : ConfigurationService, private formBuilder: FormBuilder) {
    this.loading = true;
    configurationService.getParams().then ( paramRes => {
      this.params = paramRes
 
      configurationService.getColumns().then (response => {
        this.layout_column = response
        this.loading = false
      })
    })  
  }

  ngOnInit() {

    if(this.values && this.values.values) {
      this.onChangeParamType(this.feildIndex,this.values)
      this.values.values.map(value => {
        if(value.status === true)
          this.addRemoveVAlue(value, true)
      })
    }
  }  

  onSelectColumn(feidId, col) { 
    this.configurationService.getHeadings(col).then (response => {
      this.sectionHeadings[feidId] = response
      this.loading = false
    })
  }

  onChangeParamType(feildIndex,params) { console.log(params, this.values)
    if(this.values.values === null ){
      this.params.map(param => {
        if(param.lable_name === params.lable_name) {
          this.paramValues[feildIndex] = param.values
        }        
      })
 
    } else{ 
      let checked = this.values.values.filter(value => {
        return value.status === true
      })
      this.paramValues[feildIndex] = params.values
    }
    




    // this.paramValues[feildIndex].map((pvalue, key) => {
    //   checked.map(checkedvalue => {
    //     if(checkedvalue.value === pvalue.value) {
    //       this.paramValues[feildIndex][key]['checked'] = true
    //     }else{
    //       this.paramValues[feildIndex][key]['checked'] = false
    //     }
    //   })
    // })
  }

  initMutltiValueId (param) {
    return this.formBuilder.group({
      id    : [param.id],
      lable : [param.lable],
      value : [param.value],
      status : ["true"]
    })
  }

  addRemoveVAlue(param, checked) { 
    const control = <FormArray>this.rForm.controls['values']

    if(checked) {
      let multivalue = this.initMutltiValueId(param)
      control.push(multivalue)
    }else{
      control.removeAt(control.value.indexOf(param.id))
    }
  }
}


