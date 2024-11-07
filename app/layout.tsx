import type { Metadata } from "next";
import "./globals.css";
import 'animate.css';
import { LayoutWithProvier } from "@/components/LayoutWithProvider";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My own portfolio",
};

export default function RootLayout({ children }:{children: React.ReactNode}) {

	const ClientLayout = ({ children }:{children: React.ReactNode}) => {
		return <LayoutWithProvier>{children}</LayoutWithProvier>
	}

	return (
    	<html lang="en">
      		<body>
				<ClientLayout>
					{children}  
				</ClientLayout>
      		</body>
    	</html>
  );
}
