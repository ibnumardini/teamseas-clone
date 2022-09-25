import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { OrderByParams } from 'src/graphql';
import { DonationCreateInput } from '../@generated/prisma-nestjs-graphql/donation/donation-create.input';
import { DonationWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/donation/donation-where-unique.input';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(createDonationInput: DonationCreateInput) {
    return this.prisma.donation.create({ data: createDonationInput });
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};

    return this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(donationWhereUniqueInput: DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput,
    });
  }
}
