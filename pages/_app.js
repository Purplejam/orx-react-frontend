import Page from '../components/Page';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/styles/nprogress.css';
import {ApolloProvider} from '@apollo/client';
import withData from './../lib/withData.js';
import {CartStateProvider, useCart} from '../lib/CartState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {

  return (
  	<CartStateProvider>
  		<ApolloProvider client={apollo}>
	    <Page>
	      <Component {...pageProps} />
	    </Page>
  	 </ApolloProvider>
  	</CartStateProvider>
  );
}

MyApp.getInitialprops = async function({ Component, ctx }) {
	let pageProps = {};
	if (Component.getInitialprops) {
		pageProps = getInitialprops(ctx);
	}
	pageProps.query = ctx.query;
	return { pageProps };
}

export default withData(MyApp);
