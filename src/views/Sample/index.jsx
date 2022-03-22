import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { 
    Typography,
    Table,
    Input,
    Button
} from 'antd';

import './index.scss'
import columns from './columnConfig'
import FilterModal from './FilterModal'

import { fetchCoffee } from "../../stores/actions/sampleAction";

export default function Sample() {
    const { Title } = Typography;
    const { Search } = Input;

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.Sample.isLoading);
    const coffee = useSelector((state) => state.Sample.coffee);    
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchCoffee());
    }, [dispatch]);

    const onSearch = (value) => {
        // do something here
        dispatch(fetchCoffee());
    }

    const showFilter = () => {
        setIsFilterVisible(true);
    };

    return (
        <>
            <Title level={2}>Title</Title>
            <div style={{ width: '100%', marginBottom: '10px', textAlign: 'right' }} >
                <Search 
                    placeholder="Search" 
                    onSearch={onSearch} 
                    loading={isLoading}
                    style={{ width: 200 }} 
                />
                <Button type="primary" onClick={showFilter}>
                    Filter
                </Button>
            </div>
            <Table
                dataSource={coffee}
                columns={columns}
                loading={isLoading}
                rowKey={record => record.id}
                responsive={true}
                pagination={{ pageSize: 5}}
            />
            <FilterModal visible={isFilterVisible} handleFilter={setIsFilterVisible} />
        </>
    )
}