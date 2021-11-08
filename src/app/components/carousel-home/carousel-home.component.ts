import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})
export class CarouselHomeComponent implements OnInit {
  cells:any;

	@ViewChild('myCarousel') myCarousel:any;
	@ViewChild('carouselUseCase') carouselUseCase:any;
	@ViewChild('carouselThumbsUseCase') carouselThumbsUseCase:any;

	public constructor() {
        this.cells = Array(20).fill(0, 20).map((x,i)=>i);
	}

    images = [
        {id:1, url:'https://www.google.com', path: 'https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80'},
        {id:2, url:'https://www.primevideo.com', path: 'https://images.unsplash.com/photo-1634913940926-dc70e78b394b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'},
        {id:3, url:'https://www.netflix.com', path: 'https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:4, url:'https://www.crunchyroll.com', path: 'https://images.unsplash.com/photo-1634245482486-01004231a957?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'},
        {id:5, url:'https://gaming.amazon.com/home', path: 'https://images.unsplash.com/photo-1623652554515-91c833e3080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'},
        {id:6, url:'https://globoplay.globo.com', path: 'https://images.unsplash.com/photo-1632854285235-c72eb6ce6073?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:7, url:'https://www.alura.com.br', path: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:8, url:'https://www.disneyplus.com', path: 'https://images.unsplash.com/photo-1490810194309-344b3661ba39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'},
        {id:9, url:'https://www.hbomax.com/br/pt', path: 'https://images.unsplash.com/photo-1564999361588-4f1bdb499a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80'},
        {id:10, url:'https://www.starplus.com/pt-br',path: 'https://images.unsplash.com/photo-1581603905518-44de1f2e50cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80'},{id:1, url:'https://www.google.com', path: 'https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80'},
        {id:2, url:'https://www.primevideo.com', path: 'https://images.unsplash.com/photo-1634913940926-dc70e78b394b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'},
        {id:3, url:'https://www.netflix.com', path: 'https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:4, url:'https://www.crunchyroll.com', path: 'https://images.unsplash.com/photo-1634245482486-01004231a957?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'},
        {id:5, url:'https://gaming.amazon.com/home', path: 'https://images.unsplash.com/photo-1623652554515-91c833e3080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'},
        {id:6, url:'https://globoplay.globo.com', path: 'https://images.unsplash.com/photo-1632854285235-c72eb6ce6073?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:7, url:'https://www.alura.com.br', path: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:8, url:'https://www.disneyplus.com', path: 'https://images.unsplash.com/photo-1490810194309-344b3661ba39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'},
        {id:9, url:'https://www.hbomax.com/br/pt', path: 'https://images.unsplash.com/photo-1564999361588-4f1bdb499a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80'},
        {id:10, url:'https://www.starplus.com/pt-br',path: 'https://images.unsplash.com/photo-1581603905518-44de1f2e50cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80'},
    ];

    imagesx = [
        {id:11, url:'https://newworldfans.com', path: 'https://images.unsplash.com/photo-1587545694326-6359f26f3dcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80',},
        {id:12, url:'https://www.youtube.com', path: 'https://images.unsplash.com/photo-1630673429477-186308ef87d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:13, url:'https://www.reddit.com', path: 'https://images.unsplash.com/photo-1521790945508-bf2a36314e85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1634&q=80'},
        {id:14, url:'https://www.twitch.tv', path: 'https://images.unsplash.com/photo-1594235048794-fae8583a5af5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:15, url:'https://www.amazon.com.br', path: 'https://images.unsplash.com/flagged/photo-1564445477052-8a3787406bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80'},
        {id:16, url:'https://newworldfans.com', path: 'https://images.unsplash.com/photo-1586282023338-52aa50a846ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',},
        {id:17, url:'https://www.youtube.com', path: 'https://images.unsplash.com/photo-1629869332840-6fbfe6baacef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'},
        {id:18, url:'https://www.reddit.com', path: 'https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:19, url:'https://www.twitch.tv', path: 'https://images.unsplash.com/photo-1614015236404-fe834cd2d290?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:20, url:'https://www.amazon.com.br', path: 'https://images.unsplash.com/photo-1614454541959-812e1e8824d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:21, url:'https://newworldfans.com', path: 'https://images.unsplash.com/photo-1573496267478-37727ee5b694?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',},
        {id:22, url:'https://www.youtube.com', path: 'https://images.unsplash.com/photo-1601814837661-ce2832acd413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
        {id:23, url:'https://www.reddit.com', path: 'https://images.unsplash.com/photo-1492140260770-41aec2341f6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'},
        {id:24, url:'https://www.twitch.tv', path: 'https://images.unsplash.com/photo-1606836606933-94d15b61617b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'},
        {id:25, url:'https://www.amazon.com.br', path: 'https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'},
        {id:26, url:'https://newworldfans.com', path: 'https://images.unsplash.com/photo-1581094653589-70923c3a198e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',},
        {id:27, url:'https://www.youtube.com', path: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'},
        {id:28, url:'https://www.reddit.com', path: 'https://images.unsplash.com/photo-1620810257583-9776d8fee77d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
        {id:29, url:'https://www.twitch.tv', path: 'https://images.unsplash.com/photo-1627518788331-b3b7fdaa382f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80'},
        {id:30, url:'https://www.amazon.com.br', path: 'https://images.unsplash.com/photo-1606242403117-4755198b9752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
    ];

    next() {
      this.myCarousel.next();
  }

  prev() {
      this.myCarousel.prev();
  }

  select(index:number) {
      this.myCarousel.select(index);
  }

  play() {
      this.myCarousel.play();
  }

  stop() {
      this.myCarousel.stop();
  }

  handleCarouselEvents(event: any) {
      console.log(event);
  }
  onSelect(){
    let result = this.images.map(({url})=> url)
    console.log(result);
    window.location.href = result[2];
}

  handleCarouselUseCaseEvents(event:any) {
      if (event.name === "transitionend") {
          this.carouselThumbsUseCase.select(this.carouselUseCase.slideCounter)
      }
  }

  ngOnInit(): void {
  }

}
