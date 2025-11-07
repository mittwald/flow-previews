import{j as r,r as F}from"./iframe-DhEtuAZk.js";import{c as n,u as p,F as a,t as S}from"./Form-N3hbjQ-x.js";import{R as u,S as l}from"./ResetButton-BJ5Hz55D.js";import{B as d}from"./Button-BY9Kr7Ye.js";import{S as x}from"./Section-D4Gr2eQE.js";import{A as E}from"./ActionGroup-ESJbAOgN.js";import{s as c}from"./Action-BVtpAmgk.js";import{S as s,F as j}from"./Modal-DH23VA8R.js";import"./index-nuYtCEEu.js";import"./dynamic-CwxkBJO8.js";import"./flowComponent-Sd9fxQN7.js";import"./index-Cjw7dVYj.js";import"./clsx-B-dksMZM.js";import"./index-DWS6YMK5.js";import"./useLocalizedStringFormatter-TlIqT86R.js";import"./context-B4_4eL8K.js";import"./browser-CRwqe8Ti.js";import"./utils-DSKmOAaE.js";import"./IconWarning-CZNr6BH3.js";import"./Text-CrxTC35E.js";import"./EmulatedBoldText-DZREZbVk.js";import"./LoadingSpinner-DZTinZ99.js";import"./Button-DH0rVXA4.js";import"./ProgressBar-CCRGuqks.js";import"./Hidden-Dx0nOzpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CtGm1hSf.js";import"./useFocusable-GlgNOWPt.js";import"./Dialog-CGia85P_.js";import"./RSPContexts-CP8S-33J.js";import"./OverlayArrow-D5AF8TQx.js";import"./useControlledState-Dj5UiPRe.js";import"./Collection-DTMrpJoY.js";import"./CollectionBuilder-BPnFrNW_.js";import"./SelectionIndicator-C_Yqy7JN.js";import"./Separator-qstkXCxY.js";import"./getActionGroupSlot-B2enF2gG.js";import"./useStatic-OTFolAlH.js";import"./context-D6NPEI3P.js";import"./Popover-bxB2am_R.js";import"./OverlayTrigger-BYK82yFU.js";import"./ControlledNotification-B3y-_NHJ.js";import"./ClearPropsContextView-CacYGh9N.js";import"./LayoutCard-DyYCqBUd.js";import"./Accordion-AwI-eLcX.js";import"./Alert-C0_k9BWo.js";import"./AlertIcon-CX41xz4j.js";import"./AlertBadge-Bu1tkE54.js";import"./Align-DoePDGix.js";import"./TableFooterRow-B5odsCqN.js";import"./SkeletonText-CXTn8PEF.js";import"./Avatar-DA2EpUV0.js";import"./AvatarStack-BTUWictn.js";import"./Badge--cveCoN-.js";import"./BigNumber-CXH91pve.js";import"./Breadcrumb-Dm-Ab6kG.js";import"./Link-CtepCC57.js";import"./Heading-w8VDel3v.js";import"./Legend-Cz5DfYh0.js";import"./FileCardList-Dskx08JL.js";import"./Image-rd2HOgTo.js";import"./CodeBlock-BbN4ELkc.js";import"./CopyButton-Bc4gZ0dZ.js";import"./Tooltip-OwQuKknw.js";import"./react-children-utilities-goMvo_yH.js";import"./Color-CRJdMals.js";import"./Content-B5pw8O7y.js";import"./Label-BGOtPgJY.js";import"./ContextualHelpTrigger-_Yaxcn4v.js";import"./CounterBadge-oC6FtYIY.js";import"./DonutChart-CwT0BVij.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BD1lBLs6.js";import"./Header-aUvXKfPp.js";import"./Initials-BLkxqdWL.js";import"./InlineCode-BaTFar_i.js";import"./LabeledValue-Q6uf6T0w.js";import"./PopoverTrigger-DeiqVe2R.js";import"./Markdown-OhbZtiCz.js";import"./Separator-yVzKMq8d.js";import"./Message-BKYnO8Sw.js";import"./MessageSeparator-CZBnsaEy.js";import"./NavigationGroup-DmIc1IFk.js";import"./Notification-Bo-h0jCk.js";import"./NotificationProvider-Ew3gKcP-.js";import"./ProgressBar-DuPgLyUc.js";import"./Rating-k4iMHwyu.js";import"./Skeleton-Bf4mjzjC.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),io={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},i={},e={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
