import React, { useState, useEffect } from 'react';

const Settings = () => {
    const [openTab, setOpenTab] = useState(null);
    const [closing, setClosing] = useState(false);

    function closeTab() {
        setClosing(true);
        setTimeout(() => {
            setOpenTab(null);
            setClosing(false);
        }, 300);
    }

    useEffect(() => {
        document.body.style.overflow = openTab ? 'hidden' : '';
        return () => (document.body.style.overflow = '');
    }, [openTab]);

    const generalTabs = [
        { name: 'Appearance', icon: 'Appearence.png', options: ['Light', 'Dark', 'System'] },
        {
            name: 'Language',
            icon: 'language.png',
            options: [
                'English', 'Hindi', 'Spanish', 'French', 'German', 'Japanese',
                'Korean', 'Italian', 'Portuguese', 'Russian'
            ],
        },
        { name: 'Notifications', icon: 'notification.png', options: ['On', 'Off'] },
        { name: 'Sound', icon: 'sound.png', options: ['On', 'Vibrate', 'Mute'] },
    ];

    const privacyTabs = [
        { name: 'Account', icon: 'account.png', options: ['Edit Profile', 'Logout'] },
        { name: 'Privacy Policy', icon: 'privacy.png', options: ['Public', 'Friends', 'Private'] },
        // { name: 'Storage', icon: 'storage.png', options: ['Manage Cache', 'Clear Data'] },
    ];

    const stockTabs = [
        { name: 'Default Currency', icon: 'change.png', options: ['USD', 'INR', 'EUR', 'JPY'] },
        { name: 'Stock View', icon: 'view.png', options: ['Compact', 'Detailed'] },
        { name: 'Auto Refresh', icon: 'refresh.png', options: ['On', 'Off', 'Every 5s', 'Every 10s'] },
        // { name: 'Chart Theme', icon: 'chart.png', options: ['Light', 'Dark', 'System'] },
        { name: 'Data Source', icon: 'datasource.png', options: ['Yahoo Finance', 'CoinMarketCap', 'Binance'] },
    ];

    const moreTabs = [
        { name: 'Feedback', icon: 'feedback.png', options: ['Send Feedback'] },
        { name: 'Support', icon: 'support.png', options: ['Contact Support', 'FAQ'] },
        { name: 'About', icon: 'about.png', options: ['App by Yash Singh Bisht', 'Version 1.0'] },
        { name: 'Github', icon: 'github.png', options: ['Visit Repository'] },
    ];

    const renderSection = (title, tabs) => (
        <div className="Section mb-8">
            <h1 className="opacity-90 m-2">{title}</h1>
            <div className="border border-white/20 rounded-3xl overflow-hidden">
                {tabs.map((tab, i) => (
                    <div
                        key={i}
                        className={`Tab w-full cursor-pointer border-b border-white/13 bg-[#161616]/20 backdrop-blur-[.8vh] p-3 flex items-center justify-between
            active:bg-white/20 hover:bg-white/10 transition-all duration-150 ease-in-out
            ${i === 0 ? 'rounded-t-3xl' : ''} ${i === tabs.length - 1 ? 'rounded-b-3xl border-none' : ''}`}
                        onClick={() => setOpenTab(tab)}
                    >
                        <div className="flex items-center text-[1.9vh] opacity-90">
                            <img className="w-5 h-5 mr-2" src={`icons/${tab.icon}`} />
                            <h1>{tab.name}</h1>
                        </div>
                        <img
                            className={`w-4.5 h-4.5 opacity-80 transition-transform duration-250 ease-in-out ${openTab?.name === tab.name ? 'rotate-[90deg]' : 'rotate-[0deg]'
                                }`}
                            src="icons/next.png"
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className='relative z-[999] w-screen min-h-screen bg-[#161616] px-4 py-2'>
            {/* Background */}
            <div className='Background-Gradient fixed -z-1 w-screen h-screen'>
                <div className='fixed top-0 left-0 bg-[#161616]/0 w-full z-1 h-screen'></div>
                <div className="absolute bg-white blur-2xl -left-15 rotate-18 -z-1 -top-17 w-[90vh] h-80"></div>
                <div className="absolute bg-blue-300 blur-2xl -left-10 rotate-18 -z-1 top-38 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-500 blur-2xl -left-10 rotate-18 -z-1 top-50 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-600 blur-2xl -left-10 rotate-18 -z-1 top-65 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-700 blur-2xl -left-10 rotate-18 -z-1 top-80 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-900 blur-2xl -left-10 rotate-18 -z-1 top-94 w-[70vh] h-20"></div>
                <div className="absolute move bg-[#161616] blur-[5vh] rounded-full -left-40 -z-1 top-70 w-90 h-70"></div>
                <div className="absolute bg-[#161616] blur-2xl -left-40 rotate-18 -z-10 top-110 w-[90vh] h-full"></div>
            </div>

            <h1 className='text-7xl tracking-tighter mb-4 mt-3 text-[#161616]/80 font-bold'>Settings</h1>


            {/* Profile */}
            <div className="Profile border border-white/20 rounded-3xl bg-[#161616]/30 backdrop-blur-[.8vh] w-full h-auto p-4 mt-10 space-x-4 flex items-center">
                <div className="rounded-full w-20 h-20 border border-white/30 bg-white/10">
                    <img src="/icons/user.png" alt="Profile" className="p-2 rounded-full" />
                </div>

                <div className="Right">
                    {/* <h1 className="text-[4vh] tracking-tight leading-9">Ananya Chakravarty</h1> */}
                    <h1 className="text-[4vh] tracking-tight leading-9">Yash Singh Bisht</h1>
                    <div
                        className="flex items-center mt-2 w-auto h-4 space-x-2 opacity-60 cursor-pointer active:scale-92 transition-all duration-150 ease-in-out"
                        onClick={() => setOpenTab({ name: 'Edit Profile', options: ['Change Name', 'Change Picture'] })}
                    >
                        <p className="text-[1.8vh] ml-1">Edit Profile</p>
                        <img src="/icons/edit.png" className="h-full" />
                    </div>
                </div>
            </div>


            {/* Sections */}
            <div className="Tab-Cont space-y-6 mt-8">
                {renderSection('General', generalTabs)}
                {renderSection('Privacy & Account', privacyTabs)}
                {renderSection('StockApp', stockTabs)}
                {renderSection('More Info', moreTabs)}
            </div>


            <h1 className='text-center text-[1.4vh] opacity-40 mt-6 mb-22'>App by Yash Singh Bisht.</h1>


            {/* Background Overlay */}
            {
                (openTab || closing) && (
                    <div className={`fixed inset-0 bg-[#161616] transition-opacity duration-300 ease-out
                    ${openTab && !closing ? 'opacity-80' : 'opacity-0'}
                    `}
                        onClick={closeTab}></div>
                )
            }

            {/* Tab Options */}
            <div className={`Tab-Options z-[9999999999] fixed w-full max-w-md h-auto left-0 bottom-0 px-4 pt-5 bg-[#161616] backdrop-blur-[10vh] rounded-t-4xl transform transition-all duration-300 ease-in-out
                ${openTab && !closing ? "translate-y-0" : "translate-y-full"}`}>

                {openTab && (
                    <div className='Title w-full flex px-2 justify-center items-center'>
                        <h1 className='text-5xl tracking-tight pb-3 text-white/90'>{openTab.name}</h1>
                        {/* <img src="icons/close.png" className='h-4 cursor-pointer active:scale-70 transition-all duration-150 ease-in-out' onClick={closeTab} /> */}
                    </div>
                )}


                <div className='Options max-h-[40vh] space-y-2 overflow-y-auto'>
                    {openTab?.options?.map((option, id) => (
                        <div
                            key={id}
                            className={`active:scale-93  active:bg-white/14 hover:bg-white/10 transition-all duration-250 ease-in-out rounded-2xl p-4 bg-white/5 border border-white/10 cursor-pointer ${id === 0 ? 'mt-3' : ''} ${id === openTab.options.length - 1 ? 'mb-3' : ''}`}>
                            <h1>{option}</h1>
                        </div>
                    ))}
                </div>

            </div>



        </div >
    )
}

export default Settings
