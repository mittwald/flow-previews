import{j as r,r as x}from"./iframe-Dk60Gpin.js";import{b as m,u as a,F as p,t as E}from"./Form-BlvV6-f1.js";import{L as s}from"./Label-DRmbs-HY.js";import{R as u,S as c}from"./ResetButton-B_ncRbLl.js";import{B as l}from"./Button-BaFAPk6P.js";import{S as j,s as d}from"./Section-CoeixnSJ.js";import{A as b}from"./ActionGroup-Dtx1HegN.js";import{r as n,g}from"./TimeField-4D5Nhq3P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-4gi8GiXC.js";import"./PropsContextProvider-BdZs02Td.js";import"./mergeRefs-MJGqjKNq.js";import"./index-DJhA7Wui.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bc2xZT0_.js";import"./context-fp4w0YcD.js";import"./browser-BvxtBXb9.js";import"./utils-Ch0ZZJ4D.js";import"./ProgressBar-D9iry1uY.js";import"./Hidden-D3Wnlg7j.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BTcUjjec.js";import"./Text-BbMQM1DG.js";import"./EmulatedBoldText-BXENtjIV.js";import"./LoadingSpinner-BDrvrciy.js";import"./Button-BnOkCogS.js";import"./useFocusRing-BRWpt41V.js";import"./useFocusable-BjdDuCYq.js";import"./context-BthpMtM5.js";import"./RSPContexts-CVMXvjX8.js";import"./Collection-BeF55kv5.js";import"./CollectionBuilder-B_txidaV.js";import"./SelectionIndicator-Dw3nAwCY.js";import"./Separator-CD2VJwjG.js";import"./useStatic-CwfWB48x.js";import"./Accordion--PiuPE_9.js";import"./Alert-eguRclW1.js";import"./AlertIcon-BvG3TXg-.js";import"./AlertBadge-Ci3q7ONa.js";import"./Align-otZVcDBU.js";import"./Popover-DUzfCkJT.js";import"./OverlayTrigger-D41F-SKL.js";import"./TableFooterRow-ZiMRcLMp.js";import"./SkeletonText-BdDEip2O.js";import"./Avatar-uhIZWmRw.js";import"./AvatarStack-Ce0OtoHB.js";import"./Badge-Ci0_YhS-.js";import"./BigNumber-D_1n_f24.js";import"./Breadcrumb-DTmlwgi3.js";import"./Link-Bk7l3Hhl.js";import"./Heading-BClLfS9l.js";import"./Legend-lyiM8tnC.js";import"./FileCardList-z1TOLFrB.js";import"./Image-BFIYVrgb.js";import"./Color-CuKRh3Mj.js";import"./Content-qRe1c-jG.js";import"./ContextualHelpTrigger-3ee7SYMq.js";import"./CounterBadge-DvjVQF88.js";import"./DonutChart-DxQSNKcp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B1AdWPYh.js";import"./Header-C1g8Z3mN.js";import"./Initials-BwxHVFlG.js";import"./InlineCode-DeaiiFf1.js";import"./PopoverTrigger-aEhJpWUL.js";import"./Separator-DpLqTccG.js";import"./Message-DgNLVg8a.js";import"./MessageSeparator-CqkN_4jq.js";import"./NavigationGroup-BNi9xF1W.js";import"./Notification-BYPtdgjX.js";import"./NotificationProvider-DbUFBJzc.js";import"./ProgressBar-BAxPsWQD.js";import"./Rating-CiM8MErc.js";import"./Skeleton-DAWVrv5Y.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
