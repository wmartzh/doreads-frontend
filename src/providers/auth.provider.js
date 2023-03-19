import { useMemo, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getProfile, signout as out } from '../services/auth';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const verify = () => {
    if (!user) {
      getProfile()
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          setUser(null);
        });
    }
  };

  const signout = () => {
    out().then(() => {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
      setUser(null);
    });
  };
  const value = useMemo(() => ({ user, verify, signout, setUser }));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
