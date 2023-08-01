import React from "react";
import {
	Form,
	Input,
	Switch,
	Upload,
	Button,
	Divider,
	Space,
	Table,
} from "antd";
import { IoTrashBinOutline, IoCloudUploadOutline } from "react-icons/io5";
import type { ColumnsType } from "antd/es/table";
import type { UploadFile } from "antd";

type TWebPortalSettingsFormProps = {
	handleWebPortalSettingsFormSubmit: (webPortalSettings: any) => void;
};

const BANNER_PHOTOS_LIST: Array<UploadFile> = [
	{
		uid: "-1",
		name: "image.png",
		status: "done",
		url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
	},
	{
		uid: "-2",
		name: "image.png",
		status: "done",
		url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
	},
	{
		uid: "-3",
		name: "image.png",
		status: "done",
		url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
	},
	{
		uid: "-4",
		name: "image.png",
		status: "done",
		url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
	},
];

type TTableColumn = {
	key: string;
	name: string;
	filename: string;
};

const COLUMNS: ColumnsType<TTableColumn> = [
	{
		dataIndex: "name",
		title: "Name",
	},
	{
		dataIndex: "filename",
		title: "Filename",
	},
	{
		dataIndex: "key",
		title: "Actions",
		render: (v) => {
			return (
				<Space direction="horizontal" size={5}>
					<Button>
						<IoTrashBinOutline /> Delete
					</Button>
					<Button>
						<IoCloudUploadOutline /> Click to Upload
					</Button>
					<Button>Save</Button>
				</Space>
			);
		},
	},
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		name: "Welcome Sound",
		filename: "welcome.mp4",
	},
	{
		key: "2",
		name: "Inser Coin Sound",
		filename: "insert-coin.mp4",
	},
	{
		key: "3",
		name: "Coin Sound",
		filename: "coin.mp4",
	},
	{
		key: "4",
		name: "Done Playing Sound",
		filename: "done-playing.mp4",
	},
	{
		key: "5",
		name: "Connected Sound",
		filename: "connected.mp4",
	},
];

export const WebPortalSettingsForm: React.FC<TWebPortalSettingsFormProps> = (
	props
) => {
	return (
		<Form
			layout="vertical"
			onFinish={props.handleWebPortalSettingsFormSubmit}
			style={{ maxWidth: "1200px" }}
		>
			<Space direction="vertical" size={15}>
				<div>
					<Divider orientation="left">Web Portal Settings</Divider>
					<Form.Item label="Portal Name">
						<Input placeholder="ex. Wifi ni Juan" />
					</Form.Item>
					<Form.Item label="Portal Footer">
						<Input />
					</Form.Item>
				</div>
				<div>
					<Divider orientation="left">Web Portal Banner</Divider>
					<Form.Item label="Use Default Banner">
						<Switch unCheckedChildren="No" checkedChildren="Yes" />
					</Form.Item>
					<Form.Item>
						<Upload listType="picture-card" fileList={BANNER_PHOTOS_LIST} />
					</Form.Item>
				</div>
				<div>
					<Divider orientation="left">Web Portal Sound</Divider>
					<Form.Item label="Use Default Sound">
						<Switch unCheckedChildren="No" checkedChildren="Yes" />
					</Form.Item>
					<Form.Item>
						<Table
							columns={COLUMNS}
							dataSource={DATA}
							scroll={{ x: "max-content" }}
						/>
					</Form.Item>
				</div>
			</Space>

			<Button type="primary">Save Settings</Button>
		</Form>
	);
};
