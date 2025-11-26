import{j as e,r as E}from"./iframe-BbaYMYQ1.js";import{A as j}from"./ActionGroup-QM-x3f8J.js";import{B as f}from"./Button-KIO5b-Hc.js";import{L as t}from"./Label-BraeMjNZ.js";import{S as b,s as p}from"./Section-Bklfm26f.js";import{T as n,F as B}from"./Modal-DVvIdT0R.js";import{c as h,u,F as c,t as S}from"./Form-BCkj35Nx.js";import{R as x,S as F}from"./ResetButton-9YX4PzGE.js";import"./index-nuYtCEEu.js";import"./dynamic-CvfiG9eK.js";import"./flowComponent-C662J8_x.js";import"./index-BgowJb9k.js";import"./clsx-B-dksMZM.js";import"./index-DF7s3pP8.js";import"./IconWarning-CkjtEKGs.js";import"./Text-8_g1DnjB.js";import"./browser-CF0_O6rk.js";import"./utils-C-StNnVz.js";import"./EmulatedBoldText-_shc_-go.js";import"./LoadingSpinner-Cwm6VlGh.js";import"./Button-B8_E6hAa.js";import"./ProgressBar-Bb19OYa8.js";import"./Hidden-S-Rgpp-0.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DxIVJg5X.js";import"./useFocusRing-BzYkSJhL.js";import"./useFocusable-B3SCcOBQ.js";import"./useLocalizedStringFormatter-CVO0oqQf.js";import"./context-CTAVigQn.js";import"./RSPContexts-vimGF_ZT.js";import"./Collection-CCUE8FQE.js";import"./CollectionBuilder-3YuRca9q.js";import"./SelectionIndicator-BTGWwJK9.js";import"./Separator-xUWU1DOd.js";import"./useStatic-CvDTMdvn.js";import"./FileCardList-BjZ9NUbt.js";import"./Avatar-CVLM7H3M.js";import"./AlertIcon-CRnyQnM7.js";import"./Image-CJ6kjDK0.js";import"./Link-rPNj3DYm.js";import"./ControlledNotification-BmRpUxJg.js";import"./Flex-pi8iCwQc.js";import"./Accordion-D8fzz0-b.js";import"./Alert-5Lfb6dl8.js";import"./AlertBadge-muxF3U8a.js";import"./Align-CHGtq9jk.js";import"./AvatarStack-j0GVx9dq.js";import"./BigNumber-B8_Z7Vks.js";import"./Breadcrumb-B6ecpmjh.js";import"./Heading-lbjZQMyr.js";import"./Legend-_0bhhOvJ.js";import"./Color-C-Cz2kw_.js";import"./TableFooterRow-r87NN87D.js";import"./SkeletonText-enZo4G0m.js";import"./Content-eRMHFgpO.js";import"./CounterBadge-dtasO-Oy.js";import"./DonutChart-Gb7C9vCW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-dqDgvxC5.js";import"./Header-BvDja-IR.js";import"./Initials-_1ADzBrq.js";import"./InlineCode-Cz0k_lz5.js";import"./LayoutCard-DHZQzmf9.js";import"./Separator-DCsOFsY1.js";import"./MessageSeparator-VDKEbj1t.js";import"./NavigationGroup-C2WRYrg4.js";import"./Notification-Dm5qCZlZ.js";import"./NotificationProvider-C4XAijkx.js";import"./ProgressBar-CrfBQbOk.js";import"./Rating-FkhIC6fL.js";import"./Skeleton-pQXVpVZ0.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Ge=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ge as __namedExportsOrder,Ue as default};
