import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as useParams$1, i as useNavigate$1 } from "./router-compat-NKRH5b0P.mjs";
import { s as getChatById } from "./persistence-DsYk-QoD.mjs";
import { t as ChatView } from "./ChatView-BkcecLPQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat._chatId-CFuLpyPF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChatPage() {
	const { chatId } = useParams$1();
	const navigate = useNavigate$1();
	const [chat, setChat] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let active = true;
		const syncChat = async () => {
			setLoading(true);
			const nextChat = await getChatById(chatId);
			if (active) {
				setChat(nextChat);
				setLoading(false);
			}
		};
		syncChat();
		const handleUpdate = () => {
			syncChat();
		};
		window.addEventListener("nexus-chat:updated", handleUpdate);
		return () => {
			active = false;
			window.removeEventListener("nexus-chat:updated", handleUpdate);
		};
	}, [chatId]);
	(0, import_react.useEffect)(() => {
		if (!loading && !chat) navigate("/app", { replace: true });
	}, [
		chat,
		loading,
		navigate
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center bg-background h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" })
	});
	if (!chat) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatView, {
		chat,
		onBack: () => navigate("/app")
	});
}
var SplitComponent = ChatPage;
//#endregion
export { SplitComponent as component };
