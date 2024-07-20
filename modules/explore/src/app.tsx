import { PropsWithChildren, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import fastCompareEqual from 'react-fast-compare';
import { IAuthUser } from '@topexam/web.lib.foundation';
import { authUserState } from '@topexam/web.lib.util';

type Props = PropsWithChildren<{
  authUser: IAuthUser | null;
}>;

export const App = ({ children, authUser }: Props) => {
  const [oldUser, setUser] = useRecoilState(authUserState);

  useEffect(() => {
    if (!fastCompareEqual(oldUser, authUser)) {
      setUser(authUser);
    }
  }, [authUser, oldUser, setUser]);

  return <>{children}</>;
};
