// import { db } from '~/plugins/firebase'

// const roomsCollection = db.collection('rooms')

export const state = () => ({
  // サンプルポストデータ
  feedRooms: [
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
  ],
  // room: {
  //   id: 3,
  //   members: [
  //     {
  //       id: 1,
  //       name: 'Tajima',
  //       episode: '九州出身',
  //       icon_url: 'https://image.flaticon.com/icons/svg/1808/1808676.svg',
  //       posted_at: '2020-04-10 00:00:00'
  //     },
  //     {
  //       id: 2,
  //       name: 'Goto',
  //       episode: 'トイプードル飼ってる',
  //       icon_url: 'https://image.flaticon.com/icons/svg/1808/1808676.svg',
  //       posted_at: '2019-04-10 00:00:00'
  //     }
  //   ],
  //   room_name: 'J株式会社',
  //   room_image: '',
  //   posted_at: '2019-04-10 00:00:00'
  // },
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

  // vuexfire でバインドするデータ一覧と投稿時に保持しておくデータ
  rooms: [],
  roomData: {
    id: null
  }
})

export const mutations = {
  ADD_POST_ID(state, id) {
    state.roomData.id = id
  }
}

export const actions = {
  // initRooms: firestoreAction(async ({ bindFirestoreRef }) => {
  //   await bindFirestoreRef(
  //     'rooms',
  //     roomsCollection.orderBy('posted_at', 'desc')
  //   )
  // }),
  addRoomId({ commit }, id) {
    commit('ADD_ROOM_ID', id)
  }
}
