import{j as e,r as E}from"./iframe-6jyXgxue.js";import{A as j}from"./ActionGroup-CzskHu9f.js";import{B as f}from"./Button-C79y5FLr.js";import{L as t}from"./Label-ChCKJV3V.js";import{S as b,s as p}from"./Section-H3gIqLfl.js";import{T as n,g as B}from"./TimeField-BWhC3HpL.js";import{b as h,u,F as c,t as S}from"./Form-CqT2k3Ls.js";import{R as x,S as F}from"./ResetButton-IThoXGd6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DCXw5NHQ.js";import"./PropsContextProvider-BY7KHLjg.js";import"./mergeRefs-DLi8bP-A.js";import"./index--zh6xbBg.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C-gwxPU9.js";import"./remote-D3kJiMg-.js";import"./Text-Dlqenc2H.js";import"./browser-BMGdvove.js";import"./utils-gjysgmBz.js";import"./EmulatedBoldText-BIdH-rcf.js";import"./LoadingSpinner-D7O-q36Z.js";import"./Button-DvSQe7YO.js";import"./ProgressBar-BwsfQ2n1.js";import"./Hidden-DJLEoSnR.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-JQMt_ZQS.js";import"./useFocusRing-BAh6-13b.js";import"./useFocusable-CajPj44S.js";import"./useLocalizedStringFormatter-BA1DAplF.js";import"./context-DHByHAd4.js";import"./RSPContexts-B8t3YJD-.js";import"./Collection-D3_W2fei.js";import"./CollectionBuilder-CkuRVJqW.js";import"./SelectionIndicator-B4LTYmXz.js";import"./Separator-DRruZlSn.js";import"./useStatic-D2icMmWp.js";import"./Accordion-fULoH9xe.js";import"./Alert-DrBylAny.js";import"./AlertIcon-CE8OjIho.js";import"./AlertBadge-DgAWcThQ.js";import"./Align-BzUcMv_f.js";import"./Popover-D8d0zPXi.js";import"./OverlayTrigger-C4RVAI_V.js";import"./TableFooterRow-DpjTUBn1.js";import"./SkeletonText-6_21vf5Q.js";import"./Avatar-C1mA-DAE.js";import"./AvatarStack-BqyIa6ad.js";import"./Badge-WZr49ZKv.js";import"./BigNumber-C54ZRNi7.js";import"./Breadcrumb-Cwl4tYyc.js";import"./Link-D0jiVju_.js";import"./Heading-CJE26UUg.js";import"./Legend-WIvdEy4p.js";import"./FileCardList-B0iLEsKd.js";import"./Image-COP6xYUW.js";import"./Color-JgwV0I9-.js";import"./Content-BVhQmARn.js";import"./ContextualHelpTrigger-CJ7SzJu0.js";import"./CounterBadge-D4Tjgl8K.js";import"./DonutChart-6sh_E6SJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CRpXUc1l.js";import"./Header-BSNdFr4b.js";import"./Initials-prUY4cPn.js";import"./InlineCode-Czh4dmVv.js";import"./PopoverTrigger-Dz8Taoga.js";import"./Separator-BU3gQHFS.js";import"./Message-f3EcTgP_.js";import"./MessageSeparator-D_xNlPF-.js";import"./NavigationGroup-C98vmueH.js";import"./Notification-DPFB18oq.js";import"./NotificationProvider-Ce0Lip3J.js";import"./ProgressBar-uMhxME4A.js";import"./Rating-DbrK3hf3.js";import"./Skeleton-Dm-B8LNv.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Je={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ke=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ke as __namedExportsOrder,Je as default};
