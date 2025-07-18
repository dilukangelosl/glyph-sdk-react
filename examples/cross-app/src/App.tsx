import {
	GLYPH_APP_LOGIN_METHOD,
	GlyphPrivyProvider,
} from "@use-glyph/sdk-react";
import { Chain } from "viem";
import { apeChain, base, curtis, mainnet } from "viem/chains";
import "./App.css";
import Consumer from "./consumer";

const supportedChains: [Chain, ...Chain[]] = [apeChain, curtis, mainnet, base];

function App() {
	return (
		<GlyphPrivyProvider
			appId={import.meta.env.VITE_DEMO_PRIVY_APP_ID} // or process.env.VITE_DEMO_PRIVY_APP_ID (if using next.js)
			clientId={import.meta.env.VITE_DEMO_PRIVY_CLIENT_ID} // or process.env.VITE_DEMO_PRIVY_CLIENT_ID (if using next.js)
			config={{
				loginMethodsAndOrder: {
					primary: [GLYPH_APP_LOGIN_METHOD],
				},
				embeddedWallets: {
					createOnLogin: "off", // 'users-without-wallets' | 'all-users' | 'off'
					showWalletUIs: true,
					extendedCalldataDecoding: true,
				},
				supportedChains,
				defaultChain: apeChain,
			}}
			chains={supportedChains}
		>
			<Consumer />
		</GlyphPrivyProvider>
	);
}

export default App;
