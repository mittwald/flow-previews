import{j as r,r as F}from"./iframe-CzXG2_T8.js";import{b as n,u as p,F as a,t as S}from"./Form-B-a2YihZ.js";import{R as u,S as l}from"./ResetButton-DoJUBaVL.js";import{B as d}from"./Button-CE0-K_QR.js";import{S as x,s as c}from"./Section-DRzJ9hQY.js";import{A as E}from"./ActionGroup-DdNyHVbC.js";import{S as s,g as j}from"./TimeField-Dl-kHVAX.js";import"./index-nuYtCEEu.js";import"./dynamic-D9Ldu2R_.js";import"./PropsContextProvider-CBC4MB9g.js";import"./mergeRefs-BrX_XdJI.js";import"./index-CW_J_3Lm.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BqSTbtiO.js";import"./context-CoFMJFUW.js";import"./browser-TfqyRUmT.js";import"./utils-CRR3kiFX.js";import"./IconWarning-BlYr5wdx.js";import"./Text-pNSdlFVE.js";import"./EmulatedBoldText-Dax89Wj8.js";import"./LoadingSpinner-DXLKn-V2.js";import"./Button-S7e-r_k_.js";import"./ProgressBar-fGMPBnRY.js";import"./Hidden-QndGxZGG.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BjdVgYEz.js";import"./useFocusable-BDJ0-yDW.js";import"./context-BYHZfe66.js";import"./RSPContexts-EC3Gwcat.js";import"./Collection-BP43cq6b.js";import"./CollectionBuilder-BY3GrVHa.js";import"./SelectionIndicator-Bu5dS93A.js";import"./Separator-kqblG9CO.js";import"./useStatic-CSFWNuey.js";import"./Accordion-CK3CNQSd.js";import"./Alert-BVRdOGDJ.js";import"./AlertIcon-CKFy_SRY.js";import"./AlertBadge-Bn2Sq-O3.js";import"./Align-BrD0lUOJ.js";import"./Popover-BqNRrPxw.js";import"./OverlayTrigger-DvD8AAyr.js";import"./TableFooterRow-DxScdmh-.js";import"./SkeletonText-BajNlo4H.js";import"./Avatar-B3YtQfnh.js";import"./AvatarStack-lqTMKVs4.js";import"./Badge-DuGjQabs.js";import"./BigNumber-8SJtAMTv.js";import"./Breadcrumb-Ba5qYlLB.js";import"./Link-DfCw4YEt.js";import"./Heading-CrkkWjnL.js";import"./Legend-CeMxMq_c.js";import"./FileCardList-BM3lJHXl.js";import"./Image--2MKe1QA.js";import"./Color-BHbT5del.js";import"./Content-BiixoJVq.js";import"./Label-CLEaEiAD.js";import"./ContextualHelpTrigger-CRKS8P0J.js";import"./CounterBadge-DnONLIGJ.js";import"./DonutChart-CPtp4Q3P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-azF5kucF.js";import"./Header-DUaJeums.js";import"./Initials-D5xq1FWi.js";import"./InlineCode-Bl-Nmkob.js";import"./PopoverTrigger-Cw7IKzZy.js";import"./Separator-Camsel6h.js";import"./Message-BmLxOVze.js";import"./MessageSeparator-DhFUPqEZ.js";import"./NavigationGroup-B0lwi3ok.js";import"./Notification-BmLGybW-.js";import"./NotificationProvider-DyGx_RoU.js";import"./ProgressBar-C-A5f-uu.js";import"./Rating-Bcobm7yB.js";import"./Skeleton-BSdRMWz_.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Mr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Nr as __namedExportsOrder,Mr as default};
