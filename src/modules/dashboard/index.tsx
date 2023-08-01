import React from "react";
import { Space } from "antd";
import {
	SalesReport,
	DeviceInformation,
	DeviceStatus,
	HotspotUsers,
	SpecsInformation,
	CpuStatus,
} from "@/components/modules/dashboard";

const DEVICE_INFO = {
	name: "Pisotik",
	model: "Orange Pi PC",
	firmwareVersion: "1.0 (beta)",
	processor: "H3 Quad-core Cortex-A7 H.265/HEVC 4K",
	memory: "1GB DDR3",
	storage: 16,
};

const SPECS_INFO = {
	wan: {
		ip: "192.168.1.1",
		downloadSpeed: 75,
		uploadSpeed: 17,
	},
	hotspot: {
		ip: "192.168.1.2",
		downloadSpeed: 75,
		uploadSpeed: 17,
	},
	pppoe: {
		ip: "192.168.1.3",
		downloadSpeed: 75,
		uploadSpeed: 17,
	},
};

const CPU_USAGE = {
	cpu1: 25,
	cpu2: 0,
	cpu3: 74,
	cpu4: 7,
};

export const DashboardModule: React.FC = () => {
	return (
		<div className="dashboard-module">
			<Space direction="vertical" size={25}>
				<SalesReport />

				<div className="device-info-container">
					<DeviceInformation device={DEVICE_INFO} />
					<DeviceStatus
						cpuUsage={72}
						memoryUsage={50}
						diskUsage={23}
						temperature={38}
					/>
				</div>

				<div className="overall-stats-container">
					<HotspotUsers />
					<SpecsInformation specsInfo={SPECS_INFO} />
					<CpuStatus cpuUsage={CPU_USAGE} />
				</div>
			</Space>
		</div>
	);
};
