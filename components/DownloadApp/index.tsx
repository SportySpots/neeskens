import React from 'react'

const DownloadApp = () => {
    return (
        <div className="mx-2">
            <div className="p-8">
                <h2 className="text-center lg:text-left font-sans text-2xl">
                    Download the app and join this activity
                </h2>
                <div className="flex flex-row mt-4 mb-16 justify-center lg:justify-start">
                    <a href="https://itunes.apple.com/nl/app/sportyspots/id1391625376">
                        <img
                            src="/static/Appstore.svg"
                            alt="AppImage"
                            className="mt-4 mr-4 "
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.sportyspots.android">
                        <img
                            src="/static/Playstore.svg"
                            alt="AppImage"
                            className="mt-4"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp
