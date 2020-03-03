import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delay(): Promise<void> {
    let random = Math.ceil((Math.random()*1000 + 1000));
    return new Promise<void>(resolve => setTimeout(resolve, random));
  }

  async search(keyword: string): Promise<string[]> {
    await this.delay();
    return [
      keyword + '1', 
      keyword + '2', 
      keyword + '3', 
    ];
  }

  async consumeSearch() {
    let res = await this.search('Hello');
    console.log(res);
  }

  async doSearch() {
    console.log('starting search');
    await this.consumeSearch();
    console.log('Completed');
  }


  createPromise(): Promise<number> {
    console.log('creating promise');
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(42)
      }, 3000);
    })
  }

  async go() {
    // console.log('A');
    // let x = this.start();
    // await x;
    // console.log('B');

    const keywords = ['green', 'blue', 'yellow', 'red'];
    const promises = keywords.map(s => this.search(s));
    const pall = Promise.all(promises);
    const res = await pall;

    res.forEach(sa => console.log(sa));


    let p1 = this.delay().then(_ => 12);
    let p2 = this.delay().then(_ => 'hello');
    let p3 = this.delay().then(_ => true);

    let p1all = Promise.all([p1, p2, p3]);
    let p1reace = Promise.race([p1, p2, p3]);
  }

  async start() {
    console.log(1);

    let p = this.createPromise();
    console.log(2);

    // let x = p.then(res => console.log(res));

    let res = await p;
    console.log(3);
    console.log(res);

    console.log(4);

    return true;
  }
}
