import { BehaviorSubject } from 'rxjs';
import { combineEpics } from 'redux-observable'
import { mergeMap } from 'rxjs/operators';

export const epics$ = new BehaviorSubject(combineEpics())

export const rootEpic = (action$, state$) => epics$.pipe(
  mergeMap(epic => epic(action$, state$))
)
