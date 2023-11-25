
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Editor } from '@tinymce/tinymce-react';

const NoteModal = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');

  const handleOk = () => {
    // Handle save logic here
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleEditorChange = (content) => {
    setContent(content);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Note Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Editor
          apiKey="YOUR_TINYMCE_API_KEY"
          initialValue={content}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
          }}
          onEditorChange={handleEditorChange}
        />
      </Modal>
    </div>
  );
};

export default NoteModal;
