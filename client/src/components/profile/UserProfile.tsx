import React, { useCallback, useState } from "react";
import Profile from "./Profile";
import AboutTab from "./about/AboutTab";
import SettingTab from "./setting/SettingTab";
import PhotosTab from "./photos/PhotosTab";
import { contentPage } from "./ProfileConstants";

const UserProfile = () => {
  const [tab, setTab] = useState(contentPage.ABOUTTAB);
  const showContent = (key: string) => {
    switch (key) {
      case contentPage.ABOUTTAB:
        return <AboutTab />;
        break;
      case contentPage.SETTING:
        return <SettingTab />;
        break;
      case contentPage.PHOTOS:
        return <PhotosTab />;
        break;
      default:
        break;
    }
  };

  const ShowProfile = useCallback(() => {
    return <Profile tab={tab} changeTab={setTab} />;
  }, []);

  return (
    <section>
      <div className="gap2 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row merged20" id="page-contents">
                <ShowProfile />
                {showContent(tab)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(UserProfile);
