import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationCreateInput } from './donation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDonationArgs {

    @Field(() => DonationCreateInput, {nullable:false})
    @Type(() => DonationCreateInput)
    data!: DonationCreateInput;
}
