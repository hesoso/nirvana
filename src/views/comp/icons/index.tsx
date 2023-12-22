import { Col, Row, Card } from "antd";
import { copyText } from "@/utils/index";
import { useNotification } from "@/hooks";
import IconFont, { icons } from "@/components/iconfont";

const Icons = () => {
  const notify = useNotification();

  const hendleCopy = (text) => {
    copyText(text)
      .then(() =>
        notify({ type: "success", message: "复制成功", description: text }),
      )
      .catch(() => notify({ type: "error", message: "复制失败" }));
  };

  return (
    <Row gutter={[15, 15]}>
      {icons.map((iconName, index) => {
        return (
          <Col key={index} span={2}>
            <Card hoverable onClick={() => hendleCopy(iconName)}>
              <IconFont style={{ fontSize: "30px" }} type={iconName} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Icons;
