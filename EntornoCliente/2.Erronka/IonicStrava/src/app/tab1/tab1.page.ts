import { Component, OnInit } from '@angular/core';
import { KlubaService } from '../services/kluba.service';
import { Kluba } from '../classes/kluba';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  showLoader = true;
  klubak: Kluba[] = [];

  constructor(private klubaService: KlubaService) {}

  getKlubak(): void {
    this.apiService.dbState().subscribe((res) => {
      if (res) {
        this.apiService.fetchKlubak().subscribe((data) => {
          this.klubak = data;
          this.showLoader = false;
        });
      }
    });
  }

  ngOnInit() {
    this.getKlubak();
  }
  kluba = {
    id: 783189,
    name: 'uni eibar',
    cover_photo_small: 'assets/img/generikoa.jpg',
    sport_type: 'running',
    private: true,
    member_count: 3,
    description: 'Lanbide Heziketako Ikastetxea',
    club_type: 'company',
  };
}
