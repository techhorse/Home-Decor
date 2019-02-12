/*import { fetch } from './models/fetch';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  constructor(private afs: AngularFireStorage) {}
    private fetchCollection: AngularFirestoreCollection<fetch>;
    private pic: Observable<fetch[]>;
    private pics: Observable<fetch[]>;
    private addDoc: AngularFirestoreDocument<fetch>;
}
    getAllclients() {
      this.clientsCollection = this.af.<fetch>('clients');
      return this.clients = this.clientsCollection.Snapshot()
        .pipe(map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as fetch;
            data.id = action.payload.doc.id;
            return data;
          });
        }));
        getOneclient(idclient: string) {
          this.addDoc = this.afs.doc<ClientCleanning>(`clients/${idclient}`);
          return this.client = this.addDoc.snapshotChanges().pipe(map(action => {
            if (action.payload.exists === false) {
              return null;
            } else {
              const data = action.payload.data() as ClientCleanning;
              data.id = action.payload.id;
              return data;
            }
          }));
        }

        addclient(client: ClientCleanning): void {
          this.clientsCollection.add(client);
        }
        updateclient(client: ClientCleanning): void {
          let idclient = client.id;
          this.addDoc = this.afs.doc(`clients/${idclient}`);
          this.addDoc.update(client);
        }
        deleteclient(idclient: string): void {
          this.addDoc = this.afs.doc<ClientCleanning>(`clients/${idclient}`);
          this.addDoc.delete();
        }
      }

}*/
