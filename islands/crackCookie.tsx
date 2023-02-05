import { Button } from "../components/Button.tsx";
import { useState } from "preact/hooks";
import { Message } from "../components/Message.tsx";

export default function crackCookie() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getMessage = async () => {
    setLoading(true);
    const response: Response = await fetch("/api/cohere");
    const msg = await response.json();
    setLoading(false);
    setMessage(msg);
  };

  return (
    <>
      <Message message={message} loading={loading} />
      <Button onClick={() => getMessage()} />
    </>
  );
}
