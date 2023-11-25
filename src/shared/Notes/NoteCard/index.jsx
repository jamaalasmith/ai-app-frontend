
import React from 'react';
import { Comment } from '@ant-design/compatible';
import { Switch } from 'antd';

export const NoteCard = ({note })=> {
    console.log(note)
    const {first_name, last_name} = note.created_by;

    const author = `${first_name} ${last_name}`;

    return (
        <div>
            <Comment author={author}
                content={'This is a comment'}
                style={{
                    borderLeft: "3px solid",
                    borderColor: "#fff",
                    borderBottom: "1px solid #e8e8e8",
                  }}
                  onClick={() => console.log("clicked")}
                />
            <Switch checkedChildren="Shared" unCheckedChildren="Private" defaultChecked={note.is_shared}/>
        </div>
    );
};

export default NoteCard;
