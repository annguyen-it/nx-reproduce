import { PermissionConstant } from '@nx-reproduce/constants';

export class PermissionHelper {
  public static isTeacher(permissions: number[]): boolean {
    return permissions.includes(
      PermissionConstant.SEE_SCORE
    );
  }

  public static isDepartmentHead(permissions: number[]): boolean {
    return permissions.includes(
      PermissionConstant.SEE_STUDENT_EXAM_SCHEDULE
    );
  }
}
