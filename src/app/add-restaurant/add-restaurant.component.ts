import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})

export class AddRestaurantComponent {
 

  alart:boolean = false;
  AddResto = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    type: new FormControl('')
  });
  constructor(private RESTO:CommonService) { }
  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.AddResto.get('image')?.setValue(file.name); // Set the image name
      const formData = new FormData();
      formData.append('image', file, file.name);
  
    
    }
  }
  createResto(){
    this.RESTO.addNewRestoToList(this.AddResto.value).subscribe((result)=>{
      this.alart =true;
      this.AddResto.reset({});
      console.log('Get data from Service',result)
    })
  }
  closeAlart(){
   this.alart =false;
  }
}
