import { BiPodcast, BiHomeAlt } from 'react-icons/bi';
import { HiOutlineUserGroup, HiOutlineNewspaper } from 'react-icons/hi';
import { MdOutlineHearing, MdRealEstateAgent, MdEmail } from 'react-icons/md';
import { CiBasketball, CiShoppingCart } from 'react-icons/ci';
import { ImStatsDots } from 'react-icons/im';
import { AiOutlineLineChart } from 'react-icons/ai';
import { TfiCup } from 'react-icons/tfi';
import { BsDice6 } from 'react-icons/bs';
import { GiTrophyCup } from 'react-icons/gi';
import { FaChartBar } from 'react-icons/fa';
import { MdSportsScore } from 'react-icons/md'; 

const more_news_icon = [
    {id:1, title: 'NCAAM Scores', icon: MdSportsScore, link: '#'},
    {id:2, title: 'NCAAM Ranking', icon: GiTrophyCup, link: '#'},
    {id:3, title: 'Podcasts', icon: BiPodcast, link: '/podcasts'},
    {id:4, title: 'NCAA Stats', icon: FaChartBar, link: '#'},
    {id:5, title: 'NBA Draft', icon: HiOutlineUserGroup, link: '#'},
];
 
const sidebar_icons = [
      { id: 1, title: "Home", icon: BiHomeAlt, link: '/' },
      { id: 2, title: "Podcasts", icon: BiPodcast, link: '/podcasts' },
      { id: 3, title: "Drafts", icon: HiOutlineUserGroup, link: '/draftss' },
      { id: 4, title: "NCAA News", icon: HiOutlineNewspaper, link: '/ncaa_news' },
      { id: 5, title: "NBA News", icon: HiOutlineNewspaper, link: 'nba_news' }
];

const more_nav_icons = [
      { id: 1, title: "Free Agency", icon: MdRealEstateAgent, link: '#' },
      { id: 2, title: "Odds", icon: BsDice6, link: '#' },
      { id: 3, title: "Rummors", icon: MdOutlineHearing, link: '#' },
      { id: 4, title: "Shop", icon: CiShoppingCart, link: '#' },
      { id: 5, title: "Stats", icon: ImStatsDots, link: '#' },
      { id: 6, title: "Players", icon: HiOutlineNewspaper, link: '#' },
      { id: 7, title: "Teams", icon: CiBasketball, link: '#' },
      { id: 8, title: "Standings", icon: TfiCup, link: '#' },
      { id: 9, title: "Charts", icon: AiOutlineLineChart, link: '#' },
      { id: 10, title: "Contact Us", icon: MdEmail, link: '/contact_us' }
];


export {
      sidebar_icons,
      more_nav_icons,
      more_news_icon
}