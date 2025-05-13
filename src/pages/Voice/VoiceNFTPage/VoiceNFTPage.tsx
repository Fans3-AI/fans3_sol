import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button, Col, Divider, Flex, Row, Space, Tag, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import RecordButton from "../../../components/Audio/RecordButton";
import {
  getRecordingStatus,
  saveRecordingStatus,
} from "../../../services/recordingService";
import UploadImage from "../../../components/Common/UploadImage/UploadImage";
import NFTCard from "../../../components/Voice/NFTCard/NFTCard";
import * as icons from "../../../assets/icons";
import { ApiClient } from "../../../utils/ApiClient";
import { showError, showSuccess } from "../../../utils/message";
const JWT = import.meta.env.VITE_JWT;
import "@solana/wallet-adapter-react-ui/styles.css";
import { TUICallKitServer, TUICallType } from "../../../CallKit/index";
import { TUICallKit } from "../../../CallKit/index";
import { UIKitProvider } from "@tencentcloud/uikit-base-component-react";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  mplTokenMetadata,
  createProgrammableNft,
} from "@metaplex-foundation/mpl-token-metadata";
import { percentAmount, generateSigner } from "@metaplex-foundation/umi";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { base58 } from "@metaplex-foundation/umi";
import { UserPublic, VoicePublic } from "../../../api/fe-client-typescript";
import axios from "axios";
const endpoint = `https://mainnet.helius-rpc.com/?api-key=${
  import.meta.env.VITE_HELIUS_API_KEY
}`;
const { Title, Text } = Typography;

const styles = {
  fontColor: {
    color: "white",
  },
  select: {
    width: 200,
    fontSize: "16px",
    color: "black",
  },
};

