import React from "react";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { Card, Form, Input, Checkbox, Button } from "antd";

export const LoginPage: React.FC = () => {
	return (
		<AuthLayout>
			<Card>
				<h2>PisoTik Dashboard</h2>
				<p>Login to manage your hardware dashboard</p>

				<Form layout="vertical" requiredMark>
					<Form.Item label="Username" required>
						<Input />
					</Form.Item>
					<Form.Item label="Password" required>
						<Input />
					</Form.Item>
					<Form.Item>
						<Checkbox>Keep me signed-in</Checkbox>
					</Form.Item>

					<Button htmlType="submit" type="primary" size="large">
						Log In
					</Button>
				</Form>
			</Card>
		</AuthLayout>
	);
};
