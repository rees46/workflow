type User = {
  id: string,
  username: string,
  name: {
    firstName: string,
    lastName: string,
  },
  speaksEnglish: boolean,
  smallAvatar: string | null,
  avatar: string | null,
  profilePicture: string | null,
  languages: any[],
  archived: boolean,
  notAMember: boolean,
  suspended: boolean,
  suspendedAt: Object | null,
  joined: {
    iso: string,
    year: number,
    month: number,
    day: number,
  },
  leftAt: Object | null,
  external: boolean,
  externalLight: null,
}

export const SPACE_USERS: User[] = [
  {
    id: '3g8BhU2hOk5P',
    username: 'gochicus',
    name: {
      firstName: 'Aleksandr',
      lastName: 'Zavadkin',
    },
    speaksEnglish: true,
    smallAvatar: 'Ij4Ej0oFYLT',
    avatar: '3OIdkm3UrWZK',
    profilePicture: 'WzIRq1lgetK',
    languages: [],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2024-02-05',
      year: 2024,
      month: 2,
      day: 5,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '44ILmC3pIkWZ',
    username: 'ivcshnik',
    name: {
      firstName: 'Alexander',
      lastName: 'Nogovitsyn',
    },
    speaksEnglish: false,
    smallAvatar: '3hRYJ349ccfS',
    avatar: '23HuOG0Enc8B',
    profilePicture: '2Bfe1V1hcQZN',
    languages: [
      {
        name: {
          firstName: ' Alexander',
          lastName: 'Nogovitsyn',
        },
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2021-12-13',
      year: 2021,
      month: 12,
      day: 13,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '1x0eFp0mSDt6',
    username: 'ak',
    name: {
      firstName: 'Alexey',
      lastName: 'Kulaev',
    },
    speaksEnglish: true,
    smallAvatar: 'aYQpp1bpuc6',
    avatar: '2grUuJ45Q3IF',
    profilePicture: '24X7Um16jzKl',
    languages: [
      {
        name: null,
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2021-09-20',
      year: 2021,
      month: 9,
      day: 20,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '2yBz702CafA',
    username: 'torinasakura',
    name: {
      firstName: 'Andrew',
      lastName: 'Ghostyuhin',
    },
    speaksEnglish: true,
    smallAvatar: '1VsQvE1dgaNl',
    avatar: '2xcoZu3SMy6J',
    profilePicture: '40T1p52woKIX',
    languages: [
      {
        name: {
          firstName: 'Андрей',
          lastName: 'Гостюхин',
        },
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2023-12-18',
      year: 2023,
      month: 12,
      day: 18,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '375qTi4NlWdr',
    username: 'jarocki',
    name: {
      firstName: 'Artiom',
      lastName: 'Jarocki',
    },
    speaksEnglish: true,
    smallAvatar: '332y4W2lUF2E',
    avatar: '1zLTdv1Wwp6w',
    profilePicture: 'OWKcu20HcUN',
    languages: [
      {
        name: {
          firstName: 'Артём',
          lastName: 'Яроцкий',
        },
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2023-12-06',
      year: 2023,
      month: 12,
      day: 6,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '3vCxvy3G8w6D',
    username: 'badbaka',
    name: {
      firstName: 'Danila',
      lastName: 'Filkin',
    },
    speaksEnglish: true,
    smallAvatar: '2X8WhD4LfU9V',
    avatar: '2Mwyc02VCt2S',
    profilePicture: '2WyoEK2lAphd',
    languages: [],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: {
      iso: '2024-03-16T03:00:00.000Z',
      timestamp: 1710558000000,
    },
    joined: {
      iso: '2024-02-21',
      year: 2024,
      month: 2,
      day: 21,
    },
    leftAt: {
      iso: '2024-03-16T03:00:00.000Z',
      timestamp: 1710558000000,
    },
    external: false,
    externalLight: null,
  },
  {
    id: '11Seqe1pwajV',
    username: 'edm',
    name: {
      firstName: 'Ed',
      lastName: 'Makriy',
    },
    speaksEnglish: true,
    smallAvatar: 'K2E4g1htE6n',
    avatar: '1xUkKJ0M8hvb',
    profilePicture: 'conRW1wiIeb',
    languages: [
      {
        name: {
          firstName: 'Эдуард',
          lastName: 'Макрий',
        },
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2019-12-21',
      year: 2019,
      month: 12,
      day: 21,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '2POVVv2gEype',
    username: 'eantdz',
    name: {
      firstName: 'Eduard',
      lastName: 'Antadze',
    },
    speaksEnglish: true,
    smallAvatar: 'Fz6PX1PNfnF',
    avatar: 'VYtqH17uvYd',
    profilePicture: 'gny7c1LD4ie',
    languages: [
      {
        name: null,
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2024-02-15',
      year: 2024,
      month: 2,
      day: 15,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '1DWRLD1Eu6j5',
    username: 'chi',
    name: {
      firstName: 'Ilya',
      lastName: 'Chernyak',
    },
    speaksEnglish: true,
    smallAvatar: '1F7PTk01gU93',
    avatar: 'oMjnH1Phdta',
    profilePicture: '3nFNfW3n6ULw',
    languages: [
      {
        name: null,
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2024-03-06',
      year: 2024,
      month: 3,
      day: 6,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '1qATMB1r6ZHH',
    username: 'ls',
    name: {
      firstName: 'Leonid',
      lastName: 'Sharov',
    },
    speaksEnglish: true,
    smallAvatar: '4ZVUE14HUwpR',
    avatar: '1VRnEi1rCdY7',
    profilePicture: '3KqObj2jarsQ',
    languages: [],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2021-09-20',
      year: 2021,
      month: 9,
      day: 20,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '40UlpG3rPrbo',
    username: 'mn',
    name: {
      firstName: 'Marat',
      lastName: 'Nizamov',
    },
    speaksEnglish: true,
    smallAvatar: '1CRmta0r9Q3g',
    avatar: '1moPCX0uF5pb',
    profilePicture: 'YQUUs1o6NCV',
    languages: [
      {
        name: null,
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: {
      iso: '2024-03-23T03:00:00.000Z',
      timestamp: 1711162800000,
    },
    joined: {
      iso: '2022-10-10',
      year: 2022,
      month: 10,
      day: 10,
    },
    leftAt: {
      iso: '2024-03-23T03:00:00.000Z',
      timestamp: 1711162800000,
    },
    external: false,
    externalLight: null,
  },
  {
    id: '1O88KM1BzNkd',
    username: 'mk@rees46.com',
    name: {
      firstName: 'Michael',
      lastName: 'Kechinov',
    },
    speaksEnglish: true,
    smallAvatar: '4fDGlq3TN9YQ',
    avatar: '30zpVa2ZZWXk',
    profilePicture: '1mD1Pn0SLI6e',
    languages: [
      {
        name: null,
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2019-12-20',
      year: 2019,
      month: 12,
      day: 20,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '1yiVLD0ZO6kx',
    username: 'mzqwe',
    name: {
      firstName: 'Mikhail',
      lastName: 'Zakrevskiy',
    },
    speaksEnglish: true,
    smallAvatar: null,
    avatar: null,
    profilePicture: null,
    languages: [
      {
        name: null,
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2019-12-23',
      year: 2019,
      month: 12,
      day: 23,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '10x6Nd0rYxin',
    username: 'nelfimov',
    name: {
      firstName: 'Nikita',
      lastName: 'Elfimov',
    },
    speaksEnglish: true,
    smallAvatar: '29jVAZ0UScEp',
    avatar: '3cZUHC3Frc8n',
    profilePicture: '4X9ngN4Iur9h',
    languages: [],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2024-01-29',
      year: 2024,
      month: 1,
      day: 29,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '1fvenP05WAJs',
    username: 'pp',
    name: {
      firstName: 'Pavel',
      lastName: 'Popov',
    },
    speaksEnglish: true,
    smallAvatar: '3mpJZK37pweW',
    avatar: '3QZkla3Lpm2y',
    profilePicture: 'pNqqV1RxQXS',
    languages: [
      {
        name: {
          firstName: 'Павел',
          lastName: 'Попов',
        },
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2023-04-03',
      year: 2023,
      month: 4,
      day: 3,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '4ArcGu4J3Um5',
    username: 'sr',
    name: {
      firstName: 'Roman',
      lastName: 'Savko',
    },
    speaksEnglish: true,
    smallAvatar: '4fRNZA2ZF7PQ',
    avatar: '3c6ewR39eLKf',
    profilePicture: '28DjTd25VGVe',
    languages: [
      {
        name: {
          firstName: 'Роман',
          lastName: 'Савко',
        },
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2024-02-16',
      year: 2024,
      month: 2,
      day: 16,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
  {
    id: '3D6fTi3c3ncM',
    username: 'nixx',
    name: {
      firstName: 'Sergey',
      lastName: 'Odintsov',
    },
    speaksEnglish: true,
    smallAvatar: '1WSgoK2D5WzS',
    avatar: '36vDvO3w5uvX',
    profilePicture: '23l5ad1AHj11',
    languages: [
      {
        name: {
          firstName: 'Сергей',
          lastName: 'Одинцов',
        },
        language: {
          id: '1JP9SZ0XILma',
        },
        languageCode: 'ru',
      },
    ],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: {
      iso: '2024-03-16T04:00:00.000Z',
      timestamp: 1710561600000,
    },
    joined: {
      iso: '2019-12-20',
      year: 2019,
      month: 12,
      day: 20,
    },
    leftAt: {
      iso: '2024-03-16T03:00:00.000Z',
      timestamp: 1710558000000,
    },
    external: false,
    externalLight: null,
  },
  {
    id: '48ePJf2OgLKo',
    username: 'DavidGegia',
    name: {
      firstName: 'Давид',
      lastName: 'Гегия',
    },
    speaksEnglish: true,
    smallAvatar: '1NWYZS1qmdGx',
    avatar: '1R6rOw0WGgOA',
    profilePicture: '3QPsra3edGzs',
    languages: [],
    archived: false,
    notAMember: false,
    suspended: false,
    suspendedAt: null,
    joined: {
      iso: '2024-02-27',
      year: 2024,
      month: 2,
      day: 27,
    },
    leftAt: null,
    external: false,
    externalLight: null,
  },
]
