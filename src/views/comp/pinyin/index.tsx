import { Card, Flex } from "antd";
import { pinyin } from "pinyin-pro";

const poem1 = `折花逢驿使，寄与陇头人。江南无所有，聊赠一枝春。`;
const poem2 = `君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。`;

type TextChar = {
  hz: string;
  py: string;
};

const convert2pinyin = (texts) => {
  const results: Array<TextChar> = [];
  texts.forEach((text) => {
    results.push({ hz: text, py: pinyin(text.charAt(0)) });
  });
  return results;
};

const chars1: Array<TextChar> = convert2pinyin(poem1.split(""));
const chars2: Array<TextChar> = convert2pinyin(poem2.split(""));

const Home = () => {
  return (
    <Flex gap={20}>
      <Card title="《赠范晔诗》" style={{ width: 270 }}>
        <Flex wrap="wrap" gap={20}>
          {chars1.map((char) => {
            return (
              <Flex style={{ width: "20px" }} vertical align="center">
                <span>{char.py}</span>
                <span>{char.hz}</span>
              </Flex>
            );
          })}
        </Flex>
      </Card>
      <Card title="《夜雨寄北》" style={{ width: 350 }}>
        <Flex wrap="wrap" gap={20}>
          {chars2.map((char) => {
            return (
              <Flex style={{ width: "20px" }} vertical align="center">
                <span>{char.py}</span>
                <span>{char.hz}</span>
              </Flex>
            );
          })}
        </Flex>
      </Card>
    </Flex>
  );
};

export default Home;
