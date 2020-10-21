import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css']
})
export class ImoveisComponent implements OnInit {

  imoveis: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {

    this.imoveis = firestore.collection('imoveis').valueChanges();
  }

  ngOnInit(): void {
  }

}
