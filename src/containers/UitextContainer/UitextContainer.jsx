import { useEffect, useState } from 'react';
import { Uitext } from '../../components/Uitext';
import { Text } from '../../components/Text';

export const UitextContainer = () => {
  const [text, setText] = useState('Hello');
  const a = text => text;
  useEffect(() => {
    setText(`${text} loft`);
  }, []);

  return (
    <Uitext>
      <Text text={text} />
      <Text text={text} />
      <Text text={text} />
    </Uitext>
  );
};
