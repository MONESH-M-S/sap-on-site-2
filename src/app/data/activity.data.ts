export class ActivityData {
  static activityData = [
    { label: 'Paper Presentation', route: 'paper', icon: 'file' },
    { label: 'Project Presentation', route: 'project', icon: 'cog' },
    { label: 'Club', route: 'club', icon: 'users' },
    { label: 'Workshop', route: 'workshop', icon: 'th-large' },
    { label: 'NPTEL', route: 'nptel', icon: 'chart-bar' },
    { label: 'Value Added Course', route: 'vac', icon: 'folder-open' },
    { label: 'Project to Paper', route: 'project-paper', icon: 'book' },
    {
      label: 'Techno Managerial Events',
      route: 'techno-managerial',
      icon: 'slack',
    },
    { label: 'Placement', route: 'placement', icon: 'desktop' },
    { label: 'Internship', route: 'intern', icon: 'envelope' },
    { label: 'NCC-NSS', route: 'ncc-nss', icon: 'inbox' },
    { label: 'Sports', route: 'sports', icon: 'globe' },
    { label: 'Voluntary Works', route: 'voluntary', icon: 'hashtag' },
  ];

  static exportData() {
    return [...this.activityData];
  }
}
