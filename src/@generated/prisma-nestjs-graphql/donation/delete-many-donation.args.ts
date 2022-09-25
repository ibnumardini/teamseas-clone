import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereInput } from './donation-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDonationArgs {

    @Field(() => DonationWhereInput, {nullable:true})
    @Type(() => DonationWhereInput)
    where?: DonationWhereInput;
}
