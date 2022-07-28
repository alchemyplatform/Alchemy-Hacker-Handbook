import React from "react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    phantom: any;
  }
}

export const PhantomConnect = ({publicKey, className}:any) => {
  const [pubKey, setPubKey] = useState(null);
  const [phantom, setPhantom] = useState<any>(null);

  useEffect(() => {
    if (!phantom) {
      console.log("phantom not found");
      connectToPhantom();
    } else {
    }
  }, []);

  useEffect(() => {
    if (phantom) {
      phantom.connect({ onlyIfTrusted: true }).then(({ publicKey }: any) => {
        setPubKey(publicKey);
        // Handle successful eager connection
      });
      phantom.on("connect", (publicKey: any) => {
        if (publicKey) {
          console.log("account connected ", publicKey.toBase58());
          setPubKey(publicKey.toBase58());
        } else {
          phantom.connect().catch((error: any) => {
            console.error("error", error);
          });
        }
      });

      phantom.on("disconnect", (publicKey: any) => {
        setPubKey(null);
        console.log("disconnect");
      });

      phantom.on("accountChanged", (publicKey: any) => {
        if (publicKey) {
          // Set new public key and continue as usual
            console.log(`Switched to account ${publicKey.toBase58()}`);
            setPubKey(publicKey.toBase58())
        }
      });
    }
  }, [phantom]);

  const connectToPhantom = () => {
    if (window && window.phantom) {
      const provider = window.phantom?.solana;

      if (provider?.isPhantom) {
        console.log("setting provider");
        setPhantom(provider);
      }
      // or install phantom
    }
  };

  const connect = async () => {
    try {
      const connection = await phantom.connect();
      //Eargerly connect
      //
    } catch (error) {
      console.error(error);
    }
  };

  const disconnect = () => {
    console.log("disconnecting");
    phantom.disconnect();
  };

  return (
    <div>
      <button
        onClick={() => {
          pubKey ? disconnect() : connect();
        }}
      >
        {pubKey ? "Disconnect" : "connect"}
      </button>
          {
              pubKey && <p>{"Your are connected with " + pubKey}</p>
     }
    </div>
  );
};