const VoiceNFTPage: React.FC = () => {
  const { callApi, usersApi, attachmentsApi, voicesApi } = ApiClient;
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  const [recordingStatus, setRecordingStatus] = useState({
    hasRecorded: false,
    recordedTime: "",
    audioUrl: "",
  });
  const [imageUrl, setImageUrl] = useState<string>();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [NftImageUrl, setNftImageUrl] = useState<string | undefined>();
  const [metadataUri, setMetadataUri] = useState<string | undefined>();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [voices, setVoices] = useState<VoicePublic[]>([]);
  const [userInfo, setUserInfo] = useState<UserPublic | null>(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  });
  const [selectedSpeechId, setSelectedSpeechId] = useState<number | undefined>(
    undefined
  );
  const [refreshVoices, setRefreshVoices] = useState(false);
  useEffect(() => {
    const status = getRecordingStatus();
    if (status) {
      setRecordingStatus({
        hasRecorded: status.hasRecorded,
        recordedTime: status.recordedTime,
        audioUrl: status.audioUrl || "",
      });
    }
    TUICallKitServer.init({
      SDKAppID: Number(import.meta.env.VITE_TUI_APP_ID),
      userID: "customtest",
      userSig: import.meta.env.VITE_TUI_CUSTOM_SIG,
    });
  }, []);

  useEffect(() => {
    usersApi.readUserMe().then((res: UserPublic) => {
      localStorage.setItem("userInfo", JSON.stringify(res));
      setUserInfo(res);
    });
    usersApi.readUserVoices(userInfo?.id as number).then((res: any) => {
      console.log("readVoices", res);
      setVoices(res as VoicePublic[]);
    });
  }, [userInfo?.id, refreshVoices]);

  const handleRecordEnd = (recordingTime: string, audioBlob?: Blob) => {
    if (recordingTime !== "0:00" && audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      setRecordingStatus({
        hasRecorded: true,
        recordedTime: recordingTime,
        audioUrl: audioUrl,
      });
      saveRecordingStatus(recordingTime, audioBlob);
      const file = new File([audioBlob], "audio.mp3", { type: "audio/mpeg" });
      setAudioFile(file);
    }
  };
  const handleUpload = async () => {
    try {
      setIsUploading(true);
      setUploadSuccess(false);

      if (!imageFile || !audioFile) {
        setIsUploading(false);
        return;
      }

      const uploadToPinata = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("network", "public");
        const response = await fetch("https://uploads.pinata.cloud/v3/files", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
          body: formData,
        });
        const result = await response.json();
        return result?.data.cid;
      };

      const imageCid = await uploadToPinata(imageFile);
      const imageUri =
        "https://salmon-fashionable-cattle-908.mypinata.cloud/ipfs/" + imageCid;
      setNftImageUrl(imageUri);

      const audioCid = await uploadToPinata(audioFile);
      const audioUri =
        "https://salmon-fashionable-cattle-908.mypinata.cloud/ipfs/" + audioCid;

      const metadata = {
        name: "My NFT",
        description: "This is an NFT with image and audio",
        image: imageUri,
        animation_url: audioUri,
        attributes: [
          {
            trait_type: "trait1",
            value: "value1",
          },
        ],
        properties: {
          files: [
            {
              uri: imageUri,
              type: imageFile.type,
            },
            {
              uri: audioUri,
              type: audioFile.type,
            },
          ],
          category: "video",
        },
      };
      const metadataBlob = new Blob([JSON.stringify(metadata)], {
        type: "application/json",
      });
      const metadataFile = new File([metadataBlob], "metadata.json");
      const metadataForm = new FormData();
      metadataForm.append("file", metadataFile);
      metadataForm.append("network", "public");

      const metaResponse = await fetch(
        "https://uploads.pinata.cloud/v3/files",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
          body: metadataForm,
        }
      );

      const metadataResult = await metaResponse.json();
      const uri =
        "https://salmon-fashionable-cattle-908.mypinata.cloud/ipfs/" +
        metadataResult?.data.cid;

      console.log("✅ Metadata uploaded:", metadataResult);
      console.log("Metadata URI:", uri);

      setMetadataUri(uri);
      setUploadSuccess(true);
      setIsUploading(false);

      return uri;
    } catch (error) {
      console.error("❌ Upload failed:", error);
      setIsUploading(false);
      return undefined;
    }
  };
  const getProfilePreUrl = async () => {
    const res = await attachmentsApi.createPresignedUrls([
      {
        filename: imageFile?.name as string,
        relatedObjectType: "Voice",
        relatedObjectSubtype: "profile_pic",
      },
    ]);
    await uploadFileToS3(imageFile as File, res[0].uploadUrl);
    return res[0];
  };

  // Upload file to S3
  const uploadFileToS3 = async (file: File, url: string) => {
    try {
      await axios.put(url, file, {
        headers: { "Content-Type": file.type },
      });
    } catch (error) {
      showError("S3 upload error");
      console.error("S3 upload error", error);
    }
  };
  // Add new Voice
  const addVoice = async () => {
    try {
      const profileResultArray = [366, 367, 368, 369];
      const randomIndex = Math.floor(Math.random() * profileResultArray.length);
      let profileResultId = profileResultArray[randomIndex];
      if (imageFile) {
        try {
          const profileResult = await getProfilePreUrl();
          profileResultId = profileResult.id;
        } catch (error) {
          showError("Failed to upload profile picture");
          console.error("Failed to upload profile picture", error);
        }
      }

      // Ensure audioFile exists
      if (!audioFile) {
        throw new Error("Please select an audio file");
      }
      // Create Voice using voicesApi
      const response = await voicesApi.createVoice(
        imageFile?.name as string,
        profileResultId,
        imageFile?.name as string,
        audioFile as File,
        "standard",
        undefined
      );
      console.log("Voice created successfully:", response);
      showSuccess("Create successful");
    } catch (error) {
      showError("Submission failed");
      console.error("Failed to create Voice", error);
    }
  };

  //Mint Solana  NFT
  const MintButton = () => {
    const { wallet, publicKey, connected } = useWallet();

    const handleMint = useCallback(async () => {
      if (!wallet || !wallet.adapter || !connected || !publicKey) {
        alert("Please connect your Phantom wallet first.");
        return;
      }

      if (!metadataUri) {
        if (!imageFile || !audioFile) {
          alert("Please select both an image and an audio file.");
          return;
        }

        const uri = await handleUpload();
        if (!uri) {
          alert("Failed to upload metadata. Please try again.");
          return;
        }
      }

      try {
        const umi = createUmi(endpoint).use(mplTokenMetadata());
        const identity = walletAdapterIdentity(wallet.adapter);
        umi.use(identity);
        const mint = generateSigner(umi);
        await createProgrammableNft(umi, {
          mint,
          authority: umi.identity,
          name: "Voice NFT",
          uri: metadataUri as string,
          sellerFeeBasisPoints: percentAmount(5.5),
          ruleSet: null,
        })
          .sendAndConfirm(umi)
          .then(async (res) => {
            showSuccess("NFT minted successfully!");
            const signature = base58.deserialize(res.signature)[0];
            console.log(
              `https://explorer.solana.com/tx/${signature}?cluster=mainnet-beta`
            );

            await addVoice();
            const response = await usersApi.readUserVoices(
              userInfo?.id as number
            );
            console.log("readVoices", response);
            setVoices(response as VoicePublic[]);
            setRefreshVoices((prev) => !prev);
          });
      } catch (err) {
        console.error("Minting failed:", err);
        alert("Minting failed: " + (err as Error).message);
      }
    }, [wallet, connected, publicKey, metadataUri]);

    return (
      <Button
        type="primary"
        onClick={handleMint}
        className="generateButton"
        style={{ width: "200px" }}
        disabled={isUploading}
      >
        <img src={icons["leida"]} className="iconImg" alt="generate icon" />
        Generate Solana NFT
      </Button>
    );
  };

  const handleCardClick = (speechId: number | undefined) => {
    setSelectedSpeechId(speechId);
    init(speechId as number);
    console.log("Selected Speech ID:", speechId);
  };
  //init TRTC
  const init = async (speechId: number) => {
    await callApi
      .createCall({
        voiceId: speechId,
        userName: "userName_example",
      })
      .then(async (res) => {
        await TUICallKitServer.call({
          userID: "usertest",
          roomID: res?.channel.id,
          type: TUICallType.AUDIO_CALL,
        });
      });
  };

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
      <Title level={3} style={styles.fontColor}>
        Voice NFT
      </Title>
      <Divider style={{ borderColor: "#3a3a3a" }} />
      <Space direction="vertical" size="middle">
        <Space direction="vertical" size="small">
          <Text style={styles.fontColor}>Select image</Text>
          <UploadImage
            onChange={(file, url) => {
              setImageFile(file);
              setImageUrl(url);
            }}
          />
        </Space>
        <Space direction="vertical" size="small">
          <Text style={styles.fontColor}>Sound input</Text>
          <RecordButton onRecordEnd={handleRecordEnd} />
        </Space>
        <Space direction="vertical" size="small">
          <Text style={styles.fontColor}>Input status</Text>
          {recordingStatus.hasRecorded && (
            <Tag icon={<CheckCircleOutlined />} color="success">
              Received {recordingStatus.recordedTime} recording
            </Tag>
          )}
          {metadataUri && (
            <Tag icon={<CheckCircleOutlined />} color="success">
              Metadata uploaded successfully
            </Tag>
          )}
        </Space>
      </Space>

      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div style={{ marginTop: 20 }}>
              <WalletMultiButton />
            </div>
            <div style={{ marginTop: 10 }}>
              <MintButton />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

      <Flex align="center" style={{ paddingTop: 20 }} gap="middle">
        {/* <Button type="primary" onClick={init} className="generateButton">
          <img src={icons["leida"]} className="iconImg" alt="generate icon" />
          Call
        </Button> */}
        <Text style={styles.fontColor}>point balance:34326443</Text>
      </Flex>
      <Flex vertical flex={1}>
        <Row>
          <Col span={18}>
            <Flex vertical>
              <Divider className="textToSpeechDivider" />
              <Text className="textToSpeechLabel">Output</Text>
              <div>
                <Row gutter={[16, 16]}>
                  {voices.map((voice, index) => (
                    <Col span={2} key={voice.id || index}>
                      <NFTCard
                        key={voice.id}
                        NftImageUrl={voice.profilePic?.downloadUrl}
                        speechId={voice.id}
                        voiceName={voice.name}
                        onCardClick={handleCardClick} // 将回调传递给 NFTCard
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};

export default VoiceNFTPage;
