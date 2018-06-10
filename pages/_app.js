import App, {Container} from 'next/app'
import React from 'react'

import {Content, Header, Layout} from '../components'

export default class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props

        return (
            <Container>
                <Layout>
                    <Header/>
                    <Content>
                        <Component {...pageProps} />
                    </Content>
                </Layout>
            </Container>
        )
    }
}
