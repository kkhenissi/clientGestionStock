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
  constructor() { }

  ngOnInit() {
    this.dataModelListFiltered = this.dataModelList.filter(dataModel =>  !dataModel.readonly);
  }

  selectFile(event) {

     let fileList =  event.srcElement.files;
     let file = fileList[0];
     if (file && file.name.endsWith('.csv')) {
      let input = event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        let csvData = reader.result;
        let csvRecordsAsArray = (csvData as string).split(/\r\n|\n/);

        let headers = csvRecordsAsArray && csvRecordsAsArray.length > 0 ? csvRecordsAsArray[0].split(';') : [];
        // bind headers with dataModelList
         let bindArray = this.getBindHeadersDataModelListArray(headers);

        // create  data array
        this.dataArray = this.buildDataArray(bindArray, csvRecordsAsArray);

     };

  }

}
getBindHeadersDataModelListArray(headers) {
  let bindArray = [];
  let index = 0;
  let dataType = '';

  let getDataType = (header => {
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
    let dataArray = [];
    if (csvRecordsAsArray && csvRecordsAsArray.length > 1) {
      for (let i = 1; i < csvRecordsAsArray.length; i++ ) {
        const dataCsv = csvRecordsAsArray[i].split(';');
        const dataCrud = {};

      bindArray.forEach(bindItem => {
        dataCrud[bindItem.columnName] = bindItem.dataType == 'Number' ?  Number(dataCsv[bindItem.index]) : dataCsv[bindItem.index];
      });
      if (dataCrud) {
        dataArray.push(dataCrud);
      }
      }
    }
    return dataArray;

  }
}
