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
  @Input('group')
  public  rForm    : FormGroup
  private extraFeild
  public  loading = false
  
  private personalInpuFeildsMain : any[] = []
  private coloumns: any
  private params: any
  private sectionHeadings : any[] = [];

  private diableHeading = true
  private param_id : number = 0;

  constructor(private configurationService : ConfigurationService, private formBuilder: FormBuilder) {
    this.loading = true;
    configurationService.getParams().then ( paramRes => {
      this.params = paramRes
      configurationService.getColumns().then (response => {
        this.coloumns = response
        this.loading = false
      })
    })  
  }

  ngOnInit() {
    
  }  

  onSelectColumn(feidId, col) { console.log(col)
    this.configurationService.getHeadings(col).then (response => {
      this.sectionHeadings[feidId] = response
      this.loading = false
    })
  }
}


