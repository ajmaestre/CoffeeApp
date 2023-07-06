import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  style_route = {
    'border-bottom': '.1rem solid #43017d',
    'padding': '0',
  };
  route_one = {};
  route_two = {};
  route_three = {};
  route_four = {};
  route_five = {};

  constructor(private router: Router) {
    this.route_one = this.style_route;
    this.route_two = {};
    this.route_three = {};
    this.route_four = {};
    this.route_five = {};
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
          this.isRoute(event.url);
      }

    });
  }

  ngOnInit(): void {
  }

  isRoute(route: string){
    const regexp_home = /start/;
    const regexp_biss_comp = /introduction/;
    const regexp_data_comp = /objetives/;
    const regexp_data_prep = /end/;
    const regexp_data_model = /resume/;
    if(regexp_home.test(route)){
      this.route_one = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
    }else if(regexp_biss_comp.test(route)){
      this.route_two = this.style_route;
      this.route_one = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
    }else if(regexp_data_comp.test(route)){
      this.route_three = this.style_route;
      this.route_two = {};
      this.route_one = {};
      this.route_four = {};
      this.route_five = {};
    }else if(regexp_data_prep.test(route)){
      this.route_four = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_one = {};
      this.route_five = {};
    }else if(regexp_data_model.test(route)){
      this.route_five = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_one = {};
    }
  }

}
