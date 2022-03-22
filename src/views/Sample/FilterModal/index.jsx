import React from "react";
import { 
    Input,
    Modal,
    Select,
    DatePicker,
    Button
} from 'antd';

export default function FilterModal(props) {
    const { Option } = Select;

    const handleOk = () => {
        props.handleFilter(false);
    };

    const handleCancel = () => {
        props.handleFilter(false);
    };

    function onSelectChange(value) {
        console.log(`selected ${value}`);
    }

    function onSelectSearch(val) {
        console.log('search:', val);
    }
    
    return (
        <>
            <Modal 
                title="Basic Modal" 
                visible={props.visible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="danger" onClick={handleCancel}>
                      Reset
                    </Button>,
                    <Button key="back" onClick={handleCancel}>
                      Cancel
                    </Button>,
                    <Button type="primary" onClick={handleOk}>
                      Submit
                    </Button>,
                ]}
            >
                <p style={{marginBottom: '0px'}}>Basic</p>
                <Input placeholder="Basic" />

                <p style={{marginBottom: '0px', marginTop: '10px'}}>Select</p>
                <Select
                    showSearch
                    placeholder="Select"
                    optionFilterProp="children"
                    onChange={onSelectChange}
                    onSearch={onSelectSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    style={{width: '100%', cursor: 'pointer'}}
                >
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                </Select>

                <p style={{marginBottom: '0px', marginTop: '10px'}}>Date</p>
                <Input.Group compact>
                    <DatePicker style={{ width: '100%' }} />
                </Input.Group>

                <p style={{marginBottom: '0px', marginTop: '10px'}}>Date Range</p>
                <Input.Group compact>
                    <DatePicker.RangePicker style={{ width: '100%' }} />
                </Input.Group>

                <p style={{marginBottom: '0px', marginTop: '10px'}}>Number Range</p>
                <Input.Group compact>
                    <Select 
                        defaultValue="1"
                        style={{width: '20%'}}
                    >
                        <Option value="1">Between</Option>
                        <Option value="2">Except</Option>
                    </Select>
                    <Input style={{ width: '35%', textAlign: 'center' }} placeholder="Minimum" />
                    <Input
                        className="site-input-split"
                        style={{
                        width: '10%',
                        borderLeft: 0,
                        borderRight: 0,
                        pointerEvents: 'none',
                        }}
                        placeholder="~"
                        disabled
                    />
                    <Input
                        className="site-input-right"
                        style={{
                        width: '35%',
                        textAlign: 'center',
                        }}
                        placeholder="Maximum"
                    />
                </Input.Group>
            </Modal>
        </>
    )
}