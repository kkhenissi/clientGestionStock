import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataModel } from '../../data.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {


  @ViewChild('fileUploadInput')
  fileUploadInput: any;


  @Input()
  dataModelList: DataModel[];
  dataModelListFiltered: DataModel[];
 // logObject: any;
  dataArray: any;
  currentStep = 1;
  dataSentToServer: Boolean = false;
  constructor() { }

  ngOnInit() {
    this.dataModelListFiltered = this.dataModelList.filter(dataModel =>  !dataModel.readonly);
  }

  selectFile(event) {

     const fileList =  event.srcElement.files;
     const file = fileList[0];
     if (file && file.name.endsWith('.csv')) {
      const input = event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        const csvData = reader.result;
        const csvRecordsAsArray = (csvData as string).split(/\r\n|\n/);

        const headers = csvRecordsAsArray && csvRecordsAsArray.length > 0 ? csvRecordsAsArray[0].split(';') : [];
        // bind headers with dataModelList
         const bindArray = this.getBindHeadersDataModelListArray(headers);

        // create  data array
        this.dataArray = this.buildDataArray(bindArray, csvRecordsAsArray);
        this.currentStep++;
     };

  }

}
getBindHeadersDataModelListArray(headers) {
  const bindArray = [];
  let index = 0;
  let dataType = '';

  const getDataType = (header => {
    this.dataModelList.forEach(dataModel =>{
        if (dataModel.columnName === header) {
          dataType =  dataModel.dataType;
        }
       });
       return dataType;
  });
  headers.forEach(header => {
      const bindItem = {
        columnName: header,
        dataType: getDataType(header),
        index: index
      };
      index++;
      bindArray.push(bindItem);
  });
  return bindArray;
  }


  buildDataArray(bindArray, csvRecordsAsArray ) {
    const dataArray = [];
    if (csvRecordsAsArray && csvRecordsAsArray.length > 1) {
      for (let i = 1; i < csvRecordsAsArray.length; i++ ) {
        const dataCsv = csvRecordsAsArray[i].split(';');
        const dataCrud = {};

      bindArray.forEach(bindItem => {
        dataCrud[bindItem.columnName] = bindItem.dataType === 'Number' ?  Number(dataCsv[bindItem.index]) : dataCsv[bindItem.index];
      });
      if (dataCrud) {
        dataArray.push(dataCrud);
      }
      }
    }
    return dataArray;

  }
}
