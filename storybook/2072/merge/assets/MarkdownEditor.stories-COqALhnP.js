import{j as r,r as x}from"./iframe-C3jdvmqu.js";import{b as m,u as a,F as p,t as E}from"./Form-CX-guwLk.js";import{L as s}from"./Label-BPYJm5LL.js";import{R as u,S as c}from"./ResetButton-DHsnjNfm.js";import{B as l}from"./Button-crBjhbVY.js";import{S as j,s as d}from"./Section-Bx-16ZS-.js";import{A as b}from"./ActionGroup-CZRMzFyT.js";import{r as n,g}from"./TimeField-4_Mf2v55.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D5Qg0LEH.js";import"./PropsContextProvider-CbRGY8IE.js";import"./mergeRefs-2Ywf-Nb8.js";import"./index-C9vt92ef.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C8ryTIgM.js";import"./context-KJ9X431h.js";import"./browser-p2mffppm.js";import"./utils-Bnm0gbPW.js";import"./ProgressBar-BH_IM9sd.js";import"./Hidden-Bkp5h4tk.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B93hkDaL.js";import"./Text-by0jRlX4.js";import"./EmulatedBoldText-PDbCHW4-.js";import"./LoadingSpinner-BWjdiLAQ.js";import"./Button-BIwZHIrt.js";import"./useFocusRing-C-IiPjuI.js";import"./useFocusable-BOYJgmQp.js";import"./context-D0_2-R3T.js";import"./RSPContexts-n5O79WrS.js";import"./Collection-D2JualPB.js";import"./CollectionBuilder-BOCut2o5.js";import"./SelectionIndicator-DyngYSm7.js";import"./Separator-D3R6VXnX.js";import"./useStatic-BVkn_XG8.js";import"./Accordion-FKbZiReZ.js";import"./Alert-CkW0J4wt.js";import"./AlertIcon-DkwIeu6U.js";import"./AlertBadge-CiHrZnCZ.js";import"./Align-BjsqKpbB.js";import"./Popover-5jsA4dKH.js";import"./OverlayTrigger-BPs2PyhK.js";import"./TableFooterRow-BU8Fd1Lx.js";import"./SkeletonText-lLq3Nt65.js";import"./Avatar-BVwW1qb5.js";import"./AvatarStack-BnFAp99k.js";import"./Badge-DENltzo8.js";import"./BigNumber-DmXS7ieK.js";import"./Breadcrumb-qUZ49k0X.js";import"./Link-DBmT5h1W.js";import"./Heading-BZdy5d_w.js";import"./Legend-CKZ_UC0-.js";import"./FileCardList-D4czHQYY.js";import"./Image-Bj9hH710.js";import"./Color-DZdqnqJH.js";import"./Content-DtarLJHH.js";import"./ContextualHelpTrigger-B0sXZW5u.js";import"./CounterBadge-98HPnaLR.js";import"./DonutChart-CCSB7cQU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-r71mMCrS.js";import"./Header-BIxUDaZT.js";import"./Initials-DZ9C76i2.js";import"./InlineCode-D49EgOnY.js";import"./PopoverTrigger-DyZPD5PV.js";import"./Separator-BI7SSrQ8.js";import"./Message-DX3VPOKF.js";import"./MessageSeparator-DKdhmfRa.js";import"./NavigationGroup-polgb4J2.js";import"./Notification-Scrbw5NS.js";import"./NotificationProvider-4ZdYgXNT.js";import"./ProgressBar-vbm8y321.js";import"./Rating-pSJ9uJqF.js";import"./Skeleton-1uRc-6la.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
