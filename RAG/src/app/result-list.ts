import {Injectable} from '@angular/core';
import {result} from './result';
@Injectable({
  providedIn: 'root',
})
export class results {
  protected resultsList: result[] = [
    {
        id: 0,
        title: "Cat",
        summary: "The cat (Felis catus), also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of ...",
        content: "This is just an example for testing purposes",
    },
    {
        id: 1,
        title: "Cats",
        summary: "r/cats: Pictures, videos, questions, and articles featuring/about cats.",
        content: "This is just an example for testing purposes",
    },
    {
        id: 2,
        title: "Cats the Musical",
        summary: "CATS is a musical adapted from TS Eliot, where Jellicle cats meet at a ball, and one is chosen to be reborn. It features music, dance, and the song 'Memory'.",
        content: "This is just an example for testing purposes",
    },
    {
        id: 3,
        title: "HTTP Cats",
        summary: "An API for the awesome HTTP Cats! Use it in your website to show funny error messages.",
        content: "This is just an example for testing purposes",
    },
    {
        id: 4,
        title: "Cats (2019 film)",
        summary: "Cats is a 2019 musical fantasy film based on the 1981 West End musical Cats by Andrew Lloyd Webber, which in turn was based on the 1939 poetry collection",
        content: "This is just an example for testing purposes",
    },
  ];
  getAllResults(): result[] {
    return this.resultsList;
  }
  getResultsById(id: number): result | undefined {
    return this.resultsList.find((resultInstance) => resultInstance.id === id);
  }
}