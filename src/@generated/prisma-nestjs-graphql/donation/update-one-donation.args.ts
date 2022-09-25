import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationUpdateInput } from './donation-update.input';
import { Type } from 'class-transformer';
import { DonationWhereUniqueInput } from './donation-where-unique.input';

@ArgsType()
export class UpdateOneDonationArgs {

    @Field(() => DonationUpdateInput, {nullable:false})
    @Type(() => DonationUpdateInput)
    data!: DonationUpdateInput;

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    @Type(() => DonationWhereUniqueInput)
    where!: DonationWhereUniqueInput;
}
