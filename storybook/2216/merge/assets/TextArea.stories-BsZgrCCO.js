import{j as r,r as F}from"./iframe-Y3MbZLc0.js";import{b as p,u as d,F as l,t as j}from"./Form-C2GjutEv.js";import{L as o}from"./Label-D2MFjXEF.js";import{R as h,S as x}from"./ResetButton-DojbpFgr.js";import{B as c}from"./Button-C-4kPg6X.js";import{S as g,s as u}from"./Section-DS5qZGJz.js";import{A as b}from"./ActionGroup-DetklLoF.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-CWtTlsNI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D67dccmA.js";import"./PropsContextProvider-DOjZhm--.js";import"./mergeRefs-CRQZITIl.js";import"./index-CsLL2H6p.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-6lIKSxih.js";import"./context-CS7ddlXF.js";import"./browser-BiLdcyq-.js";import"./utils-DRnq9lS5.js";import"./ProgressBar-B7UD30wQ.js";import"./Hidden-pCjGcrow.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B3PcMPJB.js";import"./Text-C_4wJYC6.js";import"./EmulatedBoldText-C3IQk-9R.js";import"./LoadingSpinner-6Ne33LZp.js";import"./Button-kcvbJBhw.js";import"./useFocusRing-BPUGHIMZ.js";import"./useFocusable-DuA910js.js";import"./context-Bj7ZL7Rk.js";import"./RSPContexts-q4i_V3tQ.js";import"./Collection-DMnM_9G9.js";import"./CollectionBuilder-B_T5ko0u.js";import"./SelectionIndicator-BaXUje1t.js";import"./Separator-BiaSXazW.js";import"./useStatic-DqJeeTMW.js";import"./Accordion-C3ab7gKh.js";import"./Alert-DGdBp0Eo.js";import"./AlertIcon-CV8NrYRI.js";import"./AlertBadge-BQxMpKlM.js";import"./Align-BI2gFG3T.js";import"./Popover-DQwwR1G3.js";import"./OverlayTrigger-DWI1tl1b.js";import"./TableFooterRow-WmviDJs1.js";import"./SkeletonText-D89UTzJX.js";import"./Avatar-ClOnDFiI.js";import"./AvatarStack-LuIFslnX.js";import"./Badge-sRwXs_wN.js";import"./BigNumber-B2Z2Bi5y.js";import"./Breadcrumb-OZ807_4G.js";import"./Link-Dl5kPNf7.js";import"./Heading-CVXAzirZ.js";import"./Legend-U_MA1DUY.js";import"./FileCardList-BkZP918B.js";import"./Image-DljHCxEH.js";import"./Color-BW8N49ms.js";import"./Content-NPMXk3zl.js";import"./ContextualHelpTrigger-k9oKfs6T.js";import"./CounterBadge-ElqKVlu2.js";import"./DonutChart-CfanPbqv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-H20k2GzK.js";import"./Header-6_4AGJd2.js";import"./Initials-rKtrsRfb.js";import"./InlineCode-C13LZBrn.js";import"./PopoverTrigger-7Z8GTvAL.js";import"./Separator-CfxO9pZu.js";import"./Message-BuSi_X0q.js";import"./MessageSeparator-DkBtqTdi.js";import"./NavigationGroup-BWGcL5Rx.js";import"./Notification-CsliJkcB.js";import"./NotificationProvider-amexuwTh.js";import"./ProgressBar-Dct_JOoN.js";import"./Rating-DUI-p2zk.js";import"./Skeleton-CH0G6v9C.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ur={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Yr as __namedExportsOrder,Ur as default};
