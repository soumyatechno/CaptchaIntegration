import '@/styles/globals.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.NEXT_PUBLIC_SITE_KEY}
				scriptProps={{
					async: false,
					defer: false,
					appendTo: 'head',
					nonce: undefined
				}}
			>
				<Component {...pageProps} />
			</GoogleReCaptchaProvider>
		</>
	);
}
