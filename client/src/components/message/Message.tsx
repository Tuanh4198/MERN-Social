import React from 'react';
import ListChat from './ListChat';
import Conversations from './Conversations';
import InfoPartner from './InfoPartner';

const Message = () => {
  return (
    <section>
      <div className="gap2 no-gap gray-bg">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-lg-12">
							<ListChat/>
							<div className="tab-content messenger">
								<div className="tab-pane active fade show ">
									<div className="row merged">
										<Conversations/>
										<InfoPartner/>
									</div>
								</div>
							</div>
            </div>
          </div>
        </div>
      </div>	
    </section>
  );
};

export default React.memo(Message);
