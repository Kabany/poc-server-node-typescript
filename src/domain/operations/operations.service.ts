export function CreateList(times: number) {
  let list = [];
  let count = 0;
  while (times > count) {
    list.push({
      id: count + 1,
      message: `This is the message number ${count + 1}`,
    });
    count++;
  }
  return list;
}
