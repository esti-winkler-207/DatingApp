import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customers } from 'src/app/classes/customers';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  customer = new Customers();

  public cities = new Array<{ text: string; value: number }>();
  
  public City: { text: string; value: number };

  public value: Date = new Date(2000, 2, 10);

  public phoneNumberValue: string = '';
  public phoneNumberMask: string = '(999) 000-00-00-00';

  public form: FormGroup;

  searchRes: Customers;

  gender: any;

  public FamilyStatues: Array<{ text: string; value: number }> = [
    { text: "Bachelor", value: 1 },
    { text: "Married", value: 2 },
    { text: "widower", value: 3 },
    { text: "divorcee", value: 4 },
  ];

  public familyStatus: { text: string; value: number } ;

  constructor(private customersService : CustomersService, private citiesService : CitiesService) {
    this.form = new FormGroup({
      ContactName: new FormControl(this.customer.contactName, [Validators.required]),
      Address: new FormControl(this.customer.address, [Validators.required]),
      City: new FormControl(this.customer.city, [Validators.required]),
      Phone: new FormControl(this.customer.phone, [Validators.required, Validators.pattern('[0-9+#-]*')]),
      gender: new FormControl(this.gender, [Validators.required]),
      familyStatus : new FormControl(this.familyStatus)
    });
  }

  ngOnInit(): void {

    this.citiesService.getAllCities().subscribe(res =>{
      res.map((item,index)=>{
        this.cities.push({text : item,value : index})
      })
    })
  }

  ngAfterViewInit(): void{
    this.form.reset();
  }

  getCustomersByFields(){
    console.log(this.customer);
    this.customersService.getCustomersByFields(this.customer).subscribe(res =>{
      console.log(res.address)
      this.searchRes = res
    }
    ,err=>{
      console.log(err);
    })
  }



  public clearForm(): void {
    this.form.reset();
}

}




