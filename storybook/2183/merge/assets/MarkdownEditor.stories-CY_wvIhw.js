import{j as r,r as x}from"./iframe-AfMfDnul.js";import{b as m,u as a,F as p,t as E}from"./Form-DS6QIL3g.js";import{L as s}from"./Label-CEgt2ST5.js";import{R as u,S as c}from"./ResetButton-BXBgSx-w.js";import{B as l}from"./Button-Dz-J0BZY.js";import{S as j,s as d}from"./Section-ebqGZRf9.js";import{A as b}from"./ActionGroup-CiNT698X.js";import{r as n,g}from"./TimeField-BK14odaB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B22nf4Sq.js";import"./PropsContextProvider-D0YtrswE.js";import"./mergeRefs-hRGJQS5p.js";import"./index-Cse-H3Oz.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-ZYKyDhtN.js";import"./context-ESdZ7ZET.js";import"./browser-D3b8NrdU.js";import"./utils-wHWs8Mhj.js";import"./ProgressBar-BHyKVsx8.js";import"./Hidden-3-cgxJ5L.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BHjxQDF5.js";import"./remote-BbVCA53p.js";import"./Text-XXGzm8bZ.js";import"./EmulatedBoldText-pgpRP3jm.js";import"./LoadingSpinner-C1jt85JD.js";import"./Button-CnuzJqL8.js";import"./useFocusRing-BCI7vGPi.js";import"./useFocusable-CBVaElx9.js";import"./context-WpTHPnjK.js";import"./RSPContexts-C5kaCkGg.js";import"./Collection-B07e3AhT.js";import"./CollectionBuilder-cwz4h6ef.js";import"./SelectionIndicator-DvSIX2eN.js";import"./Separator-Cu7L9zFQ.js";import"./useStatic-oE3CUH2s.js";import"./Accordion-NekwP7Iq.js";import"./Alert-DLVLnSp7.js";import"./AlertIcon-q77oMlDX.js";import"./AlertBadge-urZauIAv.js";import"./Align-DO08DH9M.js";import"./Popover-CmYxShpW.js";import"./OverlayTrigger-CzOjAy2I.js";import"./TableFooterRow-CqtqWf9U.js";import"./SkeletonText-C4RPLkJL.js";import"./Avatar-DhGvbDQ6.js";import"./AvatarStack-Cnvkf5dH.js";import"./Badge-eDxwdHYA.js";import"./BigNumber-Ci9DRIHe.js";import"./Breadcrumb-DYWPteCH.js";import"./Link-hXv3E1Ra.js";import"./Heading-Cl5UGWqj.js";import"./Legend-DQqywowg.js";import"./FileCardList-YajtycxG.js";import"./Image-B-iX1Sov.js";import"./Color-CJBrdfrQ.js";import"./Content-B3NPYowa.js";import"./ContextualHelpTrigger-BGD0J07C.js";import"./CounterBadge-CnjwmzpL.js";import"./DonutChart-K7DPpc3R.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BiQjAIjj.js";import"./Header-BaKdY0Y9.js";import"./Initials-C1l4vziN.js";import"./InlineCode-C6DAsZkJ.js";import"./PopoverTrigger-CMgONCmT.js";import"./Separator-DJ5CH4NB.js";import"./Message-BJab1gPB.js";import"./MessageSeparator-CqsC5kSU.js";import"./NavigationGroup-Ifu-QKtv.js";import"./Notification-Dq4SIvAb.js";import"./NotificationProvider-C4tBKUz-.js";import"./ProgressBar-DWcH6LPN.js";import"./Rating-Dfpy_BL0.js";import"./Skeleton-WYwe29HQ.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Nr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Ur as __namedExportsOrder,Nr as default};
