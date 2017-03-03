import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { SQLite } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //private storage: Storage;
  public personList: Array<Object>;
  //public db : SQLite;

  constructor(public navCtrl: NavController) {

    // console.log('opening database');
    // SQLite.openDatabase({
    //   name: 'data.db',
    //   location: 'default'
    // }).then((db: SQLite) => {
    //   console.log('creating table');
    //   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
    //   console.log('created table');
    // }, (err) => {
    //   console.error('Unable to execute sql: ', err);
    // });
    //   }, (err) => {
    //     console.error('Unable to open database: ', err);
    // });
    // console.log('end of constructor');

    // this.db = new SQLite();
    // this.db.openDatabase({
    //   name: 'data.db',
    //   location: 'default' // the location field is required
    // }).then(() => {
    //   this.db.executeSql('create table IF NOT EXISTS danceMoves(name VARCHAR(32))', {}).then(() => {
    //   }, (err) => {
    //     console.error('Unable to execute sql: ', err);
    //   });
    // }, (err) => {
    //   console.error('Unable to open database: ', err);
    // });
  }

  // public createPerson(name : string) {
  //       return new Promise((resolve, reject) => {
  //           //console.log('Inserting');
  //           this.db.executeSql("INSERT INTO danceMoves (name) VALUES (?)", [name]).then((data) => {
  //               //console.log('Inserted');
  //               resolve(data);
  //           }, (error) => {
  //               //console.log('Failed to insert.');
  //               reject(error);
  //           });
  //       });
  //   }

}
