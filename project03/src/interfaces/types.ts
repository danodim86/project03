import { StaticImageData } from "next/image";

export interface NewestBlogData {
  card1: BlogsCardData;
  card2: BlogsCardData;
  event1: CarouselItemData;
  event2: CarouselItemData;
  jobAds: {
    title: string;
    image: string;
  }[];
}

export interface CarouselItemData {
  id: number;
  title: string;
  description: string;
  month: string;
  day: string;
  image: string;
}

export interface MostPopularBlog {
  paragraph1: string;
  paragraph2: string;
  mainTitle: string;
  buttonText: string;
}

export interface BlogsCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  type: string;
}

export interface AllBlogsProps {
  carouselItems: CarouselItemData[];
  mostPopularBlog: MostPopularBlog;
  filters: string[];
  newestBlog: NewestBlogData;
  blogsCardsSetOne: BlogsCardData[];
  blogsCardsSetTwo: BlogsCardData[];
}

export interface BlogItemProps {
  carouselItems: CarouselItemData[];
  blogInfoData: BlogItemType;
  similarBlogs: BlogsCardData[];
}

export interface HeroSectionProps {
  imageOne?: string | StaticImageData;
  imageTwo?: string | StaticImageData;
  children: React.ReactNode;
}

export interface CardItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
}

export interface CardsComponentProps {
  title: string;
  data: BlogsCardData[];
  disableAnimation?: boolean;
}

export interface CarouselProps {
  carouselItems: CarouselItemData[];
}

export interface CarouselItemProps {
  item: CarouselItemData;
}

export interface LinkButtonProps {
  title: string;
  image: StaticImageData;
  href: string;
  content: string;
}

export interface OrangeBtnProps {
  text: string;
  href: string;
}

export interface BlogItemType {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  type: string;
  author: string;
  issueDate: string;
  authorImage: string;
  facebookLink: string;
  twitterLink: string;
  linkedinLink: string;
  starterText: string;
  subheading1: string;
  subparagraph1: string;
  subheading2: string;
  subparagraph2: string;
  subheading3: string;
  subparagraph3: string;
  subheading4: string;
  subparagraph4: string;
  subheading5: string;
  subparagraph5: string;
  subheading6: string;
  subparagraph6: string;
  likesNumber: number;
  heartsNumber: number;
  commentsNumber: number;
  comments: CommentType[];
  similarBlogsIds: string[];
}

export interface CommentType {
  name: string;
  timeAgo: string;
  image: string;
  content: string;
  likesNumber: number;
  repliesNumber: number;
  replies?: ReplyType[];
}

export interface ReplyType {
  name: string;
  timeAgo: string;
  image: string;
  content: string;
}

export interface UserRecommendation {
  name: string;
  image: string;
  minutesAgo: string;
  recommendation: string;
}

export interface Badges {
  level: string;
  type: string;
  image: string;
  imageBackground: string;
}

export interface ConnectionsList {
  name: string;
  image: string;
}

export interface BoughtCards {
  title: string;
  content?: string;
  date: string;
  location: string;
  image: string;
}

export interface UserDashboardInfo {
  name: string;
  image: string;
  city: string;
  occupation: string;
  phoneNum: string;
  email: string;
  bio: string;
  recommendations: UserRecommendation[];
  badges: Badges[];
  connectionsList: ConnectionsList[];
  boughtCards: BoughtCards[];
  cardDiscount: string;
  friendRecommendationCount: string;
}

export interface UserDashboardProps {
  carouselItems: CarouselItemData[];
  userDashboardInfo: UserDashboardInfo;
}

export interface SignupData {
  heroSection: {
    image1: string;
    image2: string;
    title: string;
    description: string;
  };
  benefitsOfSigningup: {
    image1benefits: string;
    image2benefits: string;
    corporate: string[];
    individual: string[];
  };
}

export interface AnnualConSectionOneProps {
  sectionOneTitle: string;
  sectionOneDate: string;
  location: string;
  sectionOneDescription: string;
  sectionOneImageOne: string;
  sectionOneImageTwo: string;
}

