import { DiscordIcon } from "components/svg/DiscordIcon/DiscordIcon";
import { MetaMaskIcon } from "components/svg/MetaMaskIcon/MetaMaskIcon";
import { useEffect, useState } from "react";

const Form = () => {
  const [discord, setDiscord] = useState("");
  const [metaMask, setMetaMask] = useState("");
  const [discordErrorValidateMessage, setDiscordErrorValidateMessage] =
    useState("");
  const [metaMaskErrorValidateMessage, setMetaMaskErrorValidateMessage] =
    useState("");
  const [status, setStatus] = useState("mint");

  useEffect(() => {
    if (
      discordErrorValidateMessage === "" &&
      metaMaskErrorValidateMessage === ""
    ) {
      setStatus("mint");
    }
  }, [discordErrorValidateMessage, metaMaskErrorValidateMessage]);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "discord":
        setDiscord(value);
        setDiscordErrorValidateMessage("");
        break;
      case "metaMask":
        setMetaMask(value);
        setMetaMaskErrorValidateMessage("");
        break;

      default:
        break;
    }
  };

  const handleValidationIsEmpty = () => {
    let error = false;

    if (discord === "") {
      setDiscordErrorValidateMessage("Can not be empty");
      error = true;
    }

    if (metaMask === "") {
      setMetaMaskErrorValidateMessage("Can not be empty");
      error = true;
    }

    return error;
  };

  const handleValidationIsWrongData = () => {
    const regexDiscord = /^@([a-z]{8})$/;
    const regexMetaMask = /^1x([0-9a-z]{17})$/;

    let error = false;

    if (!regexDiscord.test(discord)) {
      setDiscordErrorValidateMessage("Wrong discord");
      error = true;
    }

    if (!regexMetaMask.test(metaMask)) {
      setMetaMaskErrorValidateMessage("Wrong wallet");
      error = true;
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidationIsEmpty()) {
      setStatus("error");
      return;
    }

    if (handleValidationIsWrongData()) {
      setStatus("error");
      return;
    }

    setStatus("minted");

    formReset();
  };

  const formReset = () => {
    setDiscord("");
    setMetaMask("");
    setTimeout(() => {
      setStatus("mint");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="discord">
        <DiscordIcon width={24} height={24} />
        <input
          onChange={handleChange}
          value={discord}
          name="discord"
          type="text"
          id="discord"
          placeholder="@username"
        />
        {discordErrorValidateMessage !== "" && (
          <p>{discordErrorValidateMessage}</p>
        )}
      </label>
      <label htmlFor="metamask">
        <MetaMaskIcon width={24} height={22.55} />
        <input
          onChange={handleChange}
          value={metaMask}
          name="metaMask"
          type="text"
          id="metamask"
          placeholder="Wallet address"
        />
        {metaMaskErrorValidateMessage !== "" && (
          <p>{metaMaskErrorValidateMessage}</p>
        )}
      </label>
      <button type="submit">{status}</button>
    </form>
  );
};

export { Form };
