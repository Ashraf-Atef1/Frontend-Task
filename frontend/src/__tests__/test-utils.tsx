import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store/store";

// Custom render function that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	const store = makeStore();
	return <Provider store={store}>{children}</Provider>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
