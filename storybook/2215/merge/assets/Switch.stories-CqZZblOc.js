import{j as r,r as F}from"./iframe-FgJ_J-H0.js";import{b as n,u as p,F as a,t as S}from"./Form-BVuPoSOi.js";import{R as u,S as l}from"./ResetButton-jFpFjYeg.js";import{B as d}from"./Button-DAV102-b.js";import{S as x,s as c}from"./Section-KcKraSFk.js";import{A as E}from"./ActionGroup-BJ9qHrpp.js";import{S as s,g as j}from"./TimeField-Co7GP2GW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CcSJ2V2H.js";import"./PropsContextProvider-D4ZDxBE5.js";import"./mergeRefs-B0SFCKpc.js";import"./index-D5Q5r0EQ.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-T_wC2jpb.js";import"./context-BdkCFUfw.js";import"./browser-DUTkZfBO.js";import"./utils-CpAt2MQ0.js";import"./IconWarning-CTwTuPoy.js";import"./Text-DFL3SoXQ.js";import"./EmulatedBoldText-B0xGhkgA.js";import"./LoadingSpinner-D-ZvoQWA.js";import"./Button-D1iDLFQk.js";import"./ProgressBar-C9bgo184.js";import"./Hidden-fZuF_gJA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DWyZOWS1.js";import"./useFocusable-CcMdE3Gl.js";import"./context-Zd06eDB-.js";import"./RSPContexts-BtQRbm6D.js";import"./Collection-DzrsfNpG.js";import"./CollectionBuilder-BkEo1yPT.js";import"./SelectionIndicator-DXbR8Lbk.js";import"./Separator-CEsI0Otd.js";import"./useStatic-C1zZPFiS.js";import"./Accordion-io5UELOJ.js";import"./Alert-9jMZJopr.js";import"./AlertIcon-B3uKWtQk.js";import"./AlertBadge-H-rDyqf-.js";import"./Align-DmzMsv0T.js";import"./Popover-CMikV-wU.js";import"./OverlayTrigger--5L_1U0w.js";import"./TableFooterRow-CtbyytXV.js";import"./SkeletonText-6QEWsZGr.js";import"./Avatar-ClmGh38b.js";import"./AvatarStack-D2Xx6Bnf.js";import"./Badge-Dr16W0CP.js";import"./BigNumber-Dk3uhm2m.js";import"./Breadcrumb-BzzlR0li.js";import"./Link-BTa1ooRS.js";import"./Heading-CtwLqgxn.js";import"./Legend-D3LNNeFG.js";import"./FileCardList-B85HNlbk.js";import"./Image-Dt2xjXWg.js";import"./Color-Bp0ZXAXD.js";import"./Content-Gw2uLkjU.js";import"./Label-dIFs3d3H.js";import"./ContextualHelpTrigger-4SkGlWeV.js";import"./CounterBadge-BXJ7T0jf.js";import"./DonutChart-C4u46woz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BQ4xIGSR.js";import"./Header-DyVj_TzU.js";import"./Initials-Cm_DyWr3.js";import"./InlineCode-CZw0TC9N.js";import"./PopoverTrigger-CaH8hJY-.js";import"./Separator-lfjcoKvM.js";import"./Message-K29IWi_M.js";import"./MessageSeparator-DPflMeSl.js";import"./NavigationGroup-B5RjEnqs.js";import"./Notification-BfVd4W3J.js";import"./NotificationProvider-CQgaoiA5.js";import"./ProgressBar-DUshVboI.js";import"./Rating-C77bfPzz.js";import"./Skeleton-CN4c_iAv.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Mr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
