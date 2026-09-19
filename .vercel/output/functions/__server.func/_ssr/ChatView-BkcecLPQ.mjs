import { r as __toESM } from "../_runtime.mjs";
import { C as ForwardRef$1, F as ForwardRef$5, L as require_react, _ as ForwardRef$4, c as ForwardRef, h as ForwardRef$3, m as ForwardRef$2, p as ForwardRef$7, w as ForwardRef$8, y as ForwardRef$6 } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-BMwQYxkE.mjs";
import { t as Avatar } from "./Avatar-DbRwqPd6.mjs";
import { c as isE2EEEnabled, n as decryptMessage, o as getWallpaperById, r as encryptMessage, u as useSetting } from "./e2ee-DbFyp_Pm.mjs";
import { n as appendMessage, r as appendSupportMessage } from "./persistence-DsYk-QoD.mjs";
import { n as showIncomingNotification } from "./notifications-BtYuyrl6.mjs";
import { D as FileText, E as Film, O as Download, g as Music, m as PhoneOff, p as Phone, t as X, v as Mic, y as MicOff } from "../_libs/lucide-react.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ChatView-BkcecLPQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STICKER_PACKS = [{
	id: "emotions",
	name: "Emotions",
	stickers: [
		{
			id: "happy",
			emoji: "😊",
			label: "Happy"
		},
		{
			id: "laugh",
			emoji: "😂",
			label: "Laugh"
		},
		{
			id: "love",
			emoji: "❤️",
			label: "Love"
		},
		{
			id: "cool",
			emoji: "😎",
			label: "Cool"
		},
		{
			id: "think",
			emoji: "🤔",
			label: "Think"
		},
		{
			id: "sad",
			emoji: "😢",
			label: "Sad"
		},
		{
			id: "angry",
			emoji: "😠",
			label: "Angry"
		},
		{
			id: "party",
			emoji: "🎉",
			label: "Party"
		},
		{
			id: "fire",
			emoji: "🔥",
			label: "Fire"
		},
		{
			id: "thumbsup",
			emoji: "👍",
			label: "Thumbs Up"
		},
		{
			id: "clap",
			emoji: "👏",
			label: "Clap"
		},
		{
			id: "wave",
			emoji: "👋",
			label: "Wave"
		}
	]
}, {
	id: "animals",
	name: "Animals",
	stickers: [
		{
			id: "cat",
			emoji: "🐱",
			label: "Cat"
		},
		{
			id: "dog",
			emoji: "🐶",
			label: "Dog"
		},
		{
			id: "fox",
			emoji: "🦊",
			label: "Fox"
		},
		{
			id: "panda",
			emoji: "🐼",
			label: "Panda"
		},
		{
			id: "unicorn",
			emoji: "🦄",
			label: "Unicorn"
		},
		{
			id: "butterfly",
			emoji: "🦋",
			label: "Butterfly"
		}
	]
}];
function StickerPicker({ onSelect, onClose }) {
	const [activePack, setActivePack] = (0, import_react.useState)(STICKER_PACKS[0].id);
	const pack = STICKER_PACKS.find((p) => p.id === activePack);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute bottom-full left-0 right-0 mb-2 mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: STICKER_PACKS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActivePack(p.id),
					className: `px-3 py-1 text-sm rounded-full transition-colors ${activePack === p.id ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`,
					children: p.name
				}, p.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4 text-gray-500" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-6 gap-2 p-4 max-h-48 overflow-y-auto",
			children: pack?.stickers.map((sticker) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onSelect(sticker),
				className: "text-3xl p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",
				title: sticker.label,
				children: sticker.emoji
			}, sticker.id))
		})]
	});
}
function MessageInput({ onSendMessage }) {
	const [inputText, setInputText] = (0, import_react.useState)("");
	const [showStickers, setShowStickers] = (0, import_react.useState)(false);
	const [isRecording, setIsRecording] = (0, import_react.useState)(false);
	const [recordingDuration, setRecordingDuration] = (0, import_react.useState)(0);
	const fileInputRef = (0, import_react.useRef)(null);
	const mediaRecorderRef = (0, import_react.useRef)(null);
	const recordingIntervalRef = (0, import_react.useRef)(null);
	const audioChunksRef = (0, import_react.useRef)([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputText.trim()) {
			onSendMessage({
				content: inputText.trim(),
				type: "text"
			});
			setInputText("");
		}
	};
	const handleFileSelect = (e) => {
		Array.from(e.target.files || []).forEach((file) => {
			const url = URL.createObjectURL(file);
			let type = "file";
			if (file.type.startsWith("image/")) type = "image";
			else if (file.type.startsWith("video/")) type = "video";
			else if (file.type.startsWith("audio/")) type = "voice";
			else if (file.type.includes("pdf") || file.type.includes("document") || file.type.includes("text") || file.type.includes("spreadsheet") || file.type.includes("presentation")) type = "file";
			onSendMessage({
				content: file.name,
				type,
				file_url: url,
				file_name: file.name,
				duration: type === "voice" ? null : void 0
			});
		});
		e.target.value = "";
	};
	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const mediaRecorder = new MediaRecorder(stream);
			mediaRecorderRef.current = mediaRecorder;
			audioChunksRef.current = [];
			mediaRecorder.ondataavailable = (e) => {
				audioChunksRef.current.push(e.data);
			};
			mediaRecorder.onstop = () => {
				const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
				onSendMessage({
					content: "Voice message",
					type: "voice",
					file_url: URL.createObjectURL(blob),
					duration: recordingDuration
				});
				stream.getTracks().forEach((track) => track.stop());
				setRecordingDuration(0);
			};
			mediaRecorder.start();
			setIsRecording(true);
			recordingIntervalRef.current = setInterval(() => {
				setRecordingDuration((prev) => prev + 1);
			}, 1e3);
		} catch {
			alert("Microphone access is required for voice messages");
		}
	};
	const stopRecording = () => {
		if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
		clearInterval(recordingIntervalRef.current);
		setIsRecording(false);
	};
	const handleStickerSelect = (sticker) => {
		onSendMessage({
			content: sticker.emoji,
			type: "sticker"
		});
		setShowStickers(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 relative",
		children: [showStickers && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickerPicker, {
			onSelect: handleStickerSelect,
			onClose: () => setShowStickers(false)
		}), isRecording ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex items-center gap-3 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 bg-red-500 rounded-full animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-red-600 dark:text-red-400",
					children: [
						"Recording... ",
						recordingDuration,
						"s"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: stopRecording,
				className: "p-3 bg-red-600 hover:bg-red-700 rounded-full text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-5 h-5" })
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setShowStickers(!showStickers),
					className: `p-2 rounded-full transition-colors ${showStickers ? "bg-blue-100 dark:bg-blue-900 text-blue-600" : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => fileInputRef.current?.click(),
					className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileInputRef,
					type: "file",
					multiple: true,
					accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip,.rar",
					className: "hidden",
					onChange: handleFileSelect
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: inputText,
						onChange: (e) => setInputText(e.target.value),
						placeholder: "Type a message...",
						className: "w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border-none rounded-full text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
					})
				}),
				inputText.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "w-6 h-6" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: startRecording,
					className: "p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$4, { className: "w-6 h-6" })
				})
			]
		})]
	});
}
function MessageBubble({ message, isOwn }) {
	const renderContent = () => {
		switch (message.type) {
			case "text": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm whitespace-pre-wrap break-words",
				children: message.content
			});
			case "image": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: message.file_url,
				alt: "Shared image",
				className: "max-w-xs rounded-lg cursor-pointer",
				onClick: () => window.open(message.file_url, "_blank")
			});
			case "video": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: message.file_url,
					controls: true,
					className: "rounded-lg w-full",
					preload: "metadata"
				}), message.file_name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs mt-1 opacity-75 flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { className: "w-3 h-3" }), message.file_name]
				})]
			});
			case "voice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 min-w-[200px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-4 h-4 flex-shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
						src: message.file_url,
						controls: true,
						className: "h-8 flex-1",
						style: { maxWidth: "180px" }
					}),
					message.duration && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs opacity-75",
						children: [message.duration, "s"]
					})
				]
			});
			case "sticker": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-5xl leading-none select-none",
				role: "img",
				children: message.content
			});
			case "document":
			case "file": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: message.file_url,
				download: message.file_name,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex items-center gap-3 p-2 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-8 h-8 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium truncate",
						children: message.file_name || message.content
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs opacity-75 flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3 h-3" }), "Tap to download"]
					})]
				})]
			});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: message.content
			});
		}
	};
	const isSticker = message.type === "sticker";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex ${isOwn ? "justify-end" : "justify-start"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: isSticker ? "max-w-[75%]" : `max-w-[75%] px-4 py-2 rounded-2xl ${isOwn ? "bg-blue-600 text-white rounded-tr-none" : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-tl-none shadow-sm"}`,
			children: [renderContent(), !isSticker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-xs mt-1 ${isOwn ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`,
				children: format(new Date(message.created_at), "h:mm a")
			})]
		})
	});
}
function VoiceCallOverlay({ chat, voiceCall }) {
	const { callState, callDuration, isMuted, error, acceptCall, endCall, toggleMute, formatDuration } = voiceCall;
	if (callState === "idle") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					src: chat.avatar_url,
					alt: chat.title,
					size: "2xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold text-white mt-6",
					children: chat.title
				}),
				callState === "calling" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-400 mt-2 animate-pulse",
					children: "Calling..."
				}),
				callState === "incoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-400 mt-2",
					children: "Incoming voice call"
				}),
				callState === "connected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-green-400 mt-2 font-mono text-lg",
					children: formatDuration(callDuration)
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-red-400 mt-2 text-sm",
					children: error
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-6 mt-12",
			children: [
				callState === "incoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: acceptCall,
					className: "p-5 bg-green-600 hover:bg-green-700 rounded-full text-white transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-7 h-7" })
				}),
				(callState === "connected" || callState === "calling") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggleMute,
					className: `p-4 rounded-full transition-colors ${isMuted ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"}`,
					children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "w-6 h-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: endCall,
					className: "p-5 bg-red-600 hover:bg-red-700 rounded-full text-white transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "w-7 h-7" })
				})
			]
		})]
	});
}
var ICE_SERVERS = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:stun1.l.google.com:19302" }] };
function useVoiceCall(chatId) {
	const [callState, setCallState] = (0, import_react.useState)("idle");
	const [callDuration, setCallDuration] = (0, import_react.useState)(0);
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const peerConnection = (0, import_react.useRef)(null);
	const localStream = (0, import_react.useRef)(null);
	const durationInterval = (0, import_react.useRef)(null);
	const channelRef = (0, import_react.useRef)(null);
	const cleanup = (0, import_react.useCallback)(() => {
		if (durationInterval.current) {
			clearInterval(durationInterval.current);
			durationInterval.current = null;
		}
		localStream.current?.getTracks().forEach((track) => track.stop());
		localStream.current = null;
		peerConnection.current?.close();
		peerConnection.current = null;
		setCallDuration(0);
		setIsMuted(false);
		setError(null);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!chatId) return;
		channelRef.current = new BroadcastChannel(`nexus-call-${chatId}`);
		channelRef.current.onmessage = async (event) => {
			const { type, sdp, candidate } = event.data;
			if (type === "offer" && callState === "idle") await handleIncomingCall(sdp);
			else if (type === "answer" && peerConnection.current) {
				await peerConnection.current.setRemoteDescription(sdp);
				setCallState("connected");
				startDurationTimer();
			} else if (type === "ice-candidate" && peerConnection.current) await peerConnection.current.addIceCandidate(candidate);
			else if (type === "hangup") endCall();
		};
		return () => {
			channelRef.current?.close();
			cleanup();
		};
	}, [chatId]);
	const startDurationTimer = () => {
		durationInterval.current = setInterval(() => {
			setCallDuration((prev) => prev + 1);
		}, 1e3);
	};
	const createPeerConnection = async () => {
		if (typeof window === "undefined" || typeof RTCPeerConnection === "undefined" || !navigator.mediaDevices?.getUserMedia) throw new Error("Voice calls are not supported in this browser");
		const pc = new RTCPeerConnection(ICE_SERVERS);
		pc.onicecandidate = (event) => {
			if (event.candidate) channelRef.current?.postMessage({
				type: "ice-candidate",
				candidate: event.candidate
			});
		};
		pc.ontrack = (event) => {
			const audio = document.getElementById("remote-audio");
			if (audio) audio.srcObject = event.streams[0];
		};
		pc.onconnectionstatechange = () => {
			if (pc.connectionState === "connected") {
				setCallState("connected");
				startDurationTimer();
			} else if (pc.connectionState === "disconnected" || pc.connectionState === "failed") endCall();
		};
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: true,
			video: false
		});
		localStream.current = stream;
		stream.getTracks().forEach((track) => pc.addTrack(track, stream));
		peerConnection.current = pc;
		return pc;
	};
	const initiateCall = (0, import_react.useCallback)(async () => {
		try {
			setCallState("calling");
			setError(null);
			const pc = await createPeerConnection();
			const offer = await pc.createOffer();
			await pc.setLocalDescription(offer);
			channelRef.current?.postMessage({
				type: "offer",
				sdp: offer
			});
		} catch (err) {
			setError("Microphone access denied or unavailable");
			setCallState("idle");
			cleanup();
		}
	}, [chatId, cleanup]);
	const handleIncomingCall = async (offer) => {
		try {
			setCallState("incoming");
			const pc = await createPeerConnection();
			await pc.setRemoteDescription(offer);
			const answer = await pc.createAnswer();
			await pc.setLocalDescription(answer);
			channelRef.current?.postMessage({
				type: "answer",
				sdp: answer
			});
		} catch (err) {
			setError("Failed to answer call");
			endCall();
		}
	};
	const acceptCall = (0, import_react.useCallback)(async () => {
		if (callState === "incoming" && peerConnection.current) {
			setCallState("connected");
			startDurationTimer();
		}
	}, [callState]);
	const endCall = (0, import_react.useCallback)(() => {
		channelRef.current?.postMessage({ type: "hangup" });
		cleanup();
		setCallState("idle");
	}, [cleanup]);
	const toggleMute = (0, import_react.useCallback)(() => {
		if (localStream.current) {
			localStream.current.getAudioTracks().forEach((track) => {
				track.enabled = isMuted;
			});
			setIsMuted(!isMuted);
		}
	}, [isMuted]);
	const formatDuration = (seconds) => {
		return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
	};
	return {
		callState,
		callDuration,
		isMuted,
		error,
		initiateCall,
		acceptCall,
		endCall,
		toggleMute,
		formatDuration
	};
}
async function sendSupabaseMessage(chatId, message) {
	if (!supabase || !isSupabaseConfigured()) return null;
	const { data, error } = await supabase.from("messages").insert({
		chat_id: chatId,
		sender_id: message.sender_id || null,
		content: message.content,
		type: message.type || "text",
		file_url: message.file_url || null,
		file_name: message.file_name || null,
		encrypted: Boolean(message.encrypted)
	}).select().single();
	if (error) throw error;
	return data;
}
function ChatView({ chat, onBack, currentUserId = "me", supportConversationId }) {
	const [messages, setMessages] = (0, import_react.useState)(chat?.messages || []);
	const [decryptedMessages, setDecryptedMessages] = (0, import_react.useState)({});
	const messagesEndRef = (0, import_react.useRef)(null);
	const [chatWallpaper] = useSetting("chatWallpaper", "nature");
	const wallpaper = getWallpaperById(chatWallpaper);
	const voiceCall = useVoiceCall(chat.id);
	const chatPeerMemberId = (chat?.members && chat.members.length ? chat.members : chat?.peer_member_id ? [currentUserId, chat.peer_member_id].filter(Boolean) : [currentUserId, chat?.peer_id].filter(Boolean)).find((m) => m !== currentUserId) || chat?.peer_member_id || chat?.peer_id;
	const e2eeContext = {
		selfMemberId: currentUserId,
		peerMemberId: chatPeerMemberId,
		selfId: currentUserId,
		peerId: chatPeerMemberId
	};
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	(0, import_react.useEffect)(() => {
		setMessages(chat?.messages || []);
	}, [chat?.id, chat?.messages]);
	(0, import_react.useEffect)(() => {
		scrollToBottom();
	}, [messages]);
	(0, import_react.useEffect)(() => {
		if (!isE2EEEnabled()) return;
		messages.forEach(async (msg) => {
			if (msg.encrypted && !decryptedMessages[msg.id]) {
				const decrypted = await decryptMessage(chat.id, msg.content, true, e2eeContext);
				const decryptedFileName = msg.file_name ? await decryptMessage(chat.id, msg.file_name, true, e2eeContext) : void 0;
				setDecryptedMessages((prev) => ({
					...prev,
					[msg.id]: decrypted,
					[`${msg.id}_fn`]: decryptedFileName
				}));
			}
		});
	}, [messages, chat.id]);
	const handleSendMessage = async (messageData) => {
		let content = messageData.content || messageData;
		const type = messageData.type || "text";
		let encrypted = false;
		let fileNameEncrypted = null;
		if (!supportConversationId && isE2EEEnabled()) {
			const result = await encryptMessage(chat.id, content, e2eeContext);
			content = result.content;
			encrypted = result.encrypted;
			if (messageData.file_name && encrypted) {
				const fn = await encryptMessage(chat.id, messageData.file_name, e2eeContext);
				if (fn.encrypted) fileNameEncrypted = fn.content;
			}
		}
		const newMessage = {
			id: Date.now().toString(),
			sender_id: currentUserId,
			content,
			type,
			encrypted,
			file_url: messageData.file_url || null,
			file_name: fileNameEncrypted || messageData.file_name || null,
			duration: messageData.duration || null,
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (encrypted) setDecryptedMessages((prev) => ({
			...prev,
			[newMessage.id]: messageData.content || messageData,
			[`${newMessage.id}_fn`]: fileNameEncrypted ? messageData.file_name || null : void 0
		}));
		const savedMessage = supportConversationId ? await appendSupportMessage(supportConversationId, newMessage) : await appendMessage(chat.id, newMessage);
		setMessages((prev) => [...prev, savedMessage || newMessage]);
		if (!supportConversationId && chat.id && typeof window !== "undefined") try {
			await sendSupabaseMessage(chat.id, {
				...newMessage,
				sender_id: newMessage.sender_id
			});
		} catch {}
		const preview = type === "text" ? messageData.content || messageData : `${type === "file" ? "Shared a file" : type === "sticker" ? "Sent a sticker" : type === "image" ? "Shared an image" : "Shared media"} · ${messageData.file_name || "Tap to view"}`;
		showIncomingNotification({
			title: chat.title || "New activity",
			preview: preview.length > 80 ? `${preview.slice(0, 77)}...` : preview,
			avatarUrl: chat.avatar_url || "/logo.png",
			type
		});
	};
	const wallpaperStyle = wallpaper.url ? {
		backgroundImage: `url(${wallpaper.url})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "repeat"
	} : { background: wallpaper.preview || "#f3f4f6" };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-1 flex-col min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between bg-white px-3 py-2 dark:bg-gray-800 sm:px-4 sm:py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onBack,
							className: "md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "w-5 h-5 text-gray-700 dark:text-gray-300" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							src: chat.avatar_url,
							alt: chat.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-bold text-gray-900 dark:text-white",
								children: chat.title
							}), (chat.encrypted || isE2EEEnabled()) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$6, {
								className: "w-3.5 h-3.5 text-green-500",
								title: "End-to-end encrypted"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-gray-500 dark:text-gray-400",
							children: voiceCall.callState === "connected" ? "On call" : "Online"
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: voiceCall.initiateCall,
						disabled: voiceCall.callState !== "idle",
						className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 disabled:opacity-50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$7, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$8, { className: "w-5 h-5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-0 flex-1 space-y-4 overflow-y-auto p-3 sm:p-4",
				style: wallpaperStyle,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-white/60 dark:bg-gray-900/70 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative space-y-4",
					children: [messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
						message: {
							...message,
							content: message.encrypted ? decryptedMessages[message.id] || "🔒 Decrypting..." : message.content,
							file_name: message.encrypted ? decryptedMessages[`${message.id}_fn`] || message.file_name : message.file_name
						},
						isOwn: message.sender_id === currentUserId
					}, message.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageInput, { onSendMessage: handleSendMessage })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceCallOverlay, {
				chat,
				voiceCall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				id: "remote-audio",
				autoPlay: true
			})
		]
	});
}
//#endregion
export { ChatView as t };
