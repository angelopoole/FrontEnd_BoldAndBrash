import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';

import Nav from './Nav';
import Footer from './Footer';

import React from 'react';

//Layout will have things that are ALWAYS rendered. includes header, footer, any special styling etc...
////nav content footer

const Layout = props => {
	console.log(props.children);
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Nav />
				<main>
					{props.children}
					<Footer />
				</main>
			</ThemeProvider>
		</>
	);
};

export default Layout;
