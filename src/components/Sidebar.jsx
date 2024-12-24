import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function Sidebar() {
    const [dialogOpen, setDialogOpen] = useState(false)
    
  return (
    <>
      <div className="sidebar">
        <a className="sidebar-header" href="/">
          <img src="/images/logo.png" alt="Logo" width="87" height="54.49" />
          <img src="/images/logo2.png" alt="Nuvance Health" width="135" />
        </a>
        <nav className="sidebar-navigation">
          <a href="#" onClick={() => setDialogOpen(true)}>Services & Treatments</a>
          <div className="sidebar-navigation-divider"></div>
          <a href="#">Consultation Fee Structure</a>
          <div className="sidebar-navigation-divider"></div>
          <a href="#">About Us</a>
          <a href="#" className="with-icon">
            <img
              src="/images/calendar.png"
              alt="Calendar"
              width="16"
              height="18"
            />
            Content
          </a>
          <a href="#" className="with-icon">
            <img
              src="/images/padlock.png"
              alt="Padlock"
              width="16"
              height="18"
            />
            Content
          </a>
          <a href="#" className="with-icon">
            <img src="/images/dollar.png" alt="Dollar" width="12" height="19" />
            Content
          </a>
          <a href="#" className="with-icon">
            <img
              src="/images/giving-love.png"
              alt="Giving Love"
              width="16"
              height="15"
            />
            Content
          </a>
        </nav>
      </div>
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen} modal={false}>
		<Dialog.Portal>
			<Dialog.Content className="sub-sidebar-content">
				<Dialog.Title className="sub-sidebar-title">
                    Service & Treatments
                </Dialog.Title>
				<Dialog.Description className="sub-sidebar-description">
                    <ul className="sub-sidebar-list">
                        <li><a href="#">Primary Care</a></li>
                        <li><a href="#">Cancer Care</a></li>
                        <li><a href="#">Blood Draw</a></li>
                        <li><a href="#">Heart and Vascular</a></li>
                        <li><a href="#">Imaging and Radiology</a></li>
                        <li><a href="#">Imaging and Radiology</a></li>
                        <li><a href="#">Neurology and Neurosurgery</a></li>
                        <li><a href="#">Physycal Rehabilitaion</a></li>
                        <li><a href="#">Baritriaric Surgery and Medical</a></li>
                        <li><a href="#">Weight Loss</a></li>
                        <li><a href="#">Digestive Healts</a></li>
                        <li><a href="#">Women&apos;s Healts</a></li>
                    </ul>
                    <button className="sub-sidebar-action-button">
                        View All Service & Treatments
                    </button>
                </Dialog.Description>
				{/* <Dialog.Close /> */}
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
    </>
  );
}
