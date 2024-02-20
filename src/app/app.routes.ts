import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directives/directive.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilhoAComponent } from './filho-a/filho-a.component';
import { FilhoBComponent } from './filho-b/filho-b.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { guardiaoGuard } from './guardiao.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

export const routes: Routes = [
    {path:'hello-world', title: 'Hello World', component: HelloWorldComponent, children: [
        {path: 'filho-a', component: FilhoAComponent},
        {path: 'filho-b', component: FilhoBComponent}
    ]},
    {path: 'data-binding', title: 'Data Binding', component: DataBindingComponent, canActivate: [guardiaoGuard]},
    {path: 'directives', title: 'Directives', component: DirectiveComponent},
    {path: 'customers', title: 'Customers', component: CustomerListComponent},
    {path: 'customer/:id', title: 'Customer Detais', component: CustomerDetailsComponent},
    {path: 'reactive-form', title: 'Reactive Form', component: ReactiveFormComponent},
    {path: 'template-form', title: 'Template Form', component: TemplateFormComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
