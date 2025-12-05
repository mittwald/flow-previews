import{j as r,r as S}from"./iframe-C5kwxwrP.js";import{b as n,u as p,F as a,t as x}from"./Form-CTPxLHIl.js";import{L as m}from"./Label-g_jJNVJ9.js";import{R as u,S as l}from"./ResetButton-BQ1YPMCH.js";import{B as d}from"./Button-xhQyV7SB.js";import{S as j,s as c}from"./Section-CTfCzMjt.js";import{A as b}from"./ActionGroup-KhTdUE8n.js";import{d as s,g as E}from"./TimeField-BYvcgqwg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DeUr6npx.js";import"./PropsContextProvider-CTsx1ICl.js";import"./mergeRefs-BjhR6ukN.js";import"./index-D0rH5M4c.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-t4fh856H.js";import"./context-CDCpqoSP.js";import"./browser-CdNWfkH8.js";import"./utils-ClkSWM7u.js";import"./ProgressBar-BHFhq2aG.js";import"./Hidden-8zKzRoXl.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DN2_qlIM.js";import"./Text-D7zEodsr.js";import"./EmulatedBoldText-B3gCae9O.js";import"./LoadingSpinner-BXFlmGo5.js";import"./Button-BX1O3153.js";import"./useFocusRing-CedgyfIn.js";import"./useFocusable-BiFYP8le.js";import"./context-B1WvD-_p.js";import"./RSPContexts-DRm1Cdpk.js";import"./Collection-OQo4LJVg.js";import"./CollectionBuilder-O5C2uK03.js";import"./SelectionIndicator-Dr4wTiOY.js";import"./Separator-DedkjU77.js";import"./useStatic-BI_2AgVn.js";import"./Accordion-_D2E3Sdx.js";import"./Alert-CXp9JRJ_.js";import"./AlertIcon-NlAbnesU.js";import"./AlertBadge-DvJ4aslu.js";import"./Align-C7QGDLuz.js";import"./Popover-8f8WewP5.js";import"./OverlayTrigger-Br3xhPgq.js";import"./TableFooterRow-Dmtj36Oo.js";import"./SkeletonText-BOPkQIJz.js";import"./Avatar-B8RfKqK_.js";import"./AvatarStack-DMuCDYvd.js";import"./Badge-DjvMDfrb.js";import"./BigNumber-BUKpylgi.js";import"./Breadcrumb-sCKR4Igg.js";import"./Link-vKMcGo7K.js";import"./Heading-SC8_jTYN.js";import"./Legend-y0Ar6iWb.js";import"./FileCardList-Cn86yoca.js";import"./Image-xuezAXss.js";import"./Color-B-qsF8pt.js";import"./Content-BKplhx8p.js";import"./ContextualHelpTrigger-Dfubfga1.js";import"./CounterBadge-CFFm22KU.js";import"./DonutChart-DCgU6wRU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5xFdcQ5.js";import"./Header-Cl9fUDWk.js";import"./Initials-C7J0wROu.js";import"./InlineCode-CiNw8bdK.js";import"./PopoverTrigger-BPBAKMHr.js";import"./Separator-BrRhA1HQ.js";import"./Message-BzU_4CRb.js";import"./MessageSeparator-B6AUCd9I.js";import"./NavigationGroup-CVIW0udI.js";import"./Notification-Du18cKPe.js";import"./NotificationProvider-BI6xuOIs.js";import"./ProgressBar-D-RT1H5h.js";import"./Rating-sNa6Va53.js";import"./Skeleton-ByOM2YeZ.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
