import React from 'react'

function AuthorTag() {
    return (
        <div>
            <div className="flex" data-aos="fade-down" data-aos-delay="300">
                <img className="hover:outline-none hover:ring-2 hover:border-transparent hover:ring-teal-500 dark:hover:ring-ndblue-100 flex-shrink-0" src={require('../images/jc-transparent.png').default} width="100" height="100" alt="Author J.C." />
                <div>
                    <span className="text-gray-400 dark:text-gray-400">A Blog By</span>
                    <h1 className="font-medium dark:text-white text-gray-50 hover:underline">Johnny Joe</h1>
                </div>
            </div>
        </div>
    )
}

export default AuthorTag
