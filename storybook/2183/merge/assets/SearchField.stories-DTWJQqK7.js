import{j as r,r as S}from"./iframe-AfMfDnul.js";import{b as n,u as p,F as a,t as x}from"./Form-DS6QIL3g.js";import{L as m}from"./Label-CEgt2ST5.js";import{R as u,S as l}from"./ResetButton-BXBgSx-w.js";import{B as d}from"./Button-Dz-J0BZY.js";import{S as j,s as c}from"./Section-ebqGZRf9.js";import{A as b}from"./ActionGroup-CiNT698X.js";import{d as s,g as E}from"./TimeField-BK14odaB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B22nf4Sq.js";import"./PropsContextProvider-D0YtrswE.js";import"./mergeRefs-hRGJQS5p.js";import"./index-Cse-H3Oz.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-ZYKyDhtN.js";import"./context-ESdZ7ZET.js";import"./browser-D3b8NrdU.js";import"./utils-wHWs8Mhj.js";import"./ProgressBar-BHyKVsx8.js";import"./Hidden-3-cgxJ5L.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BHjxQDF5.js";import"./remote-BbVCA53p.js";import"./Text-XXGzm8bZ.js";import"./EmulatedBoldText-pgpRP3jm.js";import"./LoadingSpinner-C1jt85JD.js";import"./Button-CnuzJqL8.js";import"./useFocusRing-BCI7vGPi.js";import"./useFocusable-CBVaElx9.js";import"./context-WpTHPnjK.js";import"./RSPContexts-C5kaCkGg.js";import"./Collection-B07e3AhT.js";import"./CollectionBuilder-cwz4h6ef.js";import"./SelectionIndicator-DvSIX2eN.js";import"./Separator-Cu7L9zFQ.js";import"./useStatic-oE3CUH2s.js";import"./Accordion-NekwP7Iq.js";import"./Alert-DLVLnSp7.js";import"./AlertIcon-q77oMlDX.js";import"./AlertBadge-urZauIAv.js";import"./Align-DO08DH9M.js";import"./Popover-CmYxShpW.js";import"./OverlayTrigger-CzOjAy2I.js";import"./TableFooterRow-CqtqWf9U.js";import"./SkeletonText-C4RPLkJL.js";import"./Avatar-DhGvbDQ6.js";import"./AvatarStack-Cnvkf5dH.js";import"./Badge-eDxwdHYA.js";import"./BigNumber-Ci9DRIHe.js";import"./Breadcrumb-DYWPteCH.js";import"./Link-hXv3E1Ra.js";import"./Heading-Cl5UGWqj.js";import"./Legend-DQqywowg.js";import"./FileCardList-YajtycxG.js";import"./Image-B-iX1Sov.js";import"./Color-CJBrdfrQ.js";import"./Content-B3NPYowa.js";import"./ContextualHelpTrigger-BGD0J07C.js";import"./CounterBadge-CnjwmzpL.js";import"./DonutChart-K7DPpc3R.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BiQjAIjj.js";import"./Header-BaKdY0Y9.js";import"./Initials-C1l4vziN.js";import"./InlineCode-C6DAsZkJ.js";import"./PopoverTrigger-CMgONCmT.js";import"./Separator-DJ5CH4NB.js";import"./Message-BJab1gPB.js";import"./MessageSeparator-CqsC5kSU.js";import"./NavigationGroup-Ifu-QKtv.js";import"./Notification-Dq4SIvAb.js";import"./NotificationProvider-C4tBKUz-.js";import"./ProgressBar-DWcH6LPN.js";import"./Rating-Dfpy_BL0.js";import"./Skeleton-WYwe29HQ.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Ur={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Vr as __namedExportsOrder,Ur as default};
