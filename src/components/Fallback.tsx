import { Flex, Spin } from "antd";

function Fallback() {
  return (
    <Flex style={{ height: "100%" }} align="center" justify="center">
      <Spin size="large" />
    </Flex>
  );
}

export default Fallback;
