import { Anchor, IconSuccess, IconWarning, IconYellow } from "./styles";

const Percent = ({ delivered, source, index }) => {
  const percentSource = source > 10 ? `${source}%` : `0${source}%`;
  const percentDelivered = delivered > 10 ? `${delivered}%` : `0${delivered}%`;

  return (
    <Anchor href={`#${index}`}>
      Entregue: {percentDelivered} / Original: {percentSource}
      {source < 20 ? <IconSuccess /> : <></>}
      {source > 20 && source < 45 ? <IconYellow /> : <></>}
      {source < 75 && source > 45 ? <IconWarning /> : <></>}
      {source > 75 ? <IconWarning /> : <></>}
    </Anchor>
  );
};

export default Percent;
