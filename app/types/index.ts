export interface InventoryItem {
  id: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  lastUpdated: string;
}

export interface LaborRecord {
  id: string;
  workerName: string;
  task: string;
  hours: number;
  date: string;
}

export interface CropCycle {
  id: string;
  cropName: string;
  stage: 'sowing' | 'growing' | 'harvesting';
  startDate: string;
  endDate: string;
}

export interface FinancialTransaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  date: string;
}