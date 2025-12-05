import{j as r,r as C}from"./iframe-C5kwxwrP.js";import{b as d,u as a,F as c,t as j}from"./Form-CTPxLHIl.js";import{R as h,S as x}from"./ResetButton-BQ1YPMCH.js";import{B as l}from"./Button-xhQyV7SB.js";import{S as b,s as u}from"./Section-CTfCzMjt.js";import{A as B}from"./ActionGroup-KhTdUE8n.js";import{T as s}from"./Text-D7zEodsr.js";import{t as m,g as E}from"./TimeField-BYvcgqwg.js";import{C as p}from"./Content-BKplhx8p.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DeUr6npx.js";import"./PropsContextProvider-CTsx1ICl.js";import"./mergeRefs-BjhR6ukN.js";import"./index-D0rH5M4c.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-t4fh856H.js";import"./context-CDCpqoSP.js";import"./browser-CdNWfkH8.js";import"./utils-ClkSWM7u.js";import"./IconWarning-DN2_qlIM.js";import"./LoadingSpinner-BXFlmGo5.js";import"./Button-BX1O3153.js";import"./ProgressBar-BHFhq2aG.js";import"./Hidden-8zKzRoXl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CedgyfIn.js";import"./useFocusable-BiFYP8le.js";import"./context-B1WvD-_p.js";import"./RSPContexts-DRm1Cdpk.js";import"./Collection-OQo4LJVg.js";import"./CollectionBuilder-O5C2uK03.js";import"./SelectionIndicator-Dr4wTiOY.js";import"./Separator-DedkjU77.js";import"./useStatic-BI_2AgVn.js";import"./EmulatedBoldText-B3gCae9O.js";import"./Accordion-_D2E3Sdx.js";import"./Alert-CXp9JRJ_.js";import"./AlertIcon-NlAbnesU.js";import"./AlertBadge-DvJ4aslu.js";import"./Align-C7QGDLuz.js";import"./Popover-8f8WewP5.js";import"./OverlayTrigger-Br3xhPgq.js";import"./TableFooterRow-Dmtj36Oo.js";import"./SkeletonText-BOPkQIJz.js";import"./Avatar-B8RfKqK_.js";import"./AvatarStack-DMuCDYvd.js";import"./Badge-DjvMDfrb.js";import"./BigNumber-BUKpylgi.js";import"./Breadcrumb-sCKR4Igg.js";import"./Link-vKMcGo7K.js";import"./Heading-SC8_jTYN.js";import"./Legend-y0Ar6iWb.js";import"./FileCardList-Cn86yoca.js";import"./Image-xuezAXss.js";import"./Color-B-qsF8pt.js";import"./Label-g_jJNVJ9.js";import"./ContextualHelpTrigger-Dfubfga1.js";import"./CounterBadge-CFFm22KU.js";import"./DonutChart-DCgU6wRU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5xFdcQ5.js";import"./Header-Cl9fUDWk.js";import"./Initials-C7J0wROu.js";import"./InlineCode-CiNw8bdK.js";import"./PopoverTrigger-BPBAKMHr.js";import"./Separator-BrRhA1HQ.js";import"./Message-BzU_4CRb.js";import"./MessageSeparator-B6AUCd9I.js";import"./NavigationGroup-CVIW0udI.js";import"./Notification-Du18cKPe.js";import"./NotificationProvider-BI6xuOIs.js";import"./ProgressBar-D-RT1H5h.js";import"./Rating-sNa6Va53.js";import"./Skeleton-ByOM2YeZ.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ur={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...i.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,i as WithFocus,Vr as __namedExportsOrder,Ur as default};
