
const GroupnameIcon = ({ groupName }) => {
  const words = groupName.split(" ");
  let initials = words[0].slice(0, 1);
  if (words.length > 1) {
    initials += words[1].slice(0, 1);
  }
  return initials.toUpperCase();
}

export default GroupnameIcon;