import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('sideBarVisibility', [
      state('show', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({
          opacity: 1,
          transform: 'translateX(-100px)'
        }),
        animate('0.5s 0  ease-in')
      ]),
      transition('* => void', [
        animate('0.5s 0 ease-out', style({
          opacity: 1,
          transform: 'translateX(-100px)'
        }))
      ])
    ]),
    trigger('sideBarVisibility2', [
      state('show', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({
          opacity: 1,
          transform: 'translateX(-200px)'
        }),
        animate('0.5s 0 ease-in')
      ]),
      transition('* => void', [
        animate('0.5s 0 ease-out', style({
          opacity: 1,
          transform: 'translateX(-200px)'
        }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Animations!';
  state: string = '';
  state2: string = 'fadeIn';
  showMainSideMenu1 = true;
  showMainSideMenu2 = false;

  onSlideInOut() {
    console.log("onSlideInOut before:", this.showMainSideMenu1, this.showMainSideMenu2)
    let that = this;
     if (this.showMainSideMenu1) {
      this.showMainSideMenu1 = false;
      setTimeout(function () {
        that.showMainSideMenu2 = true;
        console.log("onSlideInOut after:", that.showMainSideMenu1, that.showMainSideMenu2);
      }, 500);
    }else{
      this.showMainSideMenu2 = false;
      setTimeout(function () {
        that.showMainSideMenu1 = true;
        console.log("onSlideInOut after:", that.showMainSideMenu1, that.showMainSideMenu2);

      }, 500);
    }
  }

  onAnimStart(event) {
    console.log('onAnimStart', event);
  }

  onAnimDone(event) {
    console.log('onAnimDone', event);
    console.log('onAnimDone toState', event.toState);
  }
}
