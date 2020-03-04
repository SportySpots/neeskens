import React from 'react'

const DownloadApp = () => {
    return (
        <div className="mx-2">
            <div className="p-4">
                <div className="flex flex-col lg:flex-row mt-2 justify-center">
                    <a
                        className="flex justify-center"
                        href="https://itunes.apple.com/nl/app/sportyspots/id1391625376"
                    >
                        <img
                            src="/static/Appstore.svg"
                            alt="AppImage"
                            className="my-2 lg:mr-8"
                        />
                    </a>
                    <a
                        className="flex justify-center"
                        href="https://play.google.com/store/apps/details?id=com.sportyspots.android"
                    >
                        <img
                            src="/static/Playstore.svg"
                            alt="AppImage"
                            className="my-2"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp
