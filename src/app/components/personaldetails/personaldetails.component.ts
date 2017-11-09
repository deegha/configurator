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
    
  }  

  onSelectColumn(feidId, col) { 
    this.configurationService.getHeadings(col).then (response => {
      this.sectionHeadings[feidId] = response
      this.loading = false
    })
  }

  onChangeParamType(feildIndex,params) {
    console.log(this.values)
     this.paramValues[feildIndex] = this.values
     console.log(feildIndex,this.paramValues )
  }

  initMutltiValueId (id_value) {
    return this.formBuilder.group({
      id : [id_value]
    })
  }

  addRemoveVAlue(value_id, event) {
    const control = <FormArray>this.rForm.controls['values'];
    let multivalue = this.initMutltiValueId(value_id)
    
    if(event.checked) {
      control.push(multivalue)
    }else{
      control.removeAt(control.value.indexOf(value_id))
    }
  }
}


