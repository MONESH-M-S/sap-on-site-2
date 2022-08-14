export interface User {
  name?: string;
  email?: string;
  rollno?: string;
  password?: string;
  department?: string;
  mentor_id?: string;
  year?: string;
  image?: string;
  id?: string;
  type?: 'student' | 'mentor';
  is_admin?: boolean;
}
