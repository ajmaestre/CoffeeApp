import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  style_route = {
    'border-bottom': '.15rem solid #43017d',
    'padding': '.2rem 0',
    'transition': '1s'
  };
  route_one = {};
  route_two = {};
  route_three = {};
  route_four = {};
  route_five = {};
  route_six = {};

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {

        if (event instanceof NavigationEnd) {
            this.isRoute(event.url);
        }

    });
  }

  ngOnInit(): void {
  }

  isRoute(route: string){
    const regexp_home = /home/;
    const regexp_biss_comp = /bisness-comprension/;
    const regexp_data_comp = /data-comprension/;
    const regexp_data_prep = /data-preparation/;
    const regexp_data_model = /data-modeling/;
    const regexp_data_models = /models/;
    if(regexp_home.test(route)){
      this.route_one = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
      this.route_six = {};
    }else if(regexp_biss_comp.test(route)){
      this.route_two = this.style_route;
      this.route_one = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
      this.route_six = {};
    }else if(regexp_data_comp.test(route)){
      this.route_three = this.style_route;
      this.route_two = {};
      this.route_one = {};
      this.route_four = {};
      this.route_five = {};
      this.route_six = {};
    }else if(regexp_data_prep.test(route)){
      this.route_four = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_one = {};
      this.route_five = {};
      this.route_six = {};
    }else if(regexp_data_model.test(route)){
      this.route_five = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_one = {};
      this.route_six = {};
    }else if(regexp_data_models.test(route)){
      this.route_six = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
      this.route_one = {};
    }
  }

}
