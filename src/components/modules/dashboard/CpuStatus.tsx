import React from "react";
import { Card, Space, Progress, Divider } from "antd";

type TCpuStatusProps = {
	cpuUsage: {
		cpu1?: number;
		cpu2?: number;
		cpu3?: number;
		cpu4?: number;
	};
};

export const CpuStatus: React.FC<TCpuStatusProps> = (props) => {
	return (
		<Card>
			<h3>CPU Status</h3>
			<Divider />

			<Space direction="vertical">
				<div>
					<p>CPU 1</p>
					<Progress percent={props.cpuUsage.cpu1 ?? 0} />
				</div>
				<div>
					<p>CPU 2</p>
					<Progress percent={props.cpuUsage.cpu2 ?? 0} />
				</div>
				<div>
					<p>CPU 3</p>
					<Progress percent={props.cpuUsage.cpu3 ?? 0} />
				</div>
				<div>
					<p>CPU 4</p>
					<Progress percent={props.cpuUsage.cpu4 ?? 0} />
				</div>
			</Space>
		</Card>
	);
};
