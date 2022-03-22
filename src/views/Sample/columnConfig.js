const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      scopedSlots: { customRender: 'id' },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      scopedSlots: { customRender: 'title' },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      scopedSlots: { customRender: 'description' },
    },
];

export default columns