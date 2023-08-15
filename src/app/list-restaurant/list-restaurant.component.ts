import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent {
  public collection: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchText: string = ''; // Holds the search input

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.fetchRestoList();
  }

  fetchRestoList(): void {
    this.commonService.getRestoList().subscribe((result) => {
      this.collection = result;
      
    });
  }

  get paginatedRestoList(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return this.filteredRestoList.slice(startIndex, endIndex);
  }
  // Function to filter the restaurant list based on search input
  get filteredRestoList(): any[] {
    return this.collection.filter((resto: { title: string; price: number; type: string; }) =>
      (resto.title && resto.title.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (resto.price && resto.price.toString().toLowerCase().includes(this.searchText.toLowerCase())) ||
      (resto.type && resto.type.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }

  changePage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredRestoList.length / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  deleteAlart(resto: any): void {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.deleteResto(resto);
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  deleteResto(resto: any) {
    this.collection.splice(resto.id, -1)
    this.commonService.deleteResto(resto).subscribe((result) => {
      console.log("Data is Deleted Successfull !", result)
      this.fetchRestoList();
    })
  }

}
