import { Anchor, IconWarning } from "./styles";

const Percent = ({ delivered, source, index }) => {
  const percentSource = source > 10 ? `${source}%` : `0${source}%`;
  const percentDelivered = delivered > 10 ? `${delivered}%` : `0${delivered}%`;

  if (delivered > 20) {
    return (
      <Anchor href={`#${index}`}>
        Entregue: {percentDelivered} / Original: {percentSource}
        <IconWarning />
      </Anchor>
    );
  }
};

export default Percent;
