import type { Link } from "./Link";

interface Account {
  imageURL: string;
  name: string;
  username: string;
  bio: string;
  links: Link[];
}

export default Account;
