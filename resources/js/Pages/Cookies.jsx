import React from 'react';
import Layout from './master/Layout';

const Cookies = () => {
    return (
        <>
           <section class="bg-white dark:bg-gray-900 border-t-2">
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex lg:items-center">
                    <div class="w-full space-y-12 my-16 ">
                        <div>
                            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Cookies Policy</h1>
                        
                            <div class="mt-2">
                                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">
                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-3xl font-semibold text-gray-700 capitalize dark:text-white">Introduction</h1>

                                <p class="mt-3 text-xl">
                                This policy provides information about how and when we use cookies. Capitalized terms used in this policy but not defined have the meaning set forth in our Privacy Policy, which also includes additional details about the collection and use of information at Tabas.
                                </p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-3xl font-semibold text-gray-700 capitalize dark:text-white">What are cookies</h1>

                                <p class="mt-3 text-xl space-y-10">
                                To make this site work properly, we place small data files called cookies on your device. Most websites do this too. A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, location, language, font size and other display preferences) over a period of time; this way, you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.</p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-3xl font-semibold text-gray-700 capitalize dark:text-white">Do we use cookies?</h1>

                                <p class="mt-3 text-xl space-y-10">
                                Tabas uses cookies and similar technologies like single-pixel gifs and web beacons. We use both session-based and persistent cookies. Tabas sets and accesses our own cookies on the domains operated by us. In addition, we use third party cookies, like Google Analytics.
                                </p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-3xl font-semibold text-gray-700 capitalize dark:text-white">How do we use cookies</h1>

                                <p class="mt-3 text-xl">
                                Some cookies Tabas uses are associated with your account and personal information in order to remember that you are logged in and which workspaces you are logged into. Other cookies are not tied to your account but are unique and allow us to carry out analytics and customization, among other similar things.
                                </p>
                                <p className='mt-3 text-xl'>
                                Specifically, we use cookies for the following usage purposes:

Authentication. If you're signed in to our Services, cookies help us show you the right information and personalize your experience.

Security. We use cookies to enable and support our security features, and to help us detect malicious activity.

Preferences. Cookies can tell us which language you prefer and what your communication preferences are. They can help you fill out forms on our Sites more easily. They also provide you with features, insights, and customized content.

Marketing. We may use cookies to help us deliver marketing campaigns and track their performance. Similarly, our partners may use cookies to provide us with information about your interactions with their services, but use of those third-party cookies would be subject to the service provider’s policies.

Performance, analytics and research. Cookies help us learn how well our website and Services perform. We also use cookies to understand, improve, and research products, features, and services, including to create logs and record when you access our Sites and Services from different devices, such as your work computer or your mobile device.
                                </p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-3xl font-semibold text-gray-700 capitalize dark:text-white">How can you control cookies</h1>

                                <p class="mt-3 text-xl">
                                Some people prefer not to allow cookies in their browser, which is why most browsers give you the ability to manage cookies to suit you.
                                </p>
                                <p class="mt-3 text-xl">
                                You can control and/or delete cookies as you wish. For example, you can delete all cookies that are already stored in your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit this or other websites. Additionally, some services and functionalities may not work.</p>
                                <p class="mt-3 text-xl">
                                With some browsers you can set up rules to manage cookies on a site-by-site basis, giving you more granular control over your privacy. What this means is that you can disallow cookies from all sites except those that you trust.</p>
                                <p class="mt-3 text-xl">
                                Your Browser provider offers help pages relating to cookie management. You can review information from some of the most popular ones by clicking on the links listed here: Google Chrome, Internet Explorer, Mozilla Firefox, Safari (Desktop), Safari (Mobile), Android Browser. For other browsers, please consult the related documentation from your browser provider.</p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-3xl font-semibold text-gray-700 capitalize dark:text-white">Updates to this Policy</h1>

                                <p class="mt-3 text-xl">
                                This Tabas Cookie Policy may be changed or updated occasionally to meet legal, technological or operational requirements and standards. You are encouraged to frequently visit this policy to stay updated about changes. In case of critical changes, these will be circulated to you prior to their implementation. Modifications will be effective on the day they are published.</p>
                            </div>
                        </div>

                    </div>

                   
                </div>

                
            </div>
        </section> 
        </>
    );
}
Cookies.layout=(page) => <Layout title="Cookies" children={page}/>;
export default Cookies;

