import React from 'react';
import LayoutDashboard from '../LayoutDashboard';

const Settings = () => {
    return (
        <div>
                        <div className="pt-6 px-4 ">
                            <h2>Settings</h2>
                        </div>
        </div>
    );
}
Settings.layout = (page) => <LayoutDashboard children={page} />;

export default Settings;
