import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator';
import { logger } from 'react-native-logs';

const log = logger.createLogger();

interface BottomBarVisibleContextProps {
  valueInRoot: 'flex' | 'none';
  updateValueInRoot: (newValue: 'flex' | 'none') => void;
}

const defaultData: BottomBarVisibleContextProps = {
  valueInRoot: 'flex',
  updateValueInRoot: () => {},
};

const BottomBarVisibleContext =
  createContext<BottomBarVisibleContextProps>(defaultData);

export const useBottomBarVisibleContext = () => {
  return useContext(BottomBarVisibleContext);
};
export const BottomBarVisibleProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [valueInRoot, setValueInRoot] = useState<'flex' | 'none'>('flex');
  log.info('BottomBarVisibleProvider ' + valueInRoot);
  const updateValueInRoot = (newValue: 'flex' | 'none') => {
    log.info('updateValueInRoot ' + valueInRoot);

    setValueInRoot(newValue);
  };

  return (
    <BottomBarVisibleContext.Provider
      value={{ valueInRoot, updateValueInRoot }}
    >
      {children}
    </BottomBarVisibleContext.Provider>
  );
};

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomBarVisibleProvider>
        <TabNavigator />
      </BottomBarVisibleProvider>
    </NavigationContainer>
  );
};
