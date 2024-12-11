import { useQuery } from "@tanstack/react-query";

import { fetchData } from "../../../api/data-fetcher";
import Button from "../../../components/ui/button/button";
import { Form } from "../../../components/ui/form/Form";
import Input from "../../../components/ui/form/Input";
import SelectComp from "../../../components/ui/form/Select";
import { topicListQuery } from "../../../lib/queries/lists";
import { TopicList } from "../../../lib/types/lists";
import { IndividualPage, PageCompomnentProps } from "../../../lib/types/pages";
import { useForm } from "../../../lib/utilities/useForm";
import { IContactForm, contact } from "../../../lib/validators/contact";

const Contact = ({ id }: PageCompomnentProps) => {
  const form = useForm(contact);
  const { register, control } = form;
  const onSubmit = async (values: IContactForm) => {
    console.log(values);
  };
  // const { data } = useQuery<IndividualPage>({
  //   queryKey: ["topic-list"],
  //   queryFn: () => fetchData(topicListQuery()),
  //   select: (res) => {
  //     console.log(res);
  //     const [topics] = res.page.containers;

  //     const { topicList } = topics;
  //     return topicList;
  //   },
  // });

  return (
    <div className="main-container">
      <div className="rounded-[0.5625rem] bg-[#30F1FF1A] p-[6.25rem] backdrop-blur-[4.3644rem]">
        <Form form={form} onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
            <Input {...register("firstName")} label="First Name" />
            <Input {...register("lastName")} label="Last Name" />
          </div>
          <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
            <Input {...register("email")} label="Email" />
            <Input {...register("phoneNumber")} label="Phone" />
          </div>
          <div className="w-full">
            <SelectComp control={control} name="topic" label="Topic" />
          </div>
          <Button type="submit" small className="w-[8.9375rem]">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
