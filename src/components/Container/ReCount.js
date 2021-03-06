import React, { Component } from 'react'
import { Checkbox, Button, Modal, message } from 'antd'
import { ResetCounter } from '../../API/Api'
const CheckboxGroup = Checkbox.Group
export default class ReCount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: true,
      visible: false,
      confirmLoading: false
    }
  }
  handleCheckChange = (value) => {
    if (value.length === 5) {
      this.setState({
        isDisabled: false
      })
    } else {
      this.setState({
        isDisabled: true
      })
    }
  }
  handleClickOK = () => {
    ResetCounter()
      .then(res => {
        message.success('重置成功')
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      })
      .catch(err => {
        this.setState({
          visible: false
        })
      })
  }

  handleClickCancel = () => {
    this.setState({
      visible: false
    })
  }
  handleButtonClick = () => {
    this.setState({
      visible: true
    })
  }
  render() {
    const options = [
      {
        label: '重置',
        value: 1
      },
      {
        label: '重置',
        value: 2
      },
      {
        label: '重置',
        value: 3
      },
      {
        label: '重置',
        value: 4
      },
      {
        label: '重置',
        value: 5
      }
    ]
    return (
      <section>
        <br/>
        <h4>重置小红花计数器</h4>
        <p>
          说明：1、重置小红花计数器，将所有学生用户获得小红花的上限重置为100。

          2、依次点选5个对钩，“关闭”键方可亮起。
        </p>
        <br/>
        <CheckboxGroup options={options} onChange={this.handleCheckChange}/>
        <br/>
        <br/>
        <Button disabled={this.state.isDisabled} onClick={this.handleButtonClick}>重置</Button>
        <Modal
          title='确认重置'
          okText='确认'
          cancelText='取消'
          onOk={this.handleClickOK}
          onCancel={this.handleClickCancel}
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
        >
          是否立即重置小红花计数器？
        </Modal>
        <br/>
        <br/>
      </section>
    )
  }
}