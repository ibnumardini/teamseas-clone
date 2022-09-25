import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DonationsService } from './donations.service';
import { OrderByParams } from 'src/graphql';
import { DonationCreateInput } from '../@generated/prisma-nestjs-graphql/donation/donation-create.input';

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  create(
    @Args('createDonationInput')
    createDonationInput: DonationCreateInput,
  ) {
    return this.donationsService.create(createDonationInput);
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.donationsService.findAll(orderBy);
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne({ id });
  }
}
