import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelComponent implements OnInit {

  imovel$;
  constructor(private firestore: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.imovel$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.firestore.doc('imoveis/' + id).valueChanges();
      })
    );

  }

}
