import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-links-pdp',
  templateUrl: './links-pdp.component.html',
  styleUrls: ['./links-pdp.component.css']
})
export class LinksPdpComponent implements OnInit {

  style_route = {
    'border-bottom': '.1rem solid #43017d',
    'padding': '0',
  };
  route_one = {};
  route_two = {};
  route_three = {};
  route_four = {};

  constructor(private router: Router) {
    this.route_one = this.style_route;
    this.route_two = {};
    this.route_three = {};
    this.route_four = {};
    this.router.events.subscribe((event: Event) => {

        if (event instanceof NavigationEnd) {
            this.isRoute(event.url);
        }

    });
  }

  ngOnInit(): void {
  }

  isRoute(route: string){
    const regexp_data_one = /introduction/;
    const regexp_data_two = /selection/;
    const regexp_data_three = /cleaning/;
    const regexp_data_four = /formating/;
    if(regexp_data_one.test(route)){
      this.route_one = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
    }else if(regexp_data_two.test(route)){
      this.route_two = this.style_route;
      this.route_one = {};
      this.route_three = {};
      this.route_four = {};
    }else if(regexp_data_three.test(route)){
      this.route_three = this.style_route;
      this.route_two = {};
      this.route_one = {};
      this.route_four = {};
    }else if(regexp_data_four.test(route)){
      this.route_four = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_one = {};
    }
  }

}
