import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { DataModel } from '../data.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
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
ngOnInit(): void {
  // this.produits =  this._produitService.getProduits();
  //     console.log('===========>', this.produits);
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
