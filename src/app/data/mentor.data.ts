export class MentorData {
  static availaleMentors = [
    {
      label: 'CSE',
      items: [{ label: 'Anitha' }],
    },
    {
      label: 'IT',
      items: [{ label: 'Ponselvakumar' }, { label: 'Jeeva' }],
    },
    {
      label: 'EIE',
      items: [
        { label: 'Dr.S.Vijayachitra' },
        { label: 'Dr.U.S.Ragupathy' },
        { label: 'Dr.R.Subasri' },
        { label: 'Dr.T.Kalavathidevi' },
        { label: 'Dr.K.Prabhu' },
        { label: 'Dr.S.J.Suji Prasad' },
        { label: 'Dr.M.Madhan Mohan' },
        { label: 'Dr.K.N.Baluprithviraj' },
        { label: 'Dr.N.Mahesh' },
        { label: 'Dr.M.Sasireka' },
        { label: 'S.Janarthanan' },
        { label: 'M.Raja' },
        { label: 'M.Lizzy Nesa Bagyam' },
        { label: 'P.Revathi' },
        { label: 'R.Mouleeshuwarpprabhu' },
        { label: 'R.Rajkumar' },
        { label: 'M.Thangatamilan' },
        { label: 'K.Yuvaraj' },
        { label: 'C.Aravind' },
        { label: 'S.Jegan' },
        { label: 'B.Venkatesan' },
        { label: 'D.Selvakarthi' },
        { label: 'T.Mrunalini' },
      ],
    },
  ];

  static exportClass() {
    return [...this.availaleMentors.sort().sort((a, b) => a.label.localeCompare(b.label))];
  }
}