export interface AnnualConSectionTwoProps {
  days: string;
  speakers: string;
  restaurants: string;
  books: string;
}

export interface SpecialGuest {
  guestName: string;
  guestImage: string;
  guestDescription: string;
  guestQuote: string;
}

export interface DayPart {
  time: string;
  description: string;
  featuresList?: string[];
}

export interface DaySchedule {
  dayFirstHalf: DayPart[];
  daySecondHalf: DayPart[];
}

export interface Packet {
  type: string;
  amount: string;
  packetIncludes: string[];
}

export interface ConferenceInfo {
  heroSection: {
    backgroundImage: string;
    title: string;
    date: string;
  };
  sectionOne: AnnualConSectionOneProps;
  sectionTwo: AnnualConSectionTwoProps;
  specialGuests: SpecialGuest[];
  day1: DaySchedule;
  day2: DaySchedule;
  packets: Packet[];
  annualConCardsSetOne: BlogsCardData[];
  annualConCardsSetTwo: BlogsCardData[];
}

export interface AboutHeroSection {
  aboutHomepageImage1: string;
  aboutHomepageImage2: string;
  aboutHomepageTitle: string;
  aboutHomepageDescription: string;
  aboutHomepageButtonDescription: string;
  aboutHomepageButtonText: string;
}

export interface AboutPageSectionOneInterface {
  sectionOneTitle: string;
  sectionOneSubTitle: string;
  sectionOneParagraphOne: string;
  sectionOneImageOne: string;
  sectionOneMissionContent: string;
  sectionOneVisionContent: string;
  SectionOneTitleTwo: string;
  goalsParagraphs: string[];
  sectionOneImageTwo: string;
}

export interface AboutPageSectionTwoInterface {
  sectionTwoTitle: string;
  sectionTwoSubTitle: string;
  sectionTwoImage: string;
  sectionTwoParagraph1: string;
  sectionTwoParagraph2: string;
  sectionTwoParagraph3: string;
  sectionTwoParagraph4: string;
}

export interface AboutBoardUserItem {
  id: string;
  boardImage: string;
  baordName: string;
  boardDescription: string;
  socialMedia: string[];
}

export interface AboutPage {
  heroSection: AboutHeroSection;
  aboutPageSectionOne: AboutPageSectionOneInterface;
  aboutPageSectionTwo: AboutPageSectionTwoInterface;
  aboutPageSectionThree: {
    sectionThreeTitle: string;
    boardPeople: AboutBoardUserItem[];
  };
}

export interface EventsHeroSection {
  outstandingEventSubTitle: string;
  outstandingEventTitle: string;
  outstandingEventDescription: string;
  outstandingEventDate: string;
  outstnadingEventButtonText: string;
  outstandingEventImage1: string;
  outstandingEventImage2: string;
}

export interface EventsSectionOneCalendar {
  secOneCalTitle: string;
  secOneCalDescription: string;
}

export interface EventsPage {
  heroSection: EventsHeroSection;
  sectionOneCalendar: EventsSectionOneCalendar;
  filters: string[];
  HRCafeCards: BlogsCardData[];
  HRWeekendCards: BlogsCardData[];
  HRWebinarCards: BlogsCardData[];
  HRConferenceCards: BlogsCardData[];
}

export interface EventsItemAgenda{
  agendaTitle: string;
  agendaDate: string;
  firstHalf: DayPart[];
  secondHalf: DayPart[];
}

export interface EventsItemSpeaker{
  image: string;
  name: string;
  role: string;
  socialMedia: string[];
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  type: string;
  date: string;
  topic: string;
  eventAbout: string;
  eventGoal: string;
  imageOne: string;
  eventAgenda: EventsItemAgenda[];
  eventSpeakers: EventsItemSpeaker[];
  individualPrice: string;
  companyPrice: string;
  pricesImage: string;
  similarEvents: string[];
}


export interface EventCardInfo{
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  type: string;
}
