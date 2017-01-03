import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.4)'
      })),
      //transition('small => large', animate('500ms ease-in')),
      //transition('large => small', animate('500ms ease-out'))

      transition('small <=> large', animate('500ms'))
    ]),
    trigger('myTrigger2', [
      state('fadeIn', style({
        opacity: '1'
      })),
      //transition('* => *', animate('500ms')),
      transition('void => *', [
        style({ opacity: '0', transform: 'translateX(-20px)' }),
        animate('500ms')
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
    ]),
    trigger('slideInOut2', [
      state('in', style({
        opacity: '1',
        transform: 'translateX(20px)'
      })),
      state('out', style({
        opacity: '1',
        transform: 'translateX(-140px)'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
    ]),
    ,
    trigger('keyframes', [
      state('in', style({
        opacity: '1',
        transform: 'translateX(0px)'
      })),
      state('out', style({
        opacity: '1',
        transform: 'translateX(-140px)'
      })),
      transition('in => out',[
        animate(1000, keyframes([
          style({opacity:1, transform: 'translateX(0px)', offset: 0}),
          style({ opacity:.7, transform: 'translateX(-35px)', offset: .2 }),
          style({opacity:.3, transform: 'translateX(-65px)', offset: .2}),
          style({opacity:0, transform: 'translateX(-100px)', offset: 1})
      ]))
            ]),
      transition('out => in', animate('500ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'Animations!';
  state: string = 'small';
  state2: string = 'fadeIn';
  state3: string = 'out';
  state4: string = 'out';
  state5: string = 'out';
  newOne: string = 'another';

  items: string[] = ['one', 'two', 'three'];

  onScaleClick() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  onSlideInOut() {
    this.state3 = (this.state3 === 'in' ? 'out' : 'in');
  }
  onSlideInOut2() {
    this.state4 = (this.state4 === 'in' ? 'out' : 'in');
  }
  ondivSlide2Click() {
    this.state4 = 'in';
  }
  onKeyframes() {
    this.state5 = (this.state5 === 'in' ? 'out' : 'in');
  }
  onAddAnother() {
    this.items.push(this.newOne);
  }
  onAnimStart(event) {
    console.log('onAnimStart', event);
  }
  onAnimDone(event) {
    console.log('onAnimDone', event);
  }
}
