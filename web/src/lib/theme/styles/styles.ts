/// Global styles

export const styles = {
    global: {
        // styles for the `body`
    
     
        // styles for the `a`
        a: {
            color: 'teal.200',
            _hover: {
                textDecoration: 'underline',
            },
        },

        html: {
            height: '100%',
        },

        body: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '1', // Ensure the body takes up the full viewport height
        },
    }
}

