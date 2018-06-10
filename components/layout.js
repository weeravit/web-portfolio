import Head from 'next/head'

export default (props) => (
    <div>
        <Head>
            <title>My Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"/>
            <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"/>
        </Head>

        {props.children}
    </div>
)