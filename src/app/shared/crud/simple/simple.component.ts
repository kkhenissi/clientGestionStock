import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataModel } from '../../data.model';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  data: any;
  @Input()
  service: CrudService;
  @Input()
  initItem: any;
  @Input()
  initForm: FormGroup;
  @Input()
  dataModelList: DataModel[];

  crudForm: FormGroup;
  operation: String = 'add';
  selectedItem: any;

  constructor(
    private fb: FormBuilder) {
      this.createForm();
        
}

  ngOnInit() {
    this.init();
  }
  createForm() {
    this.initForm ?  this.crudForm = this.initForm : this.crudForm = this.fb.group({});
  }

  loadItems() {
    this.service.getAll().subscribe(
        data => { this.data = data },
        error => { console.log ('An error was occured'); },
        () => { console.log('loading data was done !!'); });
  }
  
  add() {
    const item = this.crudForm.value;
    this.service.add(item).subscribe(
        res => {
            this.init();
            this.loadItems();
        });
  }
  update() {
     this.service.update(this.selectedItem)
          .subscribe(
              res => {
                  this.loadItems();
              });
  }
  
  init() {
    this.selectedItem = this.initItem;
    this.createForm();
  }
  
  delete() {
  console.log('selectedItem', this.selectedItem);
     this.service.delete(this.selectedItem.id)
          .subscribe(
              res => {
                  this.selectedItem = this.initItem;
                  this.loadItems();
              }
  
          );
  }
  
  }
