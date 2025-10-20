import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Card, Progress, Space, Table } from 'antd';
import Search from 'antd/es/transfer/search';
import React, { useState } from 'react'
import { STATUS_COLORS } from '../utilx/Constant';
import { studentsData } from '../data/MocData';
import AddStudentModal from './AddStudentModel';




const StudentsScreen = () => {
  //local state manamge-usestate
  const [students, setStudents] = useState(studentsData);
  //ismodelvisible=local state(local variable=screenpurt)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [searchText, setSearchText] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchText.toLowerCase()) ||
    student.email.toLowerCase().includes(searchText.toLowerCase()) ||
    student.course.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddStudent = (newStudent) => {
    const student = {
      ...newStudent,
      id: students.length + 1,
      progress: 0,
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0]
    };
    setStudents([...students, student]);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      //render is arrow functions,name ,progress itc recursive data dakhvnyasathi,jast same data prt prt lihnysaivji render krtat
      render: (text, record) => (
        //space means as div antd provide space
        <Space>
        {/* icons */}
          <Avatar 
            style={{ backgroundColor: '#1890ff' }}
            size="small"
          >
            {text.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <div style={{ fontWeight: '500' }}>{text}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{record.email}</div>
          </div>
        </Space>
      ),
    },
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress) => (
        <div style={{ width: '120px' }}>
          <Progress 
            percent={progress} 
            size="small" 
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
          />
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        // dot define
        <Badge
          status={STATUS_COLORS[status]}
          text={status.toUpperCase()}
        />
      ),
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
      //tolocaldate=systemnusar date dakhvte as idean ,/us time tabe
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" icon={<EyeOutlined />} size="small">
            View
          </Button>
          <Button icon={<EditOutlined />} size="small">
            Edit
          </Button>
          <Button danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <div>
          <h1 style={{ margin: 0, color: '#1890ff' }}>Students Management</h1>
          <p style={{ margin: '8px 0 0 0', color: '#666' }}>
            Manage your students, track their progress, and monitor their performance.
          </p>
        </div>
        <Button
          type="primary" 
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Add Student
        </Button>
      </div>
      
      <Card className="dashboard-card">
        <div style={{ marginBottom: '16px' }}>
          <Search
            placeholder="Search students by name, email, or course"
            //cross icon
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300 }}
            //search icon
            prefix={<SearchOutlined />}
          />
        </div>
        
        <Table 
          dataSource={filteredStudents} 
          columns={columns} 
          rowKey="id"
          //data KITI DYAYch
          pagination={{ 
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => 
              `${range[0]}-${range[1]} of ${total} students`,
          }}
        />
      </Card>

      <AddStudentModal 
    
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onSubmit={handleAddStudent}
      />
    </div>
  );
};

export default StudentsScreen;

