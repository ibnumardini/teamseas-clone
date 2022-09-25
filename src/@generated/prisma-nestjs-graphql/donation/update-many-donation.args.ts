import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationUpdateManyMutationInput } from './donation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DonationWhereInput } from './donation-where.input';

@ArgsType()
export class UpdateManyDonationArgs {

    @Field(() => DonationUpdateManyMutationInput, {nullable:false})
    @Type(() => DonationUpdateManyMutationInput)
    data!: DonationUpdateManyMutationInput;

    @Field(() => DonationWhereInput, {nullable:true})
    @Type(() => DonationWhereInput)
    where?: DonationWhereInput;
}
