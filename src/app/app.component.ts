import { Component } from '@angular/core';
import JSONDATA from "../assets/MOCK_DATA.json"

type User = {
  first_name: string; 
  last_name: string; 
  gender: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private data =  JSONDATA
  query = ''
  filteredUsers: User[] = []
  ngOnInit() {
    this.filteredUsers = this.data
  }
  onChange(e: any) {
    this.query = e.target.value
    this.filteredUsers = this.data.filter(u => u.first_name.toLowerCase().includes(this.query.toLowerCase()))
  }
}
