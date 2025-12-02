import{j as e,r as E}from"./iframe-D7uC-7V_.js";import{A as j}from"./ActionGroup-BnlrcjLF.js";import{B as f}from"./Button-DiCPbDhS.js";import{L as t}from"./Label-y1KlwDdZ.js";import{S as b,s as p}from"./Section-CzjrUr3W.js";import{T as n,g as B}from"./TimeField-ChKcnSkk.js";import{b as h,u,F as c,t as S}from"./Form-CCYrfuDn.js";import{R as x,S as F}from"./ResetButton-DVnH5EXp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-osoyJDTl.js";import"./PropsContextProvider-D6ETz4eO.js";import"./mergeRefs-B2M5WDOC.js";import"./index-Bd9v0Vhf.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BCNTNt6q.js";import"./Text-BiV92KiG.js";import"./browser-BKGMjSP-.js";import"./utils-DGPkAfM6.js";import"./EmulatedBoldText-Dg54gE_i.js";import"./LoadingSpinner-VIxuY4J8.js";import"./Button-Djt7NA3M.js";import"./ProgressBar-BjaQZGPw.js";import"./Hidden-B7ytCKiH.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-77px_zVw.js";import"./useFocusRing-DNcE5kU2.js";import"./useFocusable-0BAeD1Xf.js";import"./useLocalizedStringFormatter-CCpeSzbu.js";import"./context-DmsiyyTB.js";import"./RSPContexts-DX_a6o14.js";import"./Collection-DSbN1ly0.js";import"./CollectionBuilder-B1mZ5m8d.js";import"./SelectionIndicator-BfrUmlWT.js";import"./Separator-CvniWKxN.js";import"./useStatic-Bxi8RVTv.js";import"./Accordion-Bnn1T4u6.js";import"./Alert-YZV9z460.js";import"./AlertIcon-BcCRWTe9.js";import"./AlertBadge-BebrPRF6.js";import"./Align-C8k1XZam.js";import"./Popover-Dwlz0jk0.js";import"./OverlayTrigger-H7UlFHIL.js";import"./TableFooterRow-CJIkUPOT.js";import"./SkeletonText-WMJJ6TP-.js";import"./Avatar-BotNt0IR.js";import"./AvatarStack-kQt2Mvuu.js";import"./Badge-CY7C5Oi3.js";import"./BigNumber-DM5XNeaC.js";import"./Breadcrumb-LvGcUQcP.js";import"./Link-jcFfsHJW.js";import"./Heading-f_QLDsgR.js";import"./Legend-D_JnQBhX.js";import"./FileCardList-zUXBvT8Y.js";import"./Image-C-Vme5-k.js";import"./Color-B6fplESU.js";import"./Content-B1NGoO5F.js";import"./ContextualHelpTrigger-CXOGuB9Y.js";import"./CounterBadge-XdhpMb79.js";import"./DonutChart-D8VWCFcu.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-r5k0CWyC.js";import"./Header-KGEBRUvg.js";import"./Initials-CcLnKcuF.js";import"./InlineCode-ZcnGdcwH.js";import"./PopoverTrigger-CjKyKtrA.js";import"./Separator-BtJYxtfR.js";import"./Message-BWOh6QKG.js";import"./MessageSeparator-D2bkHsuQ.js";import"./NavigationGroup-C4DQiXAl.js";import"./Notification-wte0OMcO.js";import"./NotificationProvider-BJj6x8o-.js";import"./ProgressBar-B2IIvRjr.js";import"./Rating-CT5Wuzie.js";import"./Skeleton-CMKH9Nqe.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),He={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Je=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Je as __namedExportsOrder,He as default};
