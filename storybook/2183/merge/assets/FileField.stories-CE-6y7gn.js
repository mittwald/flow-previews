import{j as r,r as x}from"./iframe-Can218wR.js";import{b as l,u as a,F as c,t as j}from"./Form-v65766Ha.js";import{L as s}from"./Label-B5Ra9wZk.js";import{R as u,S as d}from"./ResetButton-D6uw8gbh.js";import{B as t}from"./Button-AcWb1Ypk.js";import{S,s as p}from"./Section-BTVZhucR.js";import{A as b}from"./ActionGroup-D5JFk098.js";import{q as m,g as B}from"./TimeField-Qf6H4lnp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B5g7bVbH.js";import"./PropsContextProvider-S6gtJagB.js";import"./mergeRefs-BFKt9ill.js";import"./index-41Illj3A.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CTBkRU60.js";import"./context-DZl3H9Sd.js";import"./browser-BKQSdhjf.js";import"./utils-BpZeyfMN.js";import"./ProgressBar-C-KA2KcW.js";import"./Hidden-Ce1Num8z.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BNaFuPnH.js";import"./remote-CHcOizPe.js";import"./Text-C2o8kJX0.js";import"./EmulatedBoldText-CmVjk4cf.js";import"./LoadingSpinner-kXbrPTzW.js";import"./Button-DOjUwuNT.js";import"./useFocusRing--c5UJZIk.js";import"./useFocusable-CkcRY4mN.js";import"./context-a0yvmfmj.js";import"./RSPContexts-DDMcPOu0.js";import"./Collection-UY3diGBM.js";import"./CollectionBuilder-JWhtjQVf.js";import"./SelectionIndicator-91dIKEGk.js";import"./Separator-Cy0HWEka.js";import"./useStatic-s9qeAkES.js";import"./Accordion-BgJpPLeZ.js";import"./Alert-DNx5xnLB.js";import"./AlertIcon-BzlU70Rb.js";import"./AlertBadge-BHQgXXA1.js";import"./Align-Axes71gv.js";import"./Popover-DKl9KM4_.js";import"./OverlayTrigger-B0hM9LOB.js";import"./TableFooterRow-Cft_Is3v.js";import"./SkeletonText-Bw7qmtCY.js";import"./Avatar-BfkdzloE.js";import"./AvatarStack-ipC9pyUN.js";import"./Badge-DMgarT1o.js";import"./BigNumber-Bw32ey4C.js";import"./Breadcrumb-DBxV6kjL.js";import"./Link-DNZxb3XI.js";import"./Heading-8IBs5lHH.js";import"./Legend-DjesrZkx.js";import"./FileCardList-DQKgLEdB.js";import"./Image-AqS4biBk.js";import"./Color-DxWZJ5ge.js";import"./Content-Dbq5WHJl.js";import"./ContextualHelpTrigger-B581tVEc.js";import"./CounterBadge-D_w8ES0b.js";import"./DonutChart-CbLkgRTJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bu8mFA12.js";import"./Header-6r5jIFQ1.js";import"./Initials-Bv13zVwh.js";import"./InlineCode-TSvlP2S4.js";import"./PopoverTrigger-Dwaqs-tN.js";import"./Separator-peM-T1F1.js";import"./Message-DlbPq8DG.js";import"./MessageSeparator-RZcHNTnk.js";import"./NavigationGroup-Ccyet6Sq.js";import"./Notification-Bij5M0u6.js";import"./NotificationProvider-Cyooz_pt.js";import"./ProgressBar-DTzdfFR4.js";import"./Rating-BMsAHHGJ.js";import"./Skeleton-Fu0f40Js.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Nr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await p(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ur as __namedExportsOrder,Nr as default};
