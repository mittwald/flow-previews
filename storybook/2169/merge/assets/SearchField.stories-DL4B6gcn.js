import{j as r,r as S}from"./iframe-D7uC-7V_.js";import{b as n,u as p,F as a,t as x}from"./Form-CCYrfuDn.js";import{L as m}from"./Label-y1KlwDdZ.js";import{R as u,S as l}from"./ResetButton-DVnH5EXp.js";import{B as d}from"./Button-DiCPbDhS.js";import{S as j,s as c}from"./Section-CzjrUr3W.js";import{A as b}from"./ActionGroup-BnlrcjLF.js";import{d as s,g as E}from"./TimeField-ChKcnSkk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-osoyJDTl.js";import"./PropsContextProvider-D6ETz4eO.js";import"./mergeRefs-B2M5WDOC.js";import"./index-Bd9v0Vhf.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CCpeSzbu.js";import"./context-77px_zVw.js";import"./browser-BKGMjSP-.js";import"./utils-DGPkAfM6.js";import"./ProgressBar-BjaQZGPw.js";import"./Hidden-B7ytCKiH.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BCNTNt6q.js";import"./Text-BiV92KiG.js";import"./EmulatedBoldText-Dg54gE_i.js";import"./LoadingSpinner-VIxuY4J8.js";import"./Button-Djt7NA3M.js";import"./useFocusRing-DNcE5kU2.js";import"./useFocusable-0BAeD1Xf.js";import"./context-DmsiyyTB.js";import"./RSPContexts-DX_a6o14.js";import"./Collection-DSbN1ly0.js";import"./CollectionBuilder-B1mZ5m8d.js";import"./SelectionIndicator-BfrUmlWT.js";import"./Separator-CvniWKxN.js";import"./useStatic-Bxi8RVTv.js";import"./Accordion-Bnn1T4u6.js";import"./Alert-YZV9z460.js";import"./AlertIcon-BcCRWTe9.js";import"./AlertBadge-BebrPRF6.js";import"./Align-C8k1XZam.js";import"./Popover-Dwlz0jk0.js";import"./OverlayTrigger-H7UlFHIL.js";import"./TableFooterRow-CJIkUPOT.js";import"./SkeletonText-WMJJ6TP-.js";import"./Avatar-BotNt0IR.js";import"./AvatarStack-kQt2Mvuu.js";import"./Badge-CY7C5Oi3.js";import"./BigNumber-DM5XNeaC.js";import"./Breadcrumb-LvGcUQcP.js";import"./Link-jcFfsHJW.js";import"./Heading-f_QLDsgR.js";import"./Legend-D_JnQBhX.js";import"./FileCardList-zUXBvT8Y.js";import"./Image-C-Vme5-k.js";import"./Color-B6fplESU.js";import"./Content-B1NGoO5F.js";import"./ContextualHelpTrigger-CXOGuB9Y.js";import"./CounterBadge-XdhpMb79.js";import"./DonutChart-D8VWCFcu.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-r5k0CWyC.js";import"./Header-KGEBRUvg.js";import"./Initials-CcLnKcuF.js";import"./InlineCode-ZcnGdcwH.js";import"./PopoverTrigger-CjKyKtrA.js";import"./Separator-BtJYxtfR.js";import"./Message-BWOh6QKG.js";import"./MessageSeparator-D2bkHsuQ.js";import"./NavigationGroup-C4DQiXAl.js";import"./Notification-wte0OMcO.js";import"./NotificationProvider-BJj6x8o-.js";import"./ProgressBar-B2IIvRjr.js";import"./Rating-CT5Wuzie.js";import"./Skeleton-CMKH9Nqe.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
