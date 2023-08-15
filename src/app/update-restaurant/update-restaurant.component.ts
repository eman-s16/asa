import { Component ,OnInit} from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UPDATERestaurantComponent implements OnInit{
  
  alart:boolean = false;
  editRestaurent = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    type: new FormControl('')
  });
 

  constructor(private RESTO:CommonService , private route: Router,private router:ActivatedRoute) { }
  

  
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.RESTO.getCurrentData(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.editRestaurent = new FormGroup({
        
        title: new FormControl(result['title']),
        price: new FormControl(result['price']),
        description: new FormControl(result['description']),
        image: new FormControl(result['image']),
        type: new FormControl(result['type'])
      });
    
    })
  }
  updateResto() {
    this.RESTO.updateResto(this.router.snapshot.params['id'], this.editRestaurent.value).subscribe((result) => {
      Swal.fire({
        title: 'Success!',
        text: 'Data updated successfully.',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          this.editRestaurent.reset({});
          console.log(result, "Data updated successfully");
          this.route.navigate(['/list-item']);
        }
      });
    });
  }
  
  closeAlart(){
   this.alart =false;
  }
  
}

