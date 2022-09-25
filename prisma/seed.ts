import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  await prisma.donation.deleteMany();
  const alice = await prisma.donation.create({
    data: {
      email: 'alice@gmail.com',
      displayName: 'Alice',
      count: 5,
    },
  });
  console.log({ alice });
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
