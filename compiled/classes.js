'use strict';
/* globals console */

// Classes
// Syntactic sugar on javascript objects

class Meeting {
  constructor(room, time) {
    this.room = room;
    this.time = time;
  }

  humanizeTime() {
    if (typeof this.time.getMonth !== 'function' && typeof this.time.getDate !== 'function' && typeof this.time.getYear !== 'function') {
      throw new Error('time must be passed in as a Date object');
    }
    return this.time.getMonth() + '/' + this.time.getDate() + '/' + (this.time.getYear() + 1900);
  }

  reserve() {
    let meetingTime = this.humanizeTime(this.time);
    console.log('Please meet in: ' + this.room);
    console.log('Your meeting has been scheduled for: ' + meetingTime);
  }
}

class Cop extends Meeting {
  constructor(room, time, type) {
    super(room, time);
    this.type = type;
  }

  welcome() {
    // String interpolation
    console.log(`Welcome to the ${ this.type } Community of Practice!`);
    console.log(this.reserve());
  }

}

// Instantiate the class with an instance
const meeting = new Meeting('Pacific', new Date());
meeting.reserve();

const uicop = new Cop('Great Wall', new Date(), 'UI');
uicop.welcome();