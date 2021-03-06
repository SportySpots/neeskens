import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <section className="flex items-center justify-center p-4 pl-8 bg-night  ">
                <p className="font-sans text-chalk">
                    Made with{' '}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{' '}
                    in Amsterdam
                    {' '}| <a href="/privacy">Privacy policy</a>
                    {' '}| <a href="/terms">Terms and conditions</a>
                </p>
            </section>
        )
    }
}

export default Footer
