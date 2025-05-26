import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Regular19';
  name: string = '';
  email: string = '';
  rows: { name: string; email: string; age: string }[] = [
    { name: 'สมชาย', email: 'somchai@example.com', age: '30' }
  ];
  tableVisible: boolean = true;

  showAlert() {
    alert('ยินดีต้อนรับสู่ Regular19!');
  }

  clearForm() {
    this.name = '';
    this.email = '';
    
  }

  submitForm() {
    if (this.name.trim() && this.email.trim()) {
      this.rows.push({ name: this.name, email: this.email, age: '' });
      this.clearForm();
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }

  toggleTable() {
    this.tableVisible = !this.tableVisible;
  }
}
