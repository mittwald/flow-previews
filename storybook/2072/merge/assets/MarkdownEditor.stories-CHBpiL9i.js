import{j as r,r as x}from"./iframe-DP8YDTL2.js";import{b as m,u as a,F as p,t as E}from"./Form-CMLvOtlf.js";import{L as s}from"./Label-DHXZY79j.js";import{R as u,S as c}from"./ResetButton-Dax6fC2j.js";import{B as l}from"./Button-B0W1yT72.js";import{S as j,s as d}from"./Section-Co64I5rb.js";import{A as b}from"./ActionGroup-H4Md62tw.js";import{r as n,g}from"./TimeField-B4EG23Nt.js";import"./index-nuYtCEEu.js";import"./dynamic-BTJXp5gG.js";import"./PropsContextProvider-B3HMXUKZ.js";import"./mergeRefs-DsuNZd-H.js";import"./index-CpbCmUJ7.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CJMUKkFM.js";import"./context-02tevN2j.js";import"./browser-SpSM5C6g.js";import"./utils-Dm1zmrBW.js";import"./ProgressBar-tqMwcDQP.js";import"./Hidden-DNrH43oS.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Bww0inpG.js";import"./Text-D-QDVbYg.js";import"./EmulatedBoldText-Crt4TFM2.js";import"./LoadingSpinner-CpfR1KV-.js";import"./Button-DyaOfmyD.js";import"./useFocusRing-DixPSib4.js";import"./useFocusable-CgaYGH8g.js";import"./context-BtDomXbz.js";import"./RSPContexts-BogeclaT.js";import"./Collection-CPT1vu3H.js";import"./CollectionBuilder-Dz9u6crH.js";import"./SelectionIndicator-YAID1d9m.js";import"./Separator-BJVU84qu.js";import"./useStatic-oAu8wkWB.js";import"./Accordion-HcBanqJd.js";import"./Alert-rrP5Gy9B.js";import"./AlertIcon-DVh6pESV.js";import"./AlertBadge-DweOtEPJ.js";import"./Align-BxTc4ez8.js";import"./Popover-CQf2aBwQ.js";import"./OverlayTrigger-B2YRG83_.js";import"./TableFooterRow-DOkZ36FW.js";import"./SkeletonText-DYVowVbT.js";import"./Avatar-CRCuFFh3.js";import"./AvatarStack-CxmOjPug.js";import"./Badge-DB4ZdCrx.js";import"./BigNumber-Cgbcuj9W.js";import"./Breadcrumb-B-drEY1z.js";import"./Link-DgZD2-cc.js";import"./Heading-DQ_JsPVE.js";import"./Legend-CfYbvXbX.js";import"./FileCardList-BkjUaEeO.js";import"./Image-Ckc0BKol.js";import"./Color-CCS7cSNH.js";import"./Content-6_dFeFDF.js";import"./ContextualHelpTrigger-BADDKsT4.js";import"./CounterBadge-CLIpLOvV.js";import"./DonutChart-Bhgjv56J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8Deauvc.js";import"./Header-Ba8EoW9O.js";import"./Initials-DulEZZDu.js";import"./InlineCode-B5Ery-yk.js";import"./PopoverTrigger-BJQfALxW.js";import"./Separator-KhxpKn3e.js";import"./Message-DCnkeZUC.js";import"./MessageSeparator-D1DZsiYE.js";import"./NavigationGroup-BUzA88tA.js";import"./Notification-cR9AaDvT.js";import"./NotificationProvider-Ci8ufUj9.js";import"./ProgressBar-BocbUUX5.js";import"./Rating-lsHc3-9S.js";import"./Skeleton-CLwkgNOY.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
