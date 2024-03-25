import markAvatar from "./assets/images/avatar-mark-webber.webp";
import angelaAvatar from "./assets/images/avatar-angela-gray.webp";
import rizkyAvatar from "./assets/images/avatar-rizky-hasanuddin.webp";
import jacobAvatar from "./assets/images/avatar-jacob-thompson.webp";
import kimberlyAvatar from "./assets/images/avatar-kimberly-smith.webp";
import nathanAvatar from "./assets/images/avatar-nathan-peterson.webp";
import annaAvatar from "./assets/images/avatar-anna-kim.webp";
import chessImage from "./assets/images/image-chess.webp";

const data = [
  {
    id: 1,
    name: "Mark Webber",
    avatar: markAvatar,
    action: "reacted to your recent post",
    actionOn: "My first tournament today!",
    timestamp: "1m ago",
    isRead: false,
  },
  {
    id: 2,
    name: "Angela Gray",
    avatar: angelaAvatar,
    action: "followed you",
    timestamp: "5m ago",
    isRead: false,
  },
  {
    id: 3,
    name: "Jacob Thompson",
    avatar: jacobAvatar,
    action: "has joined your group",
    actionOn: "Chess Club",
    timestamp: "1 day ago",
    isRead: false,
  },
  {
    id: 4,
    name: "Rizky Hasanuddin",
    avatar: rizkyAvatar,
    action: "sent you a private message",
    timestamp: "5 days ago",
    message: ` Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
    isRead: true,
  },
  {
    id: 5,
    name: "Kimberly Smith",
    avatar: kimberlyAvatar,
    action: "commented on your picture",
    picture: chessImage,
    timestamp: "1 week ago",
    isRead: true,
  },
  {
    id: 6,
    name: "Nathan Peterson",
    avatar: nathanAvatar,
    action: "reacted to your recent post ",
    actionOn: "5 end-game strategies to increase your win rate",
    timestamp: "2 weeks ago",
    isRead: true,
  },
  {
    id: 7,
    name: "Anna Kim",
    avatar: annaAvatar,
    action: "left the group",
    actionOn: "Chess Club",
    timestamp: "2 weeks ago",
    isRead: true,
  },
];

export default data;
