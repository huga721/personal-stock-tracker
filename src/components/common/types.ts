type Account = 'IKE' | 'IKZE' | 'Normal';

type Position = {
  ticket: string,
  account: Account;
}

type AccountDashboardTypes = 'All' | Account;