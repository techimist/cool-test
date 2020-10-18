const PRODUCT_LINKS_LIST = [
  {
    title: "Maxon One",
    link: "#"
  },
  {
    title: "Cinema 4D",
    link: "#"
  },
  {
    title: "Redshift",
    link: "#"
  },
  {
    title: "C4D + Redshift",
    link: "#"
  }
];

const NEWS_LINKS_LIST = [
  {
    title: "News Room",
    link: "#"
  },
  {
    title: "Events",
    link: "#"
  }
];

const LEARN_LINKS_LIST = [
  {
    title: "Training Partners",
    link: "#"
  },
  {
    title: "Certification",
    link: "#"
  }
];

const MOBILE_NAV_CONFIG = [
  {
    title: "Search",
    iconComponent: "SearchIcon",
    component: "MobileNavSearch",
    showInner: true,
  },
  {
    title: "Products",
    iconComponent: "ChevronIcon",
    component: "MobileNavInnerList",
    showInner: true,
    componentProps: { linkList: PRODUCT_LINKS_LIST }
  },
  {
    title: "News",
    iconComponent: "ChevronIcon",
    component: "MobileNavInnerList",
    showInner: true,
    componentProps: { linkList: NEWS_LINKS_LIST }
  },
  {
    title: "Learn",
    iconComponent: "ChevronIcon",
    component: "MobileNavInnerList",
    showInner: true,
    componentProps: { linkList: LEARN_LINKS_LIST }
  },
  {
    title: "Try",
    link: "#",
  },
  {
    title: "Buy",
    link: "#",
  },
  {
    title: "Language",
    iconComponent: "EarthIcon",
    component: "MobileNavInnerList",
    showInner: true,
    componentProps: { linkList: PRODUCT_LINKS_LIST }
  },
  {
    title: "Sign in",
    link: "#",
    iconComponent: "UserIcon"
  }
];

export { MOBILE_NAV_CONFIG };
