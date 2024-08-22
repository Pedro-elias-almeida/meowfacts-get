import { Component, OnInit } from '@angular/core';
import { CatService } from './services/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'my-app';
  catRes= ''

  constructor(private cat:CatService){
  }
  listFac(){
    this.cat.listFacts().subscribe((res: any)=> this.catRes = res.data[0])
  }
  ngOnInit(): void {
   this.listFac()
  }
}
