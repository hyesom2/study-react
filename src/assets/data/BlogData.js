const ProductBlogData = [
  {
    id: 0,
    title: "holiday collection",
    content: "소중한 사람들에게 마음을 전하는 시간, 지금 홀리데이 컬렉션을 살펴보세요.​",
    imgUrl: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/kr_holiday_commercial_fw23_launch_hp_card_asset_d_68c499f221.jpg",
    link: "https://www.adidas.co.kr/must_haves",
  },
  {
    id: 1,
    title: "special offer",
    content: "한정 기간 내 2개 구매 시 20% 할인, 3개 이상 구매 시 30% 할인​",
    imgUrl: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/kr_fo_push_commercial_fw23_launch_hp_card_asset_d_6a457cf662.jpg",
    link: "https://www.adidas.co.kr/extra_sale",
  },
  {
    id: 2,
    title: "supernova rise​",
    content: "꿈같은 편안함. 슈퍼노바​​",
    imgUrl: "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/kr_supernova_running_ss24_launch_hp_card_asset_d_9f467969a4.gif",
    link: "https://www.adidas.co.kr/supernova",
  },
  {
    id: 3,
    title: "originals football icons",
    content: "희미해진 적 없는 클래식, 영원한 선명함으로​",
    imgUrl: "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/kr_feds_bringback_adicolour_originals_ss24_launch_hp_card_asset_d_b283f65e59.gif",
    link: "https://www.adidas.co.kr/federations-football",
  },
  {
    id: 4,
    title: "campus 00s",
    content: "팔로우하고 싶은 뉴 클래식​",
    imgUrl: "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/kr_campus_00s_originals_fw23_launch_hp_card_asset3_d_aff572a568.gif",
    link: "https://www.adidas.co.kr/campus",
  },
  {
    id: 5,
    title: "따뜻함, 그 이상의 퍼프 재킷",
    content: "완벽한 비율의 퍼프 실루엣. 따뜻하게 몸을 감싸는 기능성까지.​",
    imgUrl: "https://brand.assets.adidas.com/video/upload/if_w_gt_300,w_300/originals_fw23_puffed_jackets_dotcom_hp_teaser_carousel_m_d3b878868f.mp4",
    link: "https://www.adidas.co.kr/originals?grid=true",
  },
  {
    id: 6,
    title: "y-3 fall/winter chapter3",
    content: "스포츠를 보는 완벽히 새로운 시선. 애슬레틱 룩에서 영감을 받은 Y-3의 새로운 컬렉션.​",
    imgUrl: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/y3_fw23_chapter3_mglp_tcc_d_c7aacd66fc.jpg",
    link: "https://www.adidas.co.kr/y_3",
  },
  {
    id: 7,
    title: "mc87 4d golf 재입고",
    content: "Make your own 4D Classic. 4D 테크놀로지와 만난 클래식 골프화​",
    imgUrl: "https://brand.assets.adidas.com/video/upload/if_w_gt_300,w_300/kr_golf_mc87_golf_fw23_sustain_hp_card_asset_m_7a9492f556.mp4",
    link: "https://www.adidas.co.kr/mc87-4d-%EC%8A%A4%ED%8C%8C%EC%9D%B4%ED%81%AC%EB%A6%AC%EC%8A%A4/ID0225.html",
  },
  // {
  //   title: '하나의 슈퍼스타, 그로부터 시작된 수천 개의 이야기', 
  //   content: '농구 코트에서 태어나 문화의 아이콘으로 자리잡은 슈퍼스타의 스토리를 만나보세요.',
  //   image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/HP_BLOG_TC_superstar_d_78091347b9.jpg',
  //   url: 'https://www.adidas.co.kr/blog/1066614'
  // },
  // {
  //   title: '하나의 가젤: 그로부터 시작된 수천 개의 이야기', 
  //   content: '트레이닝화로 시작해 스타일 아이콘으로 자리잡은 가젤의  스토리를 만나보세요.',
  //   image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/HP_BLOG_TC_gazelle_d_94861200a4.jpg',
  //   url: 'https://www.adidas.co.kr/blog/1066612'
  // },
  // {
  //   title: '하나의 삼바: 그로부터 시작된 수천 개의 이야기', 
  //   content: '축구화로 시작해 스트릿 패션의 아이코닉한 상징으로 자리잡은 삼바의 스토리를 만나보세요.',
  //   image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/HP_BLOG_TC_samba_d_3fcc88537e.jpg',
  //   url: 'https://www.adidas.co.kr/blog/1066613'
  // },
  // {
  //   title: '힙합의 슈퍼스타: 음악은 스니커즈 씬을 어떻게 움직이는가', 
  //   content: '힙합 패션과 스니커즈 스타일로 역사를 읽다.',
  //   image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/blog_sst_hip_hop_tc_0831_d_99f5aad845.jpg',
  //   url: 'https://www.adidas.co.kr/blog/1003128'
  // }
];

const StoryBlogData = [
  {
    id: 0,
    title: '아디다스 삼바 사이즈 가이드',
    content: '삼바의 완벽한 핏과 착용감으로 클래식 아디다스 헤리티지를 새롭게 탐험하다.',
    imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/240103_hp_tcc_blog_samba_size_guide_card_d_a687301efc.jpg',
    link: 'https://www.adidas.co.kr/blog/1059820',
  },
  {
    id: 1,
    title: '하나의 슈퍼스타, 그로부터 시작된 수천 개의 이야기',
    content: '농구 코트에서 태어나 문화의 아이콘으로 자리잡은 슈퍼스타의 스토리를 만나보세요.',
    imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/HP_BLOG_TC_superstar_m_3188d0c917.jpg',
    link: 'https://www.adidas.co.kr/blog/1066614',
  },
  {
    id: 2,
    title: '하나의 가젤: 그로부터 시작된 수천 개의 이야기',
    content: '트레이닝화로 시작해 스타일 아이콘으로 자리잡은 가젤의  스토리를 만나보세요.',
    imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/HP_BLOG_TC_gazelle_t_4f504a357a.jpg',
    link: 'https://www.adidas.co.kr/blog/1066612',
  },
  {
    id: 3,
    title: '하나의 삼바: 그로부터 시작된 수천 개의 이야기',
    content: '축구화로 시작해 스트릿 패션의 아이코닉한 상징으로 자리잡은 삼바의 스토리를 만나보세요. ',
    imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/HP_BLOG_TC_samba_d_3fcc88537e.jpg',
    link: 'https://www.adidas.co.kr/blog/1066613',
  },
];

export { ProductBlogData, StoryBlogData };