const ProductLinksList = [
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

const NewsLinksList = [
  {
    title: "News Room",
    link: "#"
  },
  {
    title: "Events",
    link: "#"
  }
];

const LearnLinksList = [
  {
    title: "Training Partners",
    link: "#"
  },
  {
    title: "Certification",
    link: "#"
  }
];

const MobileNavConfig = [
  {
    title: "Search",
    icon: "Search",
    component: "MobileSearch"
  },
  {
    title: "Products",
    icon: "Chevron",
    component: "MobileNavInnerList",
    componentProps: { linkList: ProductLinksList }
  },
  {
    title: "News",
    icon: "Chevron",
    component: "MobileNavInnerList",
    componentProps: { linkList: NewsLinksList }
  },
  {
    title: "Learn",
    icon: "Chevron",
    component: "MobileNavInnerList",
    componentProps: { linkList: LearnLinksList }
  },
  {
    title: "Try",
    link: "#",
    component: "Link"
  },
  {
    title: "Buy",
    link: "#",
    component: "Link"
  },
  {
    title: "Language",
    icon: "Earth",
    component: "MobileNavInnerList",
    componentProps: { linkList: ProductLinksList }
  },
  {
    title: "Sign in",
    link: "#",
    icon: "User"
  }
];

export { MobileNavConfig };
