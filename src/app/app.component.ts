import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { SQLite } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  public db : SQLite;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

        // this.db = new SQLite();
        // this.db.openDatabase({
        //   name: 'data.db',
        //   location: 'default' // the location field is required
        // }).then(() => {
        //   this.db.executeSql('create table IF NOT EXISTS danceMoves(name VARCHAR(32))', {}).then(() => {
        //   this.db.executeSql("INSERT INTO danceMoves (name) VALUES ('Dan')",{});
        //   this.db.executeSql("SELECT * FROM danceMoves", {}).then((data) => {
        //     console.log('Nb or rows ' + data.rows.length);
        //     for (let i = 0; i < data.rows.length; i++){
        //       console.log(data.rows.item(i).name);
        //     }
        //   });
        //     console.log('Table created.');
        //   }, (err) => {
        //     console.error('Unable to execute sql: ', err);
        //   });
        // }, (err) => {
        //   console.error('Unable to open database: ', err);
        // });
        //
        // this.db.executeSql("INSERT INTO danceMoves (name) VALUES ('Dan')",{}).the(() => {
        //   console.log ('Name inserted');
        // }, (err) => {
        //   console.error('Unable to insert name');
        // });

        // this.storage.executeSql("SELECT * FROM people", [])
        //
        // let people = [];
        // this.db.executeSql("SELECT * FROM people", []).then((data) => {
        //     if(data.rows.length > 0) {
        //         for(let i = 0; i < data.rows.length; i++) {
        //             people.push({
        //                 ppName : data.rows.item(i).name
        //             });
        //         }
        //     }
        //   }
        // console.log(people);

    });
  }

  public createPerson(myName : string) {
        return new Promise((resolve, reject) => {
            //console.log('Inserting');
            this.db.executeSql("INSERT INTO danceMoves (name) VALUES (?)", [myName]).then((data) => {
                //console.log('Inserted');
                resolve(data);
            }, (error) => {
                //console.log('Failed to insert.');
                reject(error);
            });
        });
    }
}
