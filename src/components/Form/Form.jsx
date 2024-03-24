import { DiscordIcon } from "components/svg/DiscordIcon/DiscordIcon";
import { MetaMaskIcon } from "components/svg/MetaMaskIcon/MetaMaskIcon";
import { useEffect, useState } from "react";
import { Button, ErrorMessage, IconContainer, Input, Label } from "./Form.styled";

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

  const handleValidation = () => {
    const regexDiscord = /^@([a-z]{8})$/;
    const regexMetaMask = /^1x([0-9a-z]{17})$/;

    let error = false;

    if (discord === "") {
      setDiscordErrorValidateMessage("Can not be empty");
      error = true;
    } else {
      if (!regexDiscord.test(discord)) {
        setDiscordErrorValidateMessage("Wrong discord");
        error = true;
      }
    }

    if (metaMask === "") {
      setMetaMaskErrorValidateMessage("Can not be empty");
      error = true;
    } else {
      if (!regexMetaMask.test(metaMask)) {
        setMetaMaskErrorValidateMessage("Wrong wallet");
        error = true;
      }
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      setStatus("error");
      return;
    }

    console.log({ discord, metaMask });

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
      <Label htmlFor="discord">
        <IconContainer>
          <DiscordIcon width={24} height={24} />
        </IconContainer>

        <Input
          onChange={handleChange}
          value={discord}
          name="discord"
          type="text"
          id="discord"
          placeholder="@username"
          className={discordErrorValidateMessage !== "" ? "isError" : ""}
        />
        {discordErrorValidateMessage !== "" && (
          <ErrorMessage>{discordErrorValidateMessage}</ErrorMessage>
        )}
      </Label>
      <Label htmlFor="metamask">
        <IconContainer>
          <MetaMaskIcon width={24} height={22.55} />
        </IconContainer>

        <Input
          onChange={handleChange}
          value={metaMask}
          name="metaMask"
          type="text"
          id="metamask"
          placeholder="Wallet address"
          className={metaMaskErrorValidateMessage !== "" ? "isError" : ""}
        />
        {metaMaskErrorValidateMessage !== "" && (
          <ErrorMessage>{metaMaskErrorValidateMessage}</ErrorMessage>
        )}
      </Label>
      <Button type="submit">{status}</Button>
    </form>
  );
};

export { Form };
