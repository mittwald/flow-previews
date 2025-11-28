import{j as r,r as x}from"./iframe-CkyxEoEZ.js";import{b as p,u as c,F as a,t as F}from"./Form-B1uNYjR5.js";import{R as l,S as h}from"./ResetButton-DObBVdV-.js";import{B as d}from"./Button-Ctvf1H7U.js";import{S as j,s as u}from"./Section-0QWuRp4X.js";import{A as b}from"./ActionGroup-B7JelnG6.js";import{s as t,g as E}from"./TimeField-BZTAf1Rn.js";import"./index-nuYtCEEu.js";import"./dynamic-ly6SdvXD.js";import"./PropsContextProvider-C-fhLM-T.js";import"./mergeRefs-p12aeMPz.js";import"./index-tj7lgiAm.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BjZwhmR3.js";import"./context-F9TznhPu.js";import"./browser-DbkHv7Lt.js";import"./utils-BtOaQozS.js";import"./IconWarning-dMO6L9mh.js";import"./Text-Ct1nYKdY.js";import"./EmulatedBoldText-DT8aLwWG.js";import"./LoadingSpinner-Bjw5E-ZO.js";import"./Button-wjFvY1UY.js";import"./ProgressBar-x24Uteep.js";import"./Hidden-BZU7hI3a.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BGGtyEFa.js";import"./useFocusable-6nBl_79g.js";import"./context-CmpACB2b.js";import"./RSPContexts-BIZJIOxy.js";import"./Collection-TWw2CUBu.js";import"./CollectionBuilder-DhRqM4RI.js";import"./SelectionIndicator-B6Bj9As3.js";import"./Separator-Bj8gDUdP.js";import"./useStatic-tbDjUfBM.js";import"./Accordion-BxonB-uS.js";import"./Alert-BUzEngmi.js";import"./AlertIcon-D6QGpe3w.js";import"./AlertBadge-BNvXKuRH.js";import"./Align-BO6DQgEO.js";import"./Popover-Dfldgewc.js";import"./OverlayTrigger-D6oe3s8K.js";import"./TableFooterRow-CNbuKkPS.js";import"./SkeletonText-CEVIX2-T.js";import"./Avatar-D0H2dmKO.js";import"./AvatarStack-CtSwjrsk.js";import"./Badge-BK2EStVc.js";import"./BigNumber-BYTo6-GR.js";import"./Breadcrumb-DhR3tYVA.js";import"./Link-Dw6e5tPv.js";import"./Heading-D13PuJy-.js";import"./Legend-BKnZAiJI.js";import"./FileCardList-XsPGsz9I.js";import"./Image-B2EurRhj.js";import"./Color-CPPo5i2D.js";import"./Content-BIHewrI8.js";import"./Label-BFGYnKsP.js";import"./ContextualHelpTrigger-DPjIfJLZ.js";import"./CounterBadge-BMYaxa9e.js";import"./DonutChart-NNGcOW5o.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JYMlcMjm.js";import"./Header-DtTME8RG.js";import"./Initials-BTdrWQ8b.js";import"./InlineCode-BVXmyQuU.js";import"./PopoverTrigger-2QwCKC6i.js";import"./Separator-CxqFRfwx.js";import"./Message-uh7LYwXZ.js";import"./MessageSeparator-DL9xrhQ0.js";import"./NavigationGroup-CtgReka-.js";import"./Notification-BatIqCje.js";import"./NotificationProvider-hfk6oSKV.js";import"./ProgressBar-gS-eWxDl.js";import"./Rating-Cnt-ukGO.js";import"./Skeleton-Bc0LedwX.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
