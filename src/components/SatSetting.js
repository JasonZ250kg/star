import React, { Component } from "react";
import { Form, Button, InputNumber } from "antd";

class SatSetting extends Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 11 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 },
      },
    };

    return (
      <Form
        {...formItemLayout}
        className="sat-setting"
        onFinish={this.showSatellite}
      >
        <Form.Item
          label="Longitude(degrees)"
          name="longitude"
          rules={[
            {
              required: true,
              message: "Please input your Longitude",
            },
          ]}
        >
          <InputNumber
            min={-180}
            max={180}
            style={{ width: "100%" }}
            placeholder="Please input Longitude"
          />
        </Form.Item>

        <Form.Item
          label="Latitude(degrees)"
          name="latitude"
          rules={[
            {
              required: true,
              message: "Please input your Latitude",
            },
          ]}
        >
          <InputNumber
            placeholder="Please input Latitude"
            min={-90}
            max={90}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Altitude(meters)"
          name="altitude"
          rules={[
            {
              required: true,
              message: "Please input your Altitude",
            },
          ]}
        >
          <InputNumber
            placeholder="Please input Altitude"
            min={-413}
            max={8850}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Radius(degrees)"
          name="radius"
          rules={[
            {
              required: true,
              message: "Please input your Radius",
            },
          ]}
        >
          <InputNumber
            placeholder="Please input Radius"
            min={0}
            max={90}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Duration(secs)"
          name="duration"
          rules={[
            {
              required: true,
              message: "Please input your Duration",
            },
          ]}
        >
          <InputNumber
            placeholder="Please input Duration"
            min={0}
            max={90}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item className="show-nearby">
          <Button
            type="primary"
            htmlType="submit"
            style={{ textAlign: "center" }}
          >
            Find Nearby Satellite
          </Button>
        </Form.Item>
      </Form>
    );
  }

  showSatellite = (values) => {
    // e.preventDefault();
    // this.props.form.validateFields().then((values) => {
    console.log("Received values of form: ", values);
    this.props.onShow(values);
    //  });
  };
}

// const SatSetting1 = Form.create({ name: "satellite-setting" })(SatSettingForm);
export default SatSetting;
