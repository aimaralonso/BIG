import { Component } from '@angular/core';

@Component({
  selector: 'app-nire-osagaia',
  templateUrl: './nire-osagaia.component.html',
  styleUrl: './nire-osagaia.component.css',
})
export class NireOsagaiaComponent {
  rowStart = 0;
  rowLimit = 3;
  langilea = {
    izena: 'Pepe',
    abizena: 'Perez',
    generoa: 'gizona',
    irudia: '/assets/images/caraMujer.jpg',
    likes: 0,
  };
  Title = 'Langileen zerrenda';
  getTitle() {
    return this.Title;
  }
  langileak = [
    {
      izena: 'Pepe',
      abizena: 'Perez',
      generoa: 'gizona',
      soldata: 1000,
      likes: 0,
      lanean: true,
    },
    {
      izena: 'Sara',
      abizena: 'Ruiz',
      generoa: 'emakumea',
      soldata: 1000,
      likes: 0,
      lanean: true,
    },
    {
      izena: 'Paul',
      abizena: 'Elorza',
      generoa: 'gizona',
      soldata: 1500,
      likes: 0,
      lanean: true,
    },
    {
      izena: 'Raul',
      abizena: 'Txakartegi',
      generoa: 'gizona',
      soldata: 2000,
      likes: 0,
      lanean: true,
    },
  ];
  gehituLikes(langilea: any) {
    langilea.likes++;
    console.log(`Likes aumentados: ${langilea.likes} para ${langilea.izena}`);
  }
  kenduRow() {
    this.rowStart -= 2;
    this.rowLimit -= 2;
  }
  gehituRow() {
    this.rowStart += 2;
    this.rowLimit += 2;
  }
  myText = 'Nire izena: Aimar da';
}
