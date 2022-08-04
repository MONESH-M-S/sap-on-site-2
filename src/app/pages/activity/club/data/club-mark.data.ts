export class ClubMarkData {
  static availaleClubPositionWithMarks = [
    { label: 'Chairman', value: '20' },
    { label: 'Secrtory', value: '20' },
    { label: 'Join-Tresure', value: '15' },
    { label: 'Board-Member', value: '10' },
  ];

  static exportClass() {
    return [...this.availaleClubPositionWithMarks];
  }
}
