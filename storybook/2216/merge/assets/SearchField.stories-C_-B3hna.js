import{j as r,r as S}from"./iframe-Y3MbZLc0.js";import{b as n,u as p,F as a,t as x}from"./Form-C2GjutEv.js";import{L as m}from"./Label-D2MFjXEF.js";import{R as u,S as l}from"./ResetButton-DojbpFgr.js";import{B as d}from"./Button-C-4kPg6X.js";import{S as j,s as c}from"./Section-DS5qZGJz.js";import{A as b}from"./ActionGroup-DetklLoF.js";import{d as s,g as E}from"./TimeField-CWtTlsNI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D67dccmA.js";import"./PropsContextProvider-DOjZhm--.js";import"./mergeRefs-CRQZITIl.js";import"./index-CsLL2H6p.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-6lIKSxih.js";import"./context-CS7ddlXF.js";import"./browser-BiLdcyq-.js";import"./utils-DRnq9lS5.js";import"./ProgressBar-B7UD30wQ.js";import"./Hidden-pCjGcrow.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B3PcMPJB.js";import"./Text-C_4wJYC6.js";import"./EmulatedBoldText-C3IQk-9R.js";import"./LoadingSpinner-6Ne33LZp.js";import"./Button-kcvbJBhw.js";import"./useFocusRing-BPUGHIMZ.js";import"./useFocusable-DuA910js.js";import"./context-Bj7ZL7Rk.js";import"./RSPContexts-q4i_V3tQ.js";import"./Collection-DMnM_9G9.js";import"./CollectionBuilder-B_T5ko0u.js";import"./SelectionIndicator-BaXUje1t.js";import"./Separator-BiaSXazW.js";import"./useStatic-DqJeeTMW.js";import"./Accordion-C3ab7gKh.js";import"./Alert-DGdBp0Eo.js";import"./AlertIcon-CV8NrYRI.js";import"./AlertBadge-BQxMpKlM.js";import"./Align-BI2gFG3T.js";import"./Popover-DQwwR1G3.js";import"./OverlayTrigger-DWI1tl1b.js";import"./TableFooterRow-WmviDJs1.js";import"./SkeletonText-D89UTzJX.js";import"./Avatar-ClOnDFiI.js";import"./AvatarStack-LuIFslnX.js";import"./Badge-sRwXs_wN.js";import"./BigNumber-B2Z2Bi5y.js";import"./Breadcrumb-OZ807_4G.js";import"./Link-Dl5kPNf7.js";import"./Heading-CVXAzirZ.js";import"./Legend-U_MA1DUY.js";import"./FileCardList-BkZP918B.js";import"./Image-DljHCxEH.js";import"./Color-BW8N49ms.js";import"./Content-NPMXk3zl.js";import"./ContextualHelpTrigger-k9oKfs6T.js";import"./CounterBadge-ElqKVlu2.js";import"./DonutChart-CfanPbqv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-H20k2GzK.js";import"./Header-6_4AGJd2.js";import"./Initials-rKtrsRfb.js";import"./InlineCode-C13LZBrn.js";import"./PopoverTrigger-7Z8GTvAL.js";import"./Separator-CfxO9pZu.js";import"./Message-BuSi_X0q.js";import"./MessageSeparator-DkBtqTdi.js";import"./NavigationGroup-BWGcL5Rx.js";import"./Notification-CsliJkcB.js";import"./NotificationProvider-amexuwTh.js";import"./ProgressBar-Dct_JOoN.js";import"./Rating-DUI-p2zk.js";import"./Skeleton-CH0G6v9C.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Ur as __namedExportsOrder,Nr as default};
