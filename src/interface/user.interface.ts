export interface IAssigned_to {
	person_name: string,
	status: string
}

export interface IUserData {
  assigned_to: IAssigned_to[],
  description: string,
  priority: string,
  received_date: string,
  status: string,
  work_order_id: string
}
