import{j as r,r as x}from"./iframe-CkyxEoEZ.js";import{b as m,u as a,F as p,t as E}from"./Form-B1uNYjR5.js";import{L as s}from"./Label-BFGYnKsP.js";import{R as u,S as c}from"./ResetButton-DObBVdV-.js";import{B as l}from"./Button-Ctvf1H7U.js";import{S as j,s as d}from"./Section-0QWuRp4X.js";import{A as b}from"./ActionGroup-B7JelnG6.js";import{r as n,g}from"./TimeField-BZTAf1Rn.js";import"./index-nuYtCEEu.js";import"./dynamic-ly6SdvXD.js";import"./PropsContextProvider-C-fhLM-T.js";import"./mergeRefs-p12aeMPz.js";import"./index-tj7lgiAm.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BjZwhmR3.js";import"./context-F9TznhPu.js";import"./browser-DbkHv7Lt.js";import"./utils-BtOaQozS.js";import"./ProgressBar-x24Uteep.js";import"./Hidden-BZU7hI3a.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-dMO6L9mh.js";import"./Text-Ct1nYKdY.js";import"./EmulatedBoldText-DT8aLwWG.js";import"./LoadingSpinner-Bjw5E-ZO.js";import"./Button-wjFvY1UY.js";import"./useFocusRing-BGGtyEFa.js";import"./useFocusable-6nBl_79g.js";import"./context-CmpACB2b.js";import"./RSPContexts-BIZJIOxy.js";import"./Collection-TWw2CUBu.js";import"./CollectionBuilder-DhRqM4RI.js";import"./SelectionIndicator-B6Bj9As3.js";import"./Separator-Bj8gDUdP.js";import"./useStatic-tbDjUfBM.js";import"./Accordion-BxonB-uS.js";import"./Alert-BUzEngmi.js";import"./AlertIcon-D6QGpe3w.js";import"./AlertBadge-BNvXKuRH.js";import"./Align-BO6DQgEO.js";import"./Popover-Dfldgewc.js";import"./OverlayTrigger-D6oe3s8K.js";import"./TableFooterRow-CNbuKkPS.js";import"./SkeletonText-CEVIX2-T.js";import"./Avatar-D0H2dmKO.js";import"./AvatarStack-CtSwjrsk.js";import"./Badge-BK2EStVc.js";import"./BigNumber-BYTo6-GR.js";import"./Breadcrumb-DhR3tYVA.js";import"./Link-Dw6e5tPv.js";import"./Heading-D13PuJy-.js";import"./Legend-BKnZAiJI.js";import"./FileCardList-XsPGsz9I.js";import"./Image-B2EurRhj.js";import"./Color-CPPo5i2D.js";import"./Content-BIHewrI8.js";import"./ContextualHelpTrigger-DPjIfJLZ.js";import"./CounterBadge-BMYaxa9e.js";import"./DonutChart-NNGcOW5o.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JYMlcMjm.js";import"./Header-DtTME8RG.js";import"./Initials-BTdrWQ8b.js";import"./InlineCode-BVXmyQuU.js";import"./PopoverTrigger-2QwCKC6i.js";import"./Separator-CxqFRfwx.js";import"./Message-uh7LYwXZ.js";import"./MessageSeparator-DL9xrhQ0.js";import"./NavigationGroup-CtgReka-.js";import"./Notification-BatIqCje.js";import"./NotificationProvider-hfk6oSKV.js";import"./ProgressBar-gS-eWxDl.js";import"./Rating-Cnt-ukGO.js";import"./Skeleton-Bc0LedwX.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Nr as __namedExportsOrder,Kr as default};
