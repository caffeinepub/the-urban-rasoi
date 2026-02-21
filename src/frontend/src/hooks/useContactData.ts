import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactData } from '../backend';

export function useContactData() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactData>({
    queryKey: ['contactData'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getContactData();
    },
    enabled: !!actor && !isFetching,
  });
}
