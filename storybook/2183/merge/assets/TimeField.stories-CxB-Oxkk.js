import{j as r,r as f}from"./iframe-Can218wR.js";import{b as p,u as a,F as d,t as j}from"./Form-v65766Ha.js";import{L as t}from"./Label-B5Ra9wZk.js";import{R as u,S as F}from"./ResetButton-D6uw8gbh.js";import{B as l}from"./Button-AcWb1Ypk.js";import{S as b,s as c}from"./Section-BTVZhucR.js";import{A as E}from"./ActionGroup-D5JFk098.js";import{au as S,at as o,g as T}from"./TimeField-Qf6H4lnp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B5g7bVbH.js";import"./PropsContextProvider-S6gtJagB.js";import"./mergeRefs-BFKt9ill.js";import"./index-41Illj3A.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CTBkRU60.js";import"./context-DZl3H9Sd.js";import"./browser-BKQSdhjf.js";import"./utils-BpZeyfMN.js";import"./ProgressBar-C-KA2KcW.js";import"./Hidden-Ce1Num8z.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BNaFuPnH.js";import"./remote-CHcOizPe.js";import"./Text-C2o8kJX0.js";import"./EmulatedBoldText-CmVjk4cf.js";import"./LoadingSpinner-kXbrPTzW.js";import"./Button-DOjUwuNT.js";import"./useFocusRing--c5UJZIk.js";import"./useFocusable-CkcRY4mN.js";import"./context-a0yvmfmj.js";import"./RSPContexts-DDMcPOu0.js";import"./Collection-UY3diGBM.js";import"./CollectionBuilder-JWhtjQVf.js";import"./SelectionIndicator-91dIKEGk.js";import"./Separator-Cy0HWEka.js";import"./useStatic-s9qeAkES.js";import"./Accordion-BgJpPLeZ.js";import"./Alert-DNx5xnLB.js";import"./AlertIcon-BzlU70Rb.js";import"./AlertBadge-BHQgXXA1.js";import"./Align-Axes71gv.js";import"./Popover-DKl9KM4_.js";import"./OverlayTrigger-B0hM9LOB.js";import"./TableFooterRow-Cft_Is3v.js";import"./SkeletonText-Bw7qmtCY.js";import"./Avatar-BfkdzloE.js";import"./AvatarStack-ipC9pyUN.js";import"./Badge-DMgarT1o.js";import"./BigNumber-Bw32ey4C.js";import"./Breadcrumb-DBxV6kjL.js";import"./Link-DNZxb3XI.js";import"./Heading-8IBs5lHH.js";import"./Legend-DjesrZkx.js";import"./FileCardList-DQKgLEdB.js";import"./Image-AqS4biBk.js";import"./Color-DxWZJ5ge.js";import"./Content-Dbq5WHJl.js";import"./ContextualHelpTrigger-B581tVEc.js";import"./CounterBadge-D_w8ES0b.js";import"./DonutChart-CbLkgRTJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bu8mFA12.js";import"./Header-6r5jIFQ1.js";import"./Initials-Bv13zVwh.js";import"./InlineCode-TSvlP2S4.js";import"./PopoverTrigger-Dwaqs-tN.js";import"./Separator-peM-T1F1.js";import"./Message-DlbPq8DG.js";import"./MessageSeparator-RZcHNTnk.js";import"./NavigationGroup-Ccyet6Sq.js";import"./Notification-Bij5M0u6.js";import"./NotificationProvider-Cyooz_pt.js";import"./ProgressBar-DTzdfFR4.js";import"./Rating-BMsAHHGJ.js";import"./Skeleton-Fu0f40Js.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async x=>{await c(1500),B(x)},h=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Ur as __namedExportsOrder,Nr as default};
