import{j as r,r as f}from"./iframe-C3jdvmqu.js";import{b as a,u as p,F as d,t as j}from"./Form-CX-guwLk.js";import{L as t}from"./Label-BPYJm5LL.js";import{R as u,S as F}from"./ResetButton-DHsnjNfm.js";import{B as l}from"./Button-crBjhbVY.js";import{S as b,s as c}from"./Section-Bx-16ZS-.js";import{A as E}from"./ActionGroup-CZRMzFyT.js";import{as as S,ar as o,g as T}from"./TimeField-4_Mf2v55.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D5Qg0LEH.js";import"./PropsContextProvider-CbRGY8IE.js";import"./mergeRefs-2Ywf-Nb8.js";import"./index-C9vt92ef.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C8ryTIgM.js";import"./context-KJ9X431h.js";import"./browser-p2mffppm.js";import"./utils-Bnm0gbPW.js";import"./ProgressBar-BH_IM9sd.js";import"./Hidden-Bkp5h4tk.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B93hkDaL.js";import"./Text-by0jRlX4.js";import"./EmulatedBoldText-PDbCHW4-.js";import"./LoadingSpinner-BWjdiLAQ.js";import"./Button-BIwZHIrt.js";import"./useFocusRing-C-IiPjuI.js";import"./useFocusable-BOYJgmQp.js";import"./context-D0_2-R3T.js";import"./RSPContexts-n5O79WrS.js";import"./Collection-D2JualPB.js";import"./CollectionBuilder-BOCut2o5.js";import"./SelectionIndicator-DyngYSm7.js";import"./Separator-D3R6VXnX.js";import"./useStatic-BVkn_XG8.js";import"./Accordion-FKbZiReZ.js";import"./Alert-CkW0J4wt.js";import"./AlertIcon-DkwIeu6U.js";import"./AlertBadge-CiHrZnCZ.js";import"./Align-BjsqKpbB.js";import"./Popover-5jsA4dKH.js";import"./OverlayTrigger-BPs2PyhK.js";import"./TableFooterRow-BU8Fd1Lx.js";import"./SkeletonText-lLq3Nt65.js";import"./Avatar-BVwW1qb5.js";import"./AvatarStack-BnFAp99k.js";import"./Badge-DENltzo8.js";import"./BigNumber-DmXS7ieK.js";import"./Breadcrumb-qUZ49k0X.js";import"./Link-DBmT5h1W.js";import"./Heading-BZdy5d_w.js";import"./Legend-CKZ_UC0-.js";import"./FileCardList-D4czHQYY.js";import"./Image-Bj9hH710.js";import"./Color-DZdqnqJH.js";import"./Content-DtarLJHH.js";import"./ContextualHelpTrigger-B0sXZW5u.js";import"./CounterBadge-98HPnaLR.js";import"./DonutChart-CCSB7cQU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-r71mMCrS.js";import"./Header-BIxUDaZT.js";import"./Initials-DZ9C76i2.js";import"./InlineCode-D49EgOnY.js";import"./PopoverTrigger-DyZPD5PV.js";import"./Separator-BI7SSrQ8.js";import"./Message-DX3VPOKF.js";import"./MessageSeparator-DKdhmfRa.js";import"./NavigationGroup-polgb4J2.js";import"./Notification-Scrbw5NS.js";import"./NotificationProvider-4ZdYgXNT.js";import"./ProgressBar-vbm8y321.js";import"./Rating-pSJ9uJqF.js";import"./Skeleton-1uRc-6la.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),B(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
