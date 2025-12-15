import{j as r,r as x}from"./iframe-Can218wR.js";import{b as a,u as l,F as d,t as j}from"./Form-v65766Ha.js";import{L as o}from"./Label-B5Ra9wZk.js";import{R as c,S as f}from"./ResetButton-D6uw8gbh.js";import{B as p}from"./Button-AcWb1Ypk.js";import{S as g,s as u}from"./Section-BTVZhucR.js";import{A as b}from"./ActionGroup-D5JFk098.js";import{N as t,v as E,g as S}from"./TimeField-Qf6H4lnp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B5g7bVbH.js";import"./PropsContextProvider-S6gtJagB.js";import"./mergeRefs-BFKt9ill.js";import"./index-41Illj3A.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CTBkRU60.js";import"./context-DZl3H9Sd.js";import"./browser-BKQSdhjf.js";import"./utils-BpZeyfMN.js";import"./ProgressBar-C-KA2KcW.js";import"./Hidden-Ce1Num8z.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BNaFuPnH.js";import"./remote-CHcOizPe.js";import"./Text-C2o8kJX0.js";import"./EmulatedBoldText-CmVjk4cf.js";import"./LoadingSpinner-kXbrPTzW.js";import"./Button-DOjUwuNT.js";import"./useFocusRing--c5UJZIk.js";import"./useFocusable-CkcRY4mN.js";import"./context-a0yvmfmj.js";import"./RSPContexts-DDMcPOu0.js";import"./Collection-UY3diGBM.js";import"./CollectionBuilder-JWhtjQVf.js";import"./SelectionIndicator-91dIKEGk.js";import"./Separator-Cy0HWEka.js";import"./useStatic-s9qeAkES.js";import"./Accordion-BgJpPLeZ.js";import"./Alert-DNx5xnLB.js";import"./AlertIcon-BzlU70Rb.js";import"./AlertBadge-BHQgXXA1.js";import"./Align-Axes71gv.js";import"./Popover-DKl9KM4_.js";import"./OverlayTrigger-B0hM9LOB.js";import"./TableFooterRow-Cft_Is3v.js";import"./SkeletonText-Bw7qmtCY.js";import"./Avatar-BfkdzloE.js";import"./AvatarStack-ipC9pyUN.js";import"./Badge-DMgarT1o.js";import"./BigNumber-Bw32ey4C.js";import"./Breadcrumb-DBxV6kjL.js";import"./Link-DNZxb3XI.js";import"./Heading-8IBs5lHH.js";import"./Legend-DjesrZkx.js";import"./FileCardList-DQKgLEdB.js";import"./Image-AqS4biBk.js";import"./Color-DxWZJ5ge.js";import"./Content-Dbq5WHJl.js";import"./ContextualHelpTrigger-B581tVEc.js";import"./CounterBadge-D_w8ES0b.js";import"./DonutChart-CbLkgRTJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bu8mFA12.js";import"./Header-6r5jIFQ1.js";import"./Initials-Bv13zVwh.js";import"./InlineCode-TSvlP2S4.js";import"./PopoverTrigger-Dwaqs-tN.js";import"./Separator-peM-T1F1.js";import"./Message-DlbPq8DG.js";import"./MessageSeparator-RZcHNTnk.js";import"./NavigationGroup-Ccyet6Sq.js";import"./Notification-Bij5M0u6.js";import"./NotificationProvider-Cyooz_pt.js";import"./ProgressBar-DTzdfFR4.js";import"./Rating-BMsAHHGJ.js";import"./Skeleton-Fu0f40Js.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Ur as __namedExportsOrder,Kr as default};
