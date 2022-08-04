export class ProjectMarkData {
  static availalePaperPositionWithMarks = [
    { label: 'Prize - Inside College', prize: true, value: '20' },
    { label: 'Prize - Outside College', prize: true, value: '30' },
    { label: 'Prize - Premier Instiute', prize: true, value: '50' },
    { label: 'Presented - Inside College', prize: false, value: '5' },
    { label: 'Presented - Outside College', prize: false, value: '10' },
    { label: 'Presented - Premier Instiute', prize: false, value: '20' },
    { label: 'Submitted', prize: false, value: '2' },
  ];

  static exportClass() {
    return [...this.availalePaperPositionWithMarks];
  }
}
