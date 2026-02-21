import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitInquiry(data.name, data.email, data.subject, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
