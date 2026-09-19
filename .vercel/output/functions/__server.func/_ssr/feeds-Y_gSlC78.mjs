import { i as __toESM } from "../_runtime.mjs";
import { A as ForwardRef$6, F as ForwardRef$2, L as require_react, S as ForwardRef$4, b as ForwardRef$9, d as ForwardRef$7, h as ForwardRef$8, i as ForwardRef$3, k as ForwardRef$10, n as ForwardRef, t as ForwardRef$5, v as ForwardRef$1 } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1 } from "./router-compat-NKRH5b0P.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-BMwQYxkE.mjs";
import { t as Avatar } from "./Avatar-DbRwqPd6.mjs";
import { c as getChats, i as createChat, l as getContacts, n as appendMessage } from "./persistence-DsYk-QoD.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feeds-Y_gSlC78.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatTimeAgo(dateString) {
	const date = new Date(dateString);
	const diff = Math.max(0, Date.now() - date.getTime());
	const minutes = Math.floor(diff / 6e4);
	const hours = Math.floor(diff / 36e5);
	const days = Math.floor(diff / 864e5);
	if (minutes < 1) return "Just now";
	if (minutes < 60) return `${minutes}m`;
	if (hours < 24) return `${hours}hr`;
	if (days < 7) return `${days}day${days === 1 ? "" : "s"}`;
	return date.toLocaleDateString();
}
function normalizeFeed(feed) {
	return {
		...feed,
		id: String(feed.id),
		userId: feed.profile_id || feed.user_id,
		userName: feed.user_name || feed.author_name || "Nexus member",
		userAvatar: feed.user_avatar || feed.author_avatar || null,
		createdAt: feed.created_at,
		isAdminPost: Boolean(feed.is_admin_post),
		likes: Number(feed.likes || 0),
		likedBy: [],
		comments: Array.isArray(feed.comments) ? feed.comments : []
	};
}
async function getFeeds() {
	if (!supabase || !isSupabaseConfigured()) return [];
	const { data, error } = await supabase.from("feed_posts").select("id, profile_id, user_name, user_avatar, author_name, author_avatar, content, type, status, is_admin_post, likes, comments, created_at").eq("status", "active").order("created_at", { ascending: false });
	if (error) throw error;
	return (data || []).map(normalizeFeed);
}
function subscribeToFeeds(onChange) {
	if (!supabase || !isSupabaseConfigured()) return null;
	return supabase.channel("feed-posts").on("postgres_changes", {
		event: "*",
		schema: "public",
		table: "feed_posts"
	}, onChange).subscribe();
}
function unsubscribeFromFeeds(channel) {
	if (channel && supabase) supabase.removeChannel(channel);
}
var EMOJI_CATEGORIES = [
	{
		name: "Smileys",
		icon: "😀",
		emojis: [
			{
				char: "😀",
				name: "happy grin smile smiley"
			},
			{
				char: "😃",
				name: "happy grin smile smiley"
			},
			{
				char: "😄",
				name: "happy grin smile smiley"
			},
			{
				char: "😁",
				name: "grin smile happy beaming"
			},
			{
				char: "😆",
				name: "grin smile happy squinting"
			},
			{
				char: "😅",
				name: "sweat smile happy relieved"
			},
			{
				char: "😂",
				name: "joy tears laugh happy"
			},
			{
				char: "🤣",
				name: "rofl laugh happy rolling"
			},
			{
				char: "😊",
				name: "smile happy blush warm"
			},
			{
				char: "😇",
				name: "halo innocent angel"
			},
			{
				char: "🙂",
				name: "slight smile"
			},
			{
				char: "🙃",
				name: "upside down silly"
			},
			{
				char: "😉",
				name: "wink sly"
			},
			{
				char: "😌",
				name: "relieved content calm"
			},
			{
				char: "😍",
				name: "heart eyes love warm"
			},
			{
				char: "🥰",
				name: "love hearts blush warm"
			},
			{
				char: "😘",
				name: "blow kiss love"
			},
			{
				char: "😗",
				name: "kiss"
			},
			{
				char: "😙",
				name: "kiss smile"
			},
			{
				char: "😚",
				name: "kiss closed eyes"
			},
			{
				char: "😋",
				name: "yum delicious food"
			},
			{
				char: "😛",
				name: "tongue silly"
			},
			{
				char: "😝",
				name: "tongue squinting silly"
			},
			{
				char: "😜",
				name: "tongue winking silly"
			},
			{
				char: "🤪",
				name: "zany crazy silly"
			},
			{
				char: "🤨",
				name: "raised eyebrow skeptical"
			},
			{
				char: "🧐",
				name: "monocle smart"
			},
			{
				char: "🤓",
				name: "nerd smart book"
			},
			{
				char: "😎",
				name: "cool sunglasses sun"
			},
			{
				char: "🥸",
				name: "disguise mask"
			},
			{
				char: "🤩",
				name: "star struck excited"
			},
			{
				char: "🥳",
				name: "party celebrate"
			},
			{
				char: "😏",
				name: "smirk sly"
			},
			{
				char: "😒",
				name: "unamused annoyed"
			},
			{
				char: "😞",
				name: "disappointed sad"
			},
			{
				char: "😔",
				name: "pensive sad"
			},
			{
				char: "😟",
				name: "worried sad"
			},
			{
				char: "😕",
				name: "confused"
			},
			{
				char: "🙁",
				name: "frown sad"
			},
			{
				char: "☹️",
				name: "frown sad"
			},
			{
				char: "😣",
				name: "persevere struggle"
			},
			{
				char: "😖",
				name: "confounded struggle"
			},
			{
				char: "😫",
				name: "tired weary"
			},
			{
				char: "😩",
				name: "weary tired"
			},
			{
				char: "🥺",
				name: "pleading beg sad"
			},
			{
				char: "😢",
				name: "cry tear sad"
			},
			{
				char: "😭",
				name: "sob cry tear sad loud"
			},
			{
				char: "😤",
				name: "triumph angry steam"
			},
			{
				char: "😠",
				name: "angry mad annoyed"
			},
			{
				char: "😡",
				name: "rage angry mad red"
			}
		]
	},
	{
		name: "Gestures",
		icon: "👍",
		emojis: [
			{
				char: "👍",
				name: "thumbs up like ok"
			},
			{
				char: "👎",
				name: "thumbs down dislike no"
			},
			{
				char: "👊",
				name: "fist punch hit"
			},
			{
				char: "✊",
				name: "fist raised power"
			},
			{
				char: "🤛",
				name: "fist left"
			},
			{
				char: "🤜",
				name: "fist right"
			},
			{
				char: "🤞",
				name: "fingers crossed luck"
			},
			{
				char: "✌️",
				name: "victory peace sign"
			},
			{
				char: "🤟",
				name: "love sign rock"
			},
			{
				char: "🤘",
				name: "horns metal rock"
			},
			{
				char: "👌",
				name: "ok sign correct"
			},
			{
				char: "🤌",
				name: "pinched fingers italian"
			},
			{
				char: "🤏",
				name: "pinching small"
			},
			{
				char: "👈",
				name: "point left"
			},
			{
				char: "👉",
				name: "point right"
			},
			{
				char: "👆",
				name: "point up"
			},
			{
				char: "👇",
				name: "point down"
			},
			{
				char: "☝️",
				name: "point up hand"
			},
			{
				char: "✋",
				name: "raised hand stop"
			},
			{
				char: "🤚",
				name: "raised back hand"
			},
			{
				char: "🖐️",
				name: "hand fingers splayed"
			},
			{
				char: "🖖",
				name: "vulcan salute sci fi"
			},
			{
				char: "👋",
				name: "wave hello goodbye"
			},
			{
				char: "🤙",
				name: "call me phone"
			},
			{
				char: "💪",
				name: "flex bicep strong strength"
			},
			{
				char: "🙏",
				name: "please pray thanks high five"
			},
			{
				char: "🤝",
				name: "handshake agree deal"
			},
			{
				char: "👏",
				name: "clap applaud"
			},
			{
				char: "🙌",
				name: "hooray celebrate hands"
			},
			{
				char: "🫶",
				name: "heart hands love"
			}
		]
	},
	{
		name: "Hearts",
		icon: "❤️",
		emojis: [
			{
				char: "❤️",
				name: "red heart love"
			},
			{
				char: "🧡",
				name: "orange heart love"
			},
			{
				char: "💛",
				name: "yellow heart love"
			},
			{
				char: "💚",
				name: "green heart love"
			},
			{
				char: "💙",
				name: "blue heart love"
			},
			{
				char: "💜",
				name: "purple heart love"
			},
			{
				char: "🖤",
				name: "black heart love"
			},
			{
				char: "🤍",
				name: "white heart love"
			},
			{
				char: "🤎",
				name: "brown heart love"
			},
			{
				char: "💔",
				name: "broken heart sad"
			},
			{
				char: "❤️‍🔥",
				name: "heart on fire love"
			},
			{
				char: "❤️‍🩹",
				name: "mending heart heal"
			},
			{
				char: "❣️",
				name: "heart exclamation"
			},
			{
				char: "💕",
				name: "two hearts love"
			},
			{
				char: "💞",
				name: "revolving hearts love"
			},
			{
				char: "💓",
				name: "beating heart love"
			},
			{
				char: "💗",
				name: "growing heart love"
			},
			{
				char: "💖",
				name: "sparkle heart love"
			},
			{
				char: "💘",
				name: "arrow heart love"
			},
			{
				char: "💝",
				name: "ribbon heart gift"
			}
		]
	},
	{
		name: "Animals",
		icon: "🐱",
		emojis: [
			{
				char: "🐶",
				name: "dog puppy pet animal"
			},
			{
				char: "🐱",
				name: "cat kitten pet animal"
			},
			{
				char: "🐭",
				name: "mouse rat animal"
			},
			{
				char: "🐹",
				name: "hamster animal"
			},
			{
				char: "🐰",
				name: "rabbit bunny animal"
			},
			{
				char: "🦊",
				name: "fox animal"
			},
			{
				char: "🐻",
				name: "bear animal"
			},
			{
				char: "🐼",
				name: "panda animal"
			},
			{
				char: "🐨",
				name: "koala animal"
			},
			{
				char: "🐯",
				name: "tiger animal"
			},
			{
				char: "🦁",
				name: "lion king animal"
			},
			{
				char: "🐮",
				name: "cow animal"
			},
			{
				char: "🐷",
				name: "pig animal"
			},
			{
				char: "🐸",
				name: "frog animal"
			},
			{
				char: "🐵",
				name: "monkey animal"
			},
			{
				char: "🐔",
				name: "chicken bird animal"
			},
			{
				char: "🐧",
				name: "penguin bird animal"
			},
			{
				char: "🐦",
				name: "bird animal"
			},
			{
				char: "🦆",
				name: "duck bird animal"
			},
			{
				char: "🦅",
				name: "eagle bird animal"
			},
			{
				char: "🦉",
				name: "owl bird animal"
			},
			{
				char: "🦋",
				name: "butterfly insect"
			},
			{
				char: "🐝",
				name: "bee insect honey"
			},
			{
				char: "🐛",
				name: "bug caterpillar insect"
			},
			{
				char: "🐌",
				name: "snail insect"
			}
		]
	},
	{
		name: "Food",
		icon: "🍎",
		emojis: [
			{
				char: "🍏",
				name: "apple green fruit"
			},
			{
				char: "🍎",
				name: "apple red fruit"
			},
			{
				char: "🍐",
				name: "pear fruit"
			},
			{
				char: "🍊",
				name: "orange tangerine fruit"
			},
			{
				char: "🍋",
				name: "lemon fruit"
			},
			{
				char: "🍌",
				name: "banana fruit"
			},
			{
				char: "🍉",
				name: "watermelon fruit"
			},
			{
				char: "🍇",
				name: "grape fruit"
			},
			{
				char: "🍓",
				name: "strawberry fruit berry"
			},
			{
				char: "🫐",
				name: "blueberry fruit berry"
			},
			{
				char: "🍔",
				name: "hamburger burger fast food"
			},
			{
				char: "🍟",
				name: "fries chips fast food"
			},
			{
				char: "🍕",
				name: "pizza cheese fast food"
			},
			{
				char: "🥪",
				name: "sandwich bread food"
			},
			{
				char: "🌮",
				name: "taco mexican food"
			},
			{
				char: " Donuts",
				name: "donut sweet cake"
			},
			{
				char: "🍪",
				name: "cookie sweet biscuit"
			},
			{
				char: "🎂",
				name: "cake birthday sweet"
			},
			{
				char: "🍰",
				name: "cake slice sweet"
			},
			{
				char: "🥤",
				name: "soda cup drink"
			}
		]
	},
	{
		name: "Symbols",
		icon: "💡",
		emojis: [
			{
				char: "💡",
				name: "bulb light idea"
			},
			{
				char: "🕯️",
				name: "candle light"
			},
			{
				char: "🔦",
				name: "flashlight light"
			},
			{
				char: "🔔",
				name: "bell ring notification"
			},
			{
				char: "🔕",
				name: "bell mute silent"
			},
			{
				char: "🎵",
				name: "music note song"
			},
			{
				char: "🎶",
				name: "music notes song"
			},
			{
				char: "🎧",
				name: "headphones music"
			},
			{
				char: "🎨",
				name: "palette paint art"
			},
			{
				char: "🎮",
				name: "controller game video"
			},
			{
				char: "🎯",
				name: "target bullseye hit"
			},
			{
				char: "🔮",
				name: "crystal ball magic"
			},
			{
				char: "🎈",
				name: "balloon party celebrate"
			},
			{
				char: "🎉",
				name: "party popper celebrate"
			},
			{
				char: "🎊",
				name: "confetti celebrate"
			},
			{
				char: "🎁",
				name: "gift present box"
			},
			{
				char: "🎀",
				name: "ribbon bow"
			}
		]
	}
];
function UniversalEmojiPicker({ onSelect, onClose }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("Smileys");
	const filteredEmojis = search.trim() ? EMOJI_CATEGORIES.flatMap((cat) => cat.emojis).filter((emoji) => emoji.name.toLowerCase().includes(search.toLowerCase())) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 cursor-default",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative bg-card w-full max-w-sm rounded-2xl shadow-xl overflow-hidden border border-border flex flex-col h-[400px] z-10 animate-in fade-in zoom-in-95 duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 border-b border-border flex items-center justify-between bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-foreground text-sm",
						children: "Select Reaction Emoji"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1 hover:bg-muted rounded-full transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-4 h-4 text-muted-foreground" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-2 border-b border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search emojis...",
							value: search,
							onChange: (e) => setSearch(e.target.value),
							className: "w-full pl-8 pr-3 py-1.5 bg-muted border-none rounded-lg text-xs text-foreground focus:ring-1 focus:ring-primary focus:outline-none"
						})]
					})
				}),
				!search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-around border-b border-border bg-muted/20 py-1 flex-shrink-0",
					children: EMOJI_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveCategory(category.name),
						className: `p-1.5 rounded-lg text-base hover:bg-muted transition-colors ${activeCategory === category.name ? "bg-muted scale-110 shadow-sm border border-border/60" : ""}`,
						title: category.name,
						children: category.icon
					}, category.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-3",
					children: search ? filteredEmojis.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-muted-foreground mt-8",
						children: "No matching emojis"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-6 gap-2",
						children: filteredEmojis.map((emoji, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelect(emoji.char),
							className: "text-2xl w-10 h-10 flex items-center justify-center hover:bg-muted active:scale-90 rounded-lg transition",
							children: emoji.char
						}, index))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-6 gap-2",
						children: EMOJI_CATEGORIES.find((cat) => cat.name === activeCategory)?.emojis.map((emoji, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelect(emoji.char),
							className: "text-2xl w-10 h-10 flex items-center justify-center hover:bg-muted active:scale-90 rounded-lg transition",
							children: emoji.char
						}, index))
					})
				})
			]
		})]
	});
}
function FeedsPage() {
	const [feeds, setFeeds] = (0, import_react.useState)([]);
	const [contacts, setContacts] = (0, import_react.useState)([]);
	const [activeCommentFeedId, setActiveCommentFeedId] = (0, import_react.useState)(null);
	const [activeShareFeedId, setActiveShareFeedId] = (0, import_react.useState)(null);
	const [commentInputs, setCommentInputs] = (0, import_react.useState)({});
	const [copiedStatus, setCopiedStatus] = (0, import_react.useState)(false);
	const [sharedStatus, setSharedStatus] = (0, import_react.useState)({});
	const [activeReactCommentId, setActiveReactCommentId] = (0, import_react.useState)(null);
	const [pickerTarget, setPickerTarget] = (0, import_react.useState)(null);
	const [, setTimeTick] = (0, import_react.useState)(0);
	const navigate = useNavigate$1();
	const { user } = useAuth();
	(0, import_react.useEffect)(() => {
		const loadContacts = async () => {
			const data = await getContacts(user?.id || user?.nexusId);
			setContacts(data);
		};
		loadContacts();
		const handleUpdate = () => loadContacts();
		window.addEventListener("nexus-contacts:updated", handleUpdate);
		return () => window.removeEventListener("nexus-contacts:updated", handleUpdate);
	}, [user?.id, user?.nexusId]);
	(0, import_react.useEffect)(() => {
		let active = true;
		const loadFeeds = async () => {
			try {
				const nextFeeds = await getFeeds();
				if (active) setFeeds(nextFeeds);
			} catch {
				if (active) setFeeds([]);
			}
		};
		loadFeeds();
		const channel = subscribeToFeeds(loadFeeds);
		return () => {
			active = false;
			unsubscribeFromFeeds(channel);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const intervalId = window.setInterval(() => setTimeTick((value) => value + 1), 3e4);
		return () => window.clearInterval(intervalId);
	}, []);
	(0, import_react.useEffect)(() => {
		setSharedStatus({});
		setCopiedStatus(false);
	}, [activeShareFeedId]);
	const toggleLike = (feedId) => {
		if (!user) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) {
				const isLiked = feed.likedBy?.includes(user.id);
				return {
					...feed,
					likedBy: isLiked ? feed.likedBy.filter((id) => id !== user.id) : [...feed.likedBy || [], user.id],
					likes: isLiked ? feed.likes - 1 : feed.likes + 1
				};
			}
			return feed;
		}));
	};
	const handleCommentInputChange = (feedId, value) => {
		setCommentInputs((prev) => ({
			...prev,
			[feedId]: value
		}));
	};
	const [activeReplyCommentId, setActiveReplyCommentId] = (0, import_react.useState)(null);
	const [replyInputs, setReplyInputs] = (0, import_react.useState)({});
	const handleLikeComment = (feedId, commentId) => {
		if (!user) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) return {
				...feed,
				comments: feed.comments.map((comment) => {
					if (comment.id === commentId) {
						const isLiked = comment.likedBy?.includes(user.id);
						return {
							...comment,
							likedBy: isLiked ? comment.likedBy.filter((id) => id !== user.id) : [...comment.likedBy || [], user.id],
							likes: isLiked ? (comment.likes || 0) - 1 : (comment.likes || 0) + 1
						};
					}
					return comment;
				})
			};
			return feed;
		}));
	};
	const handleReactComment = (feedId, commentId, emoji) => {
		if (!user) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) return {
				...feed,
				comments: feed.comments.map((comment) => {
					if (comment.id === commentId) {
						const previousReaction = comment.reactedBy?.[user.id];
						const reactions = { ...comment.reactions || {} };
						const reactedBy = { ...comment.reactedBy || {} };
						if (previousReaction) {
							if (reactions[previousReaction] > 0) {
								reactions[previousReaction]--;
								if (reactions[previousReaction] === 0) delete reactions[previousReaction];
							}
						}
						if (previousReaction !== emoji) {
							reactions[emoji] = (reactions[emoji] || 0) + 1;
							reactedBy[user.id] = emoji;
						} else delete reactedBy[user.id];
						return {
							...comment,
							reactions,
							reactedBy
						};
					}
					return comment;
				})
			};
			return feed;
		}));
	};
	const handleReplyInputChange = (commentId, value) => {
		setReplyInputs((prev) => ({
			...prev,
			[commentId]: value
		}));
	};
	const handleAddReply = (feedId, commentId) => {
		const text = replyInputs[commentId] || "";
		if (!text.trim()) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) return {
				...feed,
				comments: feed.comments.map((comment) => {
					if (comment.id === commentId) return {
						...comment,
						replies: [...comment.replies || [], {
							id: Date.now().toString(),
							userName: user?.fullName || user?.email?.split("@")[0] || "You",
							userAvatar: user?.avatarUrl || null,
							content: text.trim(),
							createdAt: (/* @__PURE__ */ new Date()).toISOString()
						}]
					};
					return comment;
				})
			};
			return feed;
		}));
		setReplyInputs((prev) => ({
			...prev,
			[commentId]: ""
		}));
	};
	const handleAddComment = (feedId) => {
		const commentText = commentInputs[feedId] || "";
		if (!commentText.trim()) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) return {
				...feed,
				comments: [...feed.comments, {
					id: Date.now().toString(),
					userName: user?.fullName || user?.email?.split("@")[0] || "You",
					userAvatar: user?.avatarUrl || null,
					content: commentText.trim(),
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					likes: 0,
					likedBy: [],
					reactions: {},
					reactedBy: {},
					replies: []
				}]
			};
			return feed;
		}));
		setCommentInputs((prev) => ({
			...prev,
			[feedId]: ""
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 flex flex-col bg-background text-foreground h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-10 p-4 border-b border-border flex items-center gap-4 bg-card shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate("/app"),
					className: "p-2 hover:bg-muted rounded-full transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "w-5 h-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-bold",
					children: "Feeds"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto p-4 space-y-4 max-w-2xl mx-auto w-full",
				children: [feeds.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: "No feed posts yet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Posts from your Nexus community will appear here."
					})]
				}), feeds.map((feed) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-card rounded-xl shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4 flex items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center w-10 h-10 rounded-full bg-primary/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "w-6 h-6 text-primary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: feed.userName
										}), feed.isAdminPost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium",
											children: "Nexus Badge"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: formatTimeAgo(feed.createdAt)
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-4 pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground leading-relaxed",
								children: feed.content
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-2 flex items-center justify-between text-muted-foreground text-sm border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$4, { className: "w-4 h-4 text-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feed.likes })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [feed.comments.length, " comments"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-2 py-1 flex items-center justify-between",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => toggleLike(feed.id),
									className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-muted transition",
									children: [feed.likedBy?.includes(user?.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$4, { className: "w-5 h-5 text-red-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "w-5 h-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: feed.likedBy?.includes(user?.id) ? "text-red-500 font-medium" : "text-muted-foreground",
										children: "Like"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveCommentFeedId(feed.id),
									className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-muted transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$6, { className: "w-5 h-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Comment"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveShareFeedId(feed.id),
									className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-muted transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$7, { className: "w-5 h-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Share"
									})]
								})
							]
						})
					]
				}, feed.id))]
			}),
			activeCommentFeedId && (() => {
				const activeCommentFeed = feeds.find((f) => f.id === activeCommentFeedId);
				if (!activeCommentFeed) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 cursor-default",
						onClick: () => setActiveCommentFeedId(null)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden border border-border flex flex-col max-h-[85vh] z-10 animate-in fade-in zoom-in-95 duration-200",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 border-b border-border flex items-center justify-between bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-foreground text-lg",
									children: "Comments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: [
										"On ",
										activeCommentFeed.userName,
										"'s post"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveCommentFeedId(null),
									className: "p-1.5 hover:bg-muted rounded-full transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-5 h-5 text-muted-foreground" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 overflow-y-auto p-4 space-y-4",
								children: activeCommentFeed.comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center justify-center py-12 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$6, { className: "w-12 h-12 text-muted-foreground/40 mb-2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-foreground",
											children: "No comments yet"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Be the first to share your thoughts!"
										})
									]
								}) : activeCommentFeed.comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3 border-b border-border/40 pb-4 last:border-0 last:pb-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										src: comment.userAvatar,
										alt: comment.userName,
										size: "sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-muted dark:bg-muted/40 px-4 py-2.5 rounded-2xl relative group",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-bold text-foreground mr-1.5",
														children: comment.userName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm text-foreground break-words",
														children: comment.content
													}),
													comment.reactions && Object.values(comment.reactions).some((count) => count > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute -bottom-2 right-3 flex items-center gap-1 bg-card border border-border px-1.5 py-0.5 rounded-full shadow-sm text-xs",
														children: Object.entries(comment.reactions).filter(([_, count]) => count > 0).map(([emoji, count]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "flex items-center gap-0.5 select-none",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: emoji }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] text-muted-foreground font-medium",
																children: count
															})]
														}, emoji))
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-4 text-xs text-muted-foreground ml-2 mt-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: formatTimeAgo(comment.createdAt)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => handleLikeComment(activeCommentFeed.id, comment.id),
														className: `hover:underline font-semibold transition ${comment.likedBy?.includes(user?.id) ? "text-red-500 font-bold" : ""}`,
														children: comment.likes > 0 ? `${comment.likes} Like` : "Like"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "relative",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => setActiveReactCommentId(activeReactCommentId === comment.id ? null : comment.id),
															className: "hover:underline font-semibold flex items-center gap-0.5",
															children: "React"
														}), activeReactCommentId === comment.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "fixed inset-0 z-10",
															onClick: () => setActiveReactCommentId(null)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "absolute bottom-full left-0 mb-1.5 flex items-center gap-1.5 bg-card border border-border px-2 py-1.5 rounded-full shadow-lg z-20 animate-in fade-in slide-in-from-bottom-2 duration-100",
															children: [[
																"👍",
																"❤️",
																"😂",
																"😮",
																"😢",
																"🙏"
															].map((emoji) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => {
																	handleReactComment(activeCommentFeed.id, comment.id, emoji);
																	setActiveReactCommentId(null);
																},
																className: "text-base hover:scale-125 active:scale-95 transition",
																children: emoji
															}, emoji)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => {
																	setPickerTarget({
																		feedId: activeCommentFeed.id,
																		commentId: comment.id
																	});
																	setActiveReactCommentId(null);
																},
																className: "w-6 h-6 flex items-center justify-center bg-muted hover:bg-muted-foreground/20 text-muted-foreground font-bold rounded-full text-sm transition",
																title: "Add reaction",
																children: "+"
															})]
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setActiveReplyCommentId(activeReplyCommentId === comment.id ? null : comment.id),
														className: "hover:underline font-semibold",
														children: comment.replies && comment.replies.length > 0 ? `Reply (${comment.replies.length})` : "Reply"
													})
												]
											}),
											comment.replies && comment.replies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 ml-4 pl-4 border-l border-border/80 space-y-3",
												children: comment.replies.map((reply) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
														src: reply.userAvatar,
														alt: reply.userName,
														size: "sm",
														className: "w-6 h-6"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "bg-muted/60 dark:bg-muted/30 px-3 py-2 rounded-xl",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs font-bold text-foreground mr-1.5",
																children: reply.userName
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs text-foreground break-words",
																children: reply.content
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[9px] text-muted-foreground ml-2 mt-0.5 block",
															children: formatTimeAgo(reply.createdAt)
														})]
													})]
												}, reply.id))
											}),
											activeReplyCommentId === comment.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2.5 ml-4 pl-4 border-l border-border/80 flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													placeholder: `Reply to ${comment.userName}...`,
													value: replyInputs[comment.id] || "",
													onChange: (e) => handleReplyInputChange(comment.id, e.target.value),
													onKeyDown: (e) => {
														if (e.key === "Enter") handleAddReply(activeCommentFeed.id, comment.id);
													},
													className: "flex-1 bg-muted/60 dark:bg-muted/30 border border-border/60 rounded-full px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => handleAddReply(activeCommentFeed.id, comment.id),
													className: "bg-primary text-primary-foreground rounded-full p-1.5 hover:opacity-90 transition flex items-center justify-center",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$8, { className: "w-3.5 h-3.5" })
												})]
											})
										]
									})]
								}, comment.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4 border-t border-border bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Write a comment...",
										value: commentInputs[activeCommentFeed.id] || "",
										onChange: (e) => handleCommentInputChange(activeCommentFeed.id, e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter") handleAddComment(activeCommentFeed.id);
										},
										className: "flex-1 bg-muted border border-border rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleAddComment(activeCommentFeed.id),
										className: "bg-primary text-primary-foreground rounded-full p-2.5 hover:opacity-90 transition flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$8, { className: "w-4 h-4" })
									})]
								})
							})
						]
					})]
				});
			})(),
			activeShareFeedId && (() => {
				const activeShareFeed = feeds.find((f) => f.id === activeShareFeedId);
				if (!activeShareFeed) return null;
				const handleCopyLink = () => {
					const link = `${window.location.origin}/app/feeds#post-${activeShareFeed.id}`;
					navigator.clipboard.writeText(link);
					setCopiedStatus(true);
					setTimeout(() => setCopiedStatus(false), 2e3);
				};
				const handleSendToContact = async (contact) => {
					let chat = (await getChats()).find((c) => c.title === contact.name);
					if (!chat) chat = await createChat({
						title: contact.name,
						type: "private",
						avatar_url: null
					});
					const content = `📢 Shared post by ${activeShareFeed.userName}:\n\n"${activeShareFeed.content}"`;
					await appendMessage(chat.id, {
						content,
						type: "text",
						sender_id: "me"
					});
					setSharedStatus((prev) => ({
						...prev,
						[contact.id]: true
					}));
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 cursor-default",
						onClick: () => setActiveShareFeedId(null)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative bg-card w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-border flex flex-col max-h-[85vh] z-10 animate-in fade-in zoom-in-95 duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border-b border-border flex items-center justify-between bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-foreground text-lg",
								children: "Share Post"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "Share this post with others"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveShareFeedId(null),
								className: "p-1.5 hover:bg-muted rounded-full transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-5 h-5 text-muted-foreground" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto p-4 space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold text-foreground",
									children: "Copy Link"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 bg-muted dark:bg-muted/50 p-2.5 rounded-xl border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$9, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground truncate flex-1 select-all",
											children: `${window.location.origin}/app/feeds#post-${activeShareFeed.id}`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleCopyLink,
											className: `px-3 py-1.5 rounded-lg text-xs font-medium transition duration-200 flex items-center gap-1 flex-shrink-0 ${copiedStatus ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:opacity-90"}`,
											children: copiedStatus ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$10, { className: "w-3.5 h-3.5" }), "Copied"] }) : "Copy"
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold text-foreground",
									children: "Send to Nexus Contacts"
								}), contacts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground text-center py-4",
									children: "No contacts found"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2.5 max-h-60 overflow-y-auto pr-1",
									children: contacts.map((contact) => {
										const isSent = sharedStatus[contact.id];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl border border-border bg-card hover:bg-muted/10 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
													src: contact.avatarUrl,
													alt: contact.name,
													size: "sm"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-foreground block leading-none",
													children: contact.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] text-muted-foreground",
													children: ["ID: ", contact.nexusId]
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleSendToContact(contact),
												disabled: isSent,
												className: `px-3 py-1.5 rounded-lg text-xs font-medium transition duration-200 flex items-center gap-1 ${isSent ? "bg-green-500/10 text-green-500 border border-green-500/20 cursor-default" : "bg-secondary text-secondary-foreground hover:bg-muted"}`,
												children: isSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$10, { className: "w-3.5 h-3.5" }), "Sent"] }) : "Send"
											})]
										}, contact.id);
									})
								})]
							})]
						})]
					})]
				});
			})(),
			pickerTarget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UniversalEmojiPicker, {
				onSelect: (emoji) => {
					handleReactComment(pickerTarget.feedId, pickerTarget.commentId, emoji);
					setPickerTarget(null);
				},
				onClose: () => setPickerTarget(null)
			})
		]
	});
}
var SplitComponent = FeedsPage;
//#endregion
export { SplitComponent as component };
