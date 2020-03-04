import { useState } from 'react'

import ButtonPrimary from '../ButtonPrimary'
import DownloadApp from '../../components/DownloadApp'

const JoinActivityForm = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [check, setCheck] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false)

    return (
        <>
            {submitted ? (
                <>
                    <div className="w-full px-3 mb-12 md:w-3/4">
                        <h2 className="font-sans text-night text-4xl text-center mb-2">
                            You joined this activity
                        </h2>
                        <h3 className="font-sans text-2xl text-center mb-8">
                            We've send you a confirmation email. 
                        </h3>
                        <div className="bg-concrete-100 rounded-lg p-4 flex flex-col justify-center">
                        <span className="font-sans text-center mt-2">Download the app and login to see all details</span>
                        <DownloadApp />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-sans text-night text-4xl text-center mb-6">
                        Join this activity
                    </h2>
                    <div className="md:w-3/4 w-full px-3 mb-6">
                        <label className="font-sans block tracking-wide text-night text-l font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            autoFocus
                            value={name}
                            onChange={event => setName(event.target.value)}
                            className="appearance-none block w-full bg-grey-lighter text-night border border-red outline-none rounded py-3 px-4 mb-3"
                            id="grid-first-name"
                            type="text"
                            placeholder="Michael Jordan"
                        ></input>
                    </div>
                    <div className="md:w-3/4 w-full px-3 mb-6 md:mb-0">
                        <label className="font-sans block tracking-wide text-night text-l font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            className="appearance-none block w-full outline-none bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-6"
                            id="grid-first-name"
                            type="email"
                            placeholder="michael@jordan.com"
                        ></input>
                        <div className="flex flex-row mt-8">
                            <input
                                checked={check}
                                onClick={() => setCheck(!check)}
                                type="checkbox"
                                className="form-checkbox h-6 w-6 text-darkgrass-100"
                                required
                            ></input>{' '}
                            <span className="font-sans ml-4">
                                I agree and read the SportySpots{' '}
                                <a
                                    className="underline"
                                    href="https://www.sportyspots.com/terms"
                                >
                                    Terms
                                </a>{' '}
                                and{' '}
                                <a
                                    className="underline"
                                    href="https://www.sportyspots.com/privacy"
                                >
                                    Privacy policy
                                </a>
                                .{' '}
                            </span>
                        </div>
                    </div>
                    <div className="h-32 pb-8 w-full bottom-0 flex h-4 justify-center items-end">
                        <ButtonPrimary
                            disabled={!name || !email || !check}
                            onClick={() => setSubmitted(true)}
                        >
                            Attend
                        </ButtonPrimary>
                    </div>
                </>
            )}
        </>
    )
}

export default JoinActivityForm
