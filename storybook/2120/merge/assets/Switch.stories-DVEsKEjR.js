import{j as r,r as F}from"./iframe-BFS0V-7K.js";import{c as n,u as p,F as a,t as S}from"./Form-Cb4n6oUC.js";import{R as u,S as l}from"./ResetButton-C1ZzppC-.js";import{B as d}from"./Button-C69BF7uv.js";import{S as x}from"./Section-jBZNhjEq.js";import{A as E}from"./ActionGroup-DX0lhxHa.js";import{s as c}from"./Action-BkvOgHYi.js";import{S as s,F as j}from"./Modal-BFATeJko.js";import"./index-nuYtCEEu.js";import"./dynamic-D6nHDIyd.js";import"./flowComponent-DYDr2Yry.js";import"./index-BLI0rWKp.js";import"./clsx-B-dksMZM.js";import"./index-Cd8SiJSJ.js";import"./useLocalizedStringFormatter-Bsp3ptWs.js";import"./context-CL-MWO-e.js";import"./browser-DkyXecm8.js";import"./utils-pBfQtTJP.js";import"./IconWarning-BzBGzmgt.js";import"./Text-Cg-PlNpB.js";import"./EmulatedBoldText-DZMpoDwy.js";import"./LoadingSpinner-Bnd8iTGA.js";import"./Button-C0SUbguZ.js";import"./ProgressBar-DZnnPhpU.js";import"./Hidden-459sOV2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CM3Y5p4v.js";import"./useFocusable-DIP3xdGA.js";import"./Dialog-Cj7jIBKp.js";import"./RSPContexts-vmNR8Bdo.js";import"./OverlayArrow-BWg220ZF.js";import"./useControlledState-CfZCIixa.js";import"./Collection-BNdUYhId.js";import"./CollectionBuilder-oqPeank5.js";import"./SelectionIndicator-C95FoYBz.js";import"./Separator-DyL-chbW.js";import"./getActionGroupSlot-B8sKJhlM.js";import"./useStatic-5zK4mpNm.js";import"./context-B7YXRHOK.js";import"./Popover-CRv5SMSH.js";import"./OverlayTrigger-DB1HvpAI.js";import"./ControlledNotification-CqVYbY5l.js";import"./ClearPropsContextView-M-FcIVZm.js";import"./LayoutCard-DliVh_Cq.js";import"./Accordion-BN1AeHiU.js";import"./Alert-CkAVzfTa.js";import"./AlertIcon-BSK9BpjA.js";import"./AlertBadge--nGlaEDG.js";import"./Align-Csa9WLSq.js";import"./TableFooterRow-z-Vp4lH_.js";import"./SkeletonText-DNF0wxcf.js";import"./Avatar-DCVki-tG.js";import"./AvatarStack-dSGbniWM.js";import"./Badge-B1T0t0bU.js";import"./BigNumber-DC_XM9ko.js";import"./Breadcrumb-BmXdRJ_S.js";import"./Link-obEopwrC.js";import"./Heading-DljESEje.js";import"./Legend-BgcSabyE.js";import"./FileCardList-BLwhGj5a.js";import"./Image-4xzJyRg6.js";import"./CodeBlock-BMPK3aC9.js";import"./CopyButton-Dspux94x.js";import"./Tooltip-DdLAAoPW.js";import"./react-children-utilities-BhgYEgbL.js";import"./Color-Bkxy1GQb.js";import"./Content-CWdQm9SB.js";import"./Label-B5VHziHb.js";import"./ContextualHelpTrigger-1bZdijhA.js";import"./CounterBadge-COopACRP.js";import"./DonutChart-C1kyimoM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGzqTGDI.js";import"./Header-r0BkDezu.js";import"./Initials-DrCrYU8v.js";import"./InlineCode-BwCrq_Tn.js";import"./LabeledValue-m8r6nqGA.js";import"./PopoverTrigger-DwJ_YWVm.js";import"./Markdown-Dlb8-Jwc.js";import"./Separator-DMn5BSHW.js";import"./Message-BUhJcMSM.js";import"./MessageSeparator-Jfq9TQuP.js";import"./NavigationGroup-YgTh9AiK.js";import"./Notification-DVeBahUP.js";import"./NotificationProvider-CODhhIwr.js";import"./ProgressBar-CxCN6ejE.js";import"./Rating-CTf8YM4g.js";import"./Skeleton-f-vyEhot.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),io={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},i={},e={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const eo=["Default","WithFieldError","WithFocus"];export{i as Default,e as WithFieldError,m as WithFocus,eo as __namedExportsOrder,io as default};
