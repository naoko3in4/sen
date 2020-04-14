// import { db } from '~/plugins/firebase'

// const postsCollection = db.collection('posts')

export const state = () => ({
  // サンプルポストデータ
  rooms: [
    {
      id: 1,
      members: [
        {
          id: 1,
          name: 'Kaori',
          episode: '息子が大学生・元保育園勤務',
          icon_url: 'https://image.flaticon.com/icons/svg/1808/1808676.svg',
          posted_at: '2019-06-09 00:00:00'
        },
        {
          id: 2,
          name: 'Emi',
          episode: '浅草在住・お酒が好き',
          icon_url: 'https://image.flaticon.com/icons/svg/1808/1808676.svg',
          posted_at: '2019-06-09 00:00:00'
        },
        {
          id: 3,
          name: 'Yuki',
          episode: '娘が3人・長女がアメリカ留学',
          icon_url: 'https://image.flaticon.com/icons/svg/1808/1808676.svg',
          posted_at: '2019-06-09 00:00:00'
        }
      ],
      room_name: 'I株式会社',
      room_image: '',
      posted_at: '2019-06-09 00:00:00'
    },
    {
      id: 2,
      members: [
        {
          id: 1,
          name: 'Nagata',
          episode: '調味料は塩コショウが一番好き',
          icon_url: 'https://image.flaticon.com/icons/svg/1808/1808676.svg',
          posted_at: '2020-04-10 00:00:00'
        },
        {
          id: 2,
          name: 'Kino',
          episode: '紫にもしたことあり。ピンクがお気に入り',
          icon_url: 'https://image.flaticon.com/icons/svg/1808/1808676.svg',
          posted_at: '2019-04-10 00:00:00'
        }
      ],
      room_name: 'E美容室',
      room_image: '',
      posted_at: '2019-04-10 00:00:00'
    }
  ]
})
