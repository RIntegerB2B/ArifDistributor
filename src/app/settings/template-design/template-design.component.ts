import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';

import {TemplateDesign} from './template-design.model';
import {TemplateImageData} from './templateData.model';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-template-design',
  templateUrl: './template-design.component.html',
  styleUrls: ['./template-design.component.css']
})
export class TemplateDesignComponent implements OnInit {
  templateForm: FormGroup;
  templateModel: TemplateDesign;
  imageNameFilter;
  showImageNameError = false;
  message;
  action;


  fileLength;
  fileToUpload;
  urls = new Array<string>();

  reader: FileReader = new FileReader();
  templateImageData: TemplateImageData = new TemplateImageData();
  constructor(private fb: FormBuilder, private router: Router, private settingService: SettingsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    this.getTemplate();
  }
  createForm() {
    this.templateForm = this.fb.group({
      id: [''],
      position: ['' ],
    });
  }
  handleFileInput(images: any) {
    this.fileToUpload = images;
    this.templateImageData.templateImage = this.fileToUpload[0];
    this.urls = [];
    const files = images;
    if (files) {
      for (const file of files) {
        this.reader = new FileReader();
        this.reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        };
        this.reader.readAsDataURL(file);
      }
    }
  }
  addTemplate() {
    this.message = 'Template Design added';
    const formData: any = new FormData();
    this.fileLength = this.fileToUpload.length;
    for (let i = 0; i <= this.fileLength; i++) {
      formData.append('uploads[]', this.fileToUpload[i]);
    }
    this.settingService.addTemplateails(formData).subscribe(data => {
      this.templateModel = data;
      this.snackBar.open(this.message, this.action, {
        duration: 2000,
      });
    }, error => {
      console.log(error);
    });
  }

  getTemplate() {
    this.settingService.getTemplateDetails().subscribe(data => {
      this.templateModel = data;
    }, error => {
      console.log(error);
    });
  }
}
