import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import {
  getFirestore, collection, getDocs, getDoc, query, orderBy,
  doc, addDoc, setDoc, updateDoc, documentId} from 'firebase/firestore';
import { firebaseConfig } from '../datab';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'post-book',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  post: any = {
    autor: "",
    titulo: "",
    texto:""
  };
  
  db: any;
  app: any;
  totalPosts: any;
  listaPosts: any;


  creaDate(d:any) {
    var yyyy = d.getFullYear().toString();
    var mm = (d.getMonth()+1).toString();
    var dd  = d.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return  (ddChars[1]?dd:"0"+ddChars[0]) + '/' + (mmChars[1]?mm:"0"+mmChars[0]) + '/'  + yyyy;
  }


  async savePost(autor:any, texto:any) {
    const f = new Date();
    console.log(autor, ", ", texto);
    var elem = {
      'autor': autor,
      'texto':texto,
      'fecha': this.creaDate(new Date(new Date().getTime())),
    };
    await addDoc(collection(this.db, "MetNumUs"), elem);
    this.muestraListaPost();
  }

 async muestraListaPost() {
    
  const queryPst = query(collection(this.db, '/MetNumUs'),orderBy('fecha','asc'));
  const usSnapshot = await getDocs(queryPst);
  this.listaPosts = usSnapshot.docs.map(doc => doc.data());
  this.totalPosts = usSnapshot.size;
  
  console.log(this.listaPosts);

  }

  ngAfterViewInit() { 
    this.muestraListaPost();
  }

  ngOnInit(): void {
      
  this.app = initializeApp(firebaseConfig);
  this.db = getFirestore(this.app);

  }

 
}
