/**
 * Created by YouHan on 2016/8/29.
 */

/* @flow */
"use strict";

import React, {PropTypes} from "react";
import {Card, Row, Col, Form, message, Input, DatePicker, Tabs, InputNumber} from "antd";
import CommonSelect from "./../common/commonSelect";
import {TaskStatus} from "./../common/constSelect";

const FormItem = Form.Item;

const TaskItem = React.createClass({
    propTypes: {
        id: PropTypes.any,
        title: PropTypes.string,
        owner: PropTypes.any,

        taskEst: PropTypes.number,
        todoEst: PropTypes.number,
        desc: PropTypes.string,

        status: PropTypes.string
    },
    getDefaultProps(){
        return {
            title: '',
            taskEst: 0,
            todoEst: 0,
            desc: ''
        }
    },
    render (){
        const {titleChange, ownerChange, taskEstChange, todoEstChange, descChange, statusChange} = {...this.props};
        return (
            <Card style={{marginTop:'6px'}}>
                <Form horizontal>
                    <Row>
                        <Col span="24">
                            <FormItem>
                                <Input value={this.props.title} onChange={titleChange}
                                       placeholder="Task Name"/>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem
                                label="Task Owner"
                                labelCol={{span : 10}}
                                wrapperCol={{ span: 14 }}
                            >
                                <CommonSelect url="/member/all" value={this.props.owner} onChange={ownerChange}/>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem
                                label="Status"
                                labelCol={{span : 10}}
                                wrapperCol={{ span: 14 }}
                            >
                                <TaskStatus value={this.props.status} onChange={statusChange}/>
                            </FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem
                                label="Task Est"
                                labelCol={{span : 10}}
                                wrapperCol={{ span: 14 }}
                            >
                                <InputNumber value={this.props.taskEst} onChange={taskEstChange}/>
                            </FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem
                                label="TODO Est"
                                labelCol={{span : 10}}
                                wrapperCol={{ span: 14 }}
                            >
                                <InputNumber value={this.props.todoEst} onChange={todoEstChange}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                label="Description"
                                labelCol={{span : 2}}
                                wrapperCol={{ span: 14 }}
                            >
                                <Input type="textarea" rows="4" value={this.props.desc} onChange={descChange}/>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Card>
        )
    }
});


const Tasks = React.createClass({
    getInitialState(){
        return {
            list: [{
                title: '',
                taskEst: 0,
                todoEst: 0,
                desc: '',
                owner: this.props.owner
            }]
        }
    },
    componentWillMount(){
        this.loadData();
    },
    loadData(){
        //TODO
    },
    titleChange(key, e){
        this.state.list[key].title = e.target.value;
        this.setState(this.state);
    },
    taskEstChange(key, value){
        this.state.list[key].taskEst = value;
        this.setState(this.state);
    },
    todoEstChange(key, value){
        this.state.list[key].todoEst = value;
        this.setState(this.state);
    },
    descChange(key, e){
        this.state.list[key].desc = e.target.value;
        this.setState(this.state);
    },
    statusChange(key, value){
        this.state.list[key].status = value;
        this.setState(this.state);
    },
    ownerChange(key, value){
        this.state.list[key].owner = value;
        this.setState(this.state);
    },
    save(){

    },
    render(){
        return <div style={{
            margin : '12px'
        }}>
            {this.state.list.map((item, key) => {
                return <TaskItem
                    key={key}
                    id={item.id}
                    title={item.title}
                    taskEst={item.taskEst}
                    todoEst={item.todoEst}
                    desc={item.desc}
                    status={item.status}
                    owner={item.owner}
                    titleChange={this.titleChange.bind(this,key)}
                    taskEstChange={this.taskEstChange.bind(this,key)}
                    todoEstChange={this.todoEstChange.bind(this,key)}
                    descChange={this.descChange.bind(this,key)}
                    statusChange={this.statusChange.bind(this,key)}
                    ownerChange={this.ownerChange.bind(this,key)}
                    save={this.save.bind(this,key)}
                />
            })}
        </div>;
    }
});


export default Tasks;