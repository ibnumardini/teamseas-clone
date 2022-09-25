import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { Type } from 'class-transformer';
import { DonationCreateInput } from './donation-create.input';
import { DonationUpdateInput } from './donation-update.input';

@ArgsType()
export class UpsertOneDonationArgs {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    @Type(() => DonationWhereUniqueInput)
    where!: DonationWhereUniqueInput;

    @Field(() => DonationCreateInput, {nullable:false})
    @Type(() => DonationCreateInput)
    create!: DonationCreateInput;

    @Field(() => DonationUpdateInput, {nullable:false})
    @Type(() => DonationUpdateInput)
    update!: DonationUpdateInput;
}
