import React from 'react'

function Features() {
    return (
        <div>
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features included</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Our regular hours of operations are 9:30 am to 6 pm Sunday to Thursday.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            {/* Each feature item */}
                            <div className="relative">
                                <dt>
                                    {/* Replace 'icon-visibility.svg' with the actual path to your icon */}
                                    <img className="h-6 w-6 mx-auto mb-3" src="icon-visibility.svg" alt="Real-time Visibility" />
                                    <p className="text-lg leading-6 font-medium text-gray-900 text-center">Real-time Visibility</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    Advanced Ocean Visibility
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    {/* Replace 'icon-analytics.svg' with the actual path to your icon */}
                                    <img className="h-6 w-6 mx-auto mb-3" src="icon-analytics.svg" alt="Analytics & Intelligence" />
                                    <p className="text-lg leading-6 font-medium text-gray-900 text-center">Analytics & Intelligence</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    Live Tracking System
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    {/* Replace 'icon-capacity.svg' with the actual path to your icon */}
                                    <img className="h-6 w-6 mx-auto mb-3" src="icon-capacity.svg" alt="Capacity Sourcing" />
                                    <p className="text-lg leading-6 font-medium text-gray-900 text-center">Capacity Sourcing</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    Dock Appointment Scheduling
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    {/* Replace 'icon-workflow.svg' with the actual path to your icon */}
                                    <img className="h-6 w-6 mx-auto mb-3" src="icon-workflow.svg" alt="Workflow Automation" />
                                    <p className="text-lg leading-6 font-medium text-gray-900 text-center">Workflow Automation</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    Tender Automation
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    {/* Replace 'icon-workflow.svg' with the actual path to your icon */}
                                    <img className="h-6 w-6 mx-auto mb-3" src="icon-workflow.svg" alt="Workflow Automation" />
                                    <p className="text-lg leading-6 font-medium text-gray-900 text-center">Workflow Automation</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    Tender Automation
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    {/* Replace 'icon-workflow.svg' with the actual path to your icon */}
                                    <img className="h-6 w-6 mx-auto mb-3" src="icon-workflow.svg" alt="Workflow Automation" />
                                    <p className="text-lg leading-6 font-medium text-gray-900 text-center">Workflow Automation</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    Tender Automation
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features