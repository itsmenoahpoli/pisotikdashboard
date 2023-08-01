import React from "react";
import dayjs from "dayjs";
import { Card, Space, Progress } from "antd";
import { TbTemperatureCelsius } from "react-icons/tb";

type TDeviceStatusProps = {
	cpuUsage: number;
	memoryUsage: number;
	diskUsage: number;
	temperature: number;
};

export const DeviceStatus: React.FC<TDeviceStatusProps> = (props) => {
	const [datetime, setDatetime] = React.useState<string>(
		dayjs().format("d/M/YYYY  H:mm:ss A")
	);

	const getCurrentDatetime = (): void => {
		setDatetime(dayjs().format("d/M/YYYY  H:mm:ss A"));
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			getCurrentDatetime();
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Card>
			<h3>Device Usage</h3>

			<Space direction="vertical">
				<div>
					<p>CPU Usage</p>
					<Progress percent={props.cpuUsage} />
				</div>
				<div>
					<p>Memory Usage</p>
					<Progress percent={props.diskUsage} />
				</div>
				<div>
					<p>Disk Usage</p>
					<Progress percent={props.memoryUsage} />
				</div>
				<p>
					Temperature: {props.temperature}
					<TbTemperatureCelsius />
				</p>
				<p>Date & time: {datetime}</p>
				<p>Uptime: 1day 02h:32m:27s </p>
			</Space>
		</Card>
	);
};
