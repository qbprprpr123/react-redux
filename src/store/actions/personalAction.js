// personal版块要派发的行为对象管理
import { PERSONAL_AGE } from '@/store/action-types';

const personalAction = {
  ageAdd() {
    return {
      type: PERSONAL_AGE,
    };
  },
};

export default personalAction;
