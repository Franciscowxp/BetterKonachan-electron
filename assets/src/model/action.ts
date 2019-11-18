import { Ctx } from './ctx';

export enum EAction {
  setBgUri = 'setBgUri',
  setItems = 'setItems',
  setPage = 'setPage',
  setPages = 'setPages',
  setSecurity = 'setSecurity',
  setExpand = 'setExpand',
  setDownload = 'setDownload',
  setLoading = 'setLoading',
  setDownloadStatus = 'setDownloadStatus'
}

export interface UpdateProgressPayload {
  index: number;
  percent: string;
  status: 'error' | 'progress';
}
export interface Action {
  // tslint:disable-next-line: no-reserved-keywords
  type: EAction;
  payload: Ctx[keyof Ctx] | UpdateProgressPayload;
}

export type TReducer = (state: Ctx, action: Action) => Ctx;

export interface Context {
  state: Ctx;
  dispatch: React.Dispatch<Action>;
}
