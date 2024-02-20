import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers = [
    {id: 1, nome: 'Daniel'},
    {id: 2, nome: 'Renato'},
    {id: 3, nome: 'Adriano'}
  ]

  getCustomers(){
    return this.customers;
  }

  getById(id: number){
    let customer = this.customers.find(c =>{
      return c.id === id;
    });

    return customer;
  }
}
