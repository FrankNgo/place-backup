import { Injectable } from '@angular/core';
import { Boxes } from './board/board.model';
// import { ALBUMS } from './mock-album';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BoxService {
  boxes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.boxes = database.list('boxes');
  }

  getBoxes() {
    return this.boxes;
  }

  addSquare(newBox) {
    this.boxes.push(newBox);
  }

  // addAlbum(newAlbum: Album) {
  //   this.albums.push(newAlbum);
  // }
  //
  // getAlbumById(albumId: string) {
  //   return this.database.object('albums/' + albumId);
  // }
  //
  // updateAlbum(localUpdatedAlbum) {
  //   let albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
  //   albumEntryInFirebase.update({title: localUpdatedAlbum.title,
  //                               artist: localUpdatedAlbum.artist,
  //                               description: localUpdatedAlbum.description});
  // }
  //
  // deleteAlbum(localAlbumToDelete) {
  //   let albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
  //   albumEntryInFirebase.remove();
  // }

}
