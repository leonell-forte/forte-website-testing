import Button from "../../../components/ui/button/button";
import { Form } from "../../../components/ui/form/Form";
import Input from "../../../components/ui/form/Input";
import Select from "../../../components/ui/form/Select";
import Textarea from "../../../components/ui/form/Textarea";
import { ContactProps } from "../../../lib/types/pages";
import { useForm } from "../../../lib/utilities/useForm";
import { IContactForm, contact } from "../../../lib/validators/contact";

const Contact = (props: ContactProps) => {
  const { title, topicList } = props;
  const form = useForm(contact);
  const { register, control } = form;
  const onSubmit = async (values: IContactForm) => {
    console.log(values);
    alert(JSON.stringify(values));
  };

  return (
    <div className="pb-[134px] pt-[66px]">
      <div className="p-[60px] text-center font-lyon text-[2.5rem] sm:pb-[100px] sm:pt-[166px] sm:text-[5.125rem]">
        {title}
      </div>
      <div className="main-container">
        <div className="rounded-[0.5625rem] bg-[#30F1FF1A] px-[18px] py-[30px] backdrop-blur-[4.3644rem] sm:px-[65px] sm:py-[62.5px] md:px-[100px] md:py-[100px]">
          <Form
            form={form}
            onSubmit={onSubmit}
            className="flex flex-col gap-1.5 md:gap-4"
          >
            <div className="grid gap-1.5 gap-x-12 md:grid-cols-2 md:gap-y-4">
              <Input {...register("firstName")} label="First Name" />
              <Input {...register("lastName")} label="Last Name" />
            </div>
            <div className="grid gap-1.5 gap-x-12 md:grid-cols-2 md:gap-y-4">
              <Input {...register("email")} label="Email" />
              <Input {...register("phoneNumber")} label="Phone" />
            </div>
            <div className="w-full">
              <Select
                control={control}
                options={topicList}
                name="topic"
                label="Topic"
              />
            </div>
            <div className="w-full">
              <Textarea {...register("message")} label="Message" />
            </div>
            <div className="flex sm:justify-end">
              <Button type="submit" small className="w-full sm:w-[8.9375rem]">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
