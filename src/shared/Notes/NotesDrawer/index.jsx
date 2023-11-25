import React, { useState } from 'react';
import { Drawer, Button, Switch } from 'antd';
import { NoteCard } from '../NoteCard';

export const NotesDrawer = () => {
    const [visible, setVisible] = useState(true);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const notes = [
        {
            is_shared: true,
            note: "Lorem ipsum dolor sit amet",
            created_by: {
                first_name: "John",
                last_name: "Doe"
            }
        },
        {
            is_shared: false,
            note: "Consectetur adipiscing elit",
            created_by: {
                first_name: "Jane",
                last_name: "Smith"
            }
        },
        {
            is_shared: true,
            note: "Sed do eiusmod tempor incididunt",
            created_by: {
                first_name: "Michael",
                last_name: "Johnson"
            }
        },
        {
            is_shared: false,
            note: "Ut labore et dolore magna aliqua",
            created_by: {
                first_name: "Emily",
                last_name: "Brown"
            }
        },
        {
            is_shared: true,
            note: "Excepteur sint occaecat cupidatat non proident",
            created_by: {
                first_name: "David",
                last_name: "Wilson"
            }
        }
    ];
    const title = "Notes"
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open Drawer
            </Button>

            <Drawer
                 title={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '8px' }}>Note</span>
                      <Switch />
                    </div>
                  }
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {notes.map((note) => {
                    return (
                        <NoteCard note={note}/>
                    );
                })}
            </Drawer>
        </>
    );
};

