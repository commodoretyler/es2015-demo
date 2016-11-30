'use strict';
/* globals console */

// Destructuring

const uiCop = {
  leader: 'Jason Daihl',
  coLeader: 'Amanda Olson',
  participants: [
    'Tyler Moore',
    'Brandon Downing',
    'Vinnie Freeman',
    'Devon Sarnacki',
    'Svilen Stoicheff'
  ]
};

class UICop {
  constructor(props) {
    this.props = props;
  }

  destructure() {
    const { leader, coLeader, participants } = this.props
    console.log(leader);
    console.log(coLeader);
    console.log(participants);
  }

  assignment() {
    let participants = this.props.participants;
    let [a, b, ...rest] = participants;

    console.log(a);
    console.log(b);
    console.log(rest);
  }
}

let members = new UICop(uiCop);
members.destructure();
//members.assignment();
