import React, { useEffect } from "react";
import { Flex } from "antd";
import { TUICallKit, TUICallKitServer } from "../../../CallKit/index";
import { UIKitProvider } from "@tencentcloud/uikit-base-component-react";
const VoiceCallTestPage: React.FC = () => {
  useEffect(() => {
    TUICallKitServer.init({
      SDKAppID: 20022920,
      userID: "usertest",
      userSig: import.meta.env.VITE_TUI_CUSTOM_SIG,
    });
  });

  return (
    <Flex
      vertical
      style={{
        minHeight: "100vh",
        paddingRight: "24px",
        position: "relative",
      }}
    >
      <div className="sample-chat-h5">
        <UIKitProvider>
          <TUICallKit className={"call-uikit-mobile"} />
        </UIKitProvider>
      </div>
    </Flex>
  );
};

export default VoiceCallTestPage;
