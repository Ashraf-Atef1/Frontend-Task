"use client";
import StoreProvider from "./StoreProvider";
import { NotistackProvider } from "./Notistack.provider";
import { Toaster } from "@/components/ui/toaster";

export function RootProvider({ children }: { children: React.ReactNode }) {
	return (
		<StoreProvider>
			<NotistackProvider>
				<Toaster />
				{children}
			</NotistackProvider>
		</StoreProvider>
	);
}
