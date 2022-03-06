import {IAssigned_to, IUserData} from "../../interface/user.interface";

export const UserItem = (props: any) => {
	return (
		<>
			{props.userData.map((item: IUserData, index: number) => {
				const personName: string[] = [];
				const status: string[] = [];

				if (item.assigned_to?.length) {
					item.assigned_to.forEach((e: IAssigned_to) => personName.push(e.person_name));
				}

				if (item.assigned_to?.length) {
					item.assigned_to.forEach((e: IAssigned_to) => status.push(e.status));
				}

				return (
					<div className="user" key={index}>
						<div className="id">Work order id: {item.work_order_id}</div>
						<div className="description">Description: {item.description}</div>
						<div className="received-date">Received date: {item.received_date}</div>
						<div className="assigned-to">
							<div className="persone-name">
								Persone name: {personName.join(', ') || "disable"}
							</div>
							<div className="assigned-to-status">
								Assigned to status: {status.join(', ') || "disable"}
							</div>
						</div>
						<div className="status">Status: {item.status}</div>
						<div className="priority">Priority: {item.priority}</div>
					</div>
				)
			})}
		</>
	)
}
