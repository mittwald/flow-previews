import{j as r,r as F}from"./iframe-Ye-9ROja.js";import{c as n,u as p,F as a,t as S}from"./Form-CDcLPgOm.js";import{R as u,S as l}from"./ResetButton-CW0DRHg8.js";import{B as d}from"./Button-CSXrQkPS.js";import{S as x}from"./Section-D-jjNbm1.js";import{A as E}from"./ActionGroup-DnXdefyU.js";import{s as c}from"./Action-qygqR_UC.js";import{S as s,F as j}from"./Modal-CIEZ1EoF.js";import"./index-nuYtCEEu.js";import"./dynamic-1eLzqo0n.js";import"./flowComponent-DVMSJKid.js";import"./index-BD2FLLtY.js";import"./clsx-B-dksMZM.js";import"./index-MGNRFzGq.js";import"./useLocalizedStringFormatter-8EdZld9N.js";import"./context-BMOJ7e9i.js";import"./browser-BcPcK0wn.js";import"./utils-CF6YsxS1.js";import"./IconWarning-C5ScV98r.js";import"./Text-Bsxj-TZS.js";import"./EmulatedBoldText-Bx43jLQW.js";import"./LoadingSpinner-BKm3aKU7.js";import"./Button-COBj9UNQ.js";import"./ProgressBar-Dc-dQlrj.js";import"./Hidden-CYSIeRK5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CJrPyvnd.js";import"./useFocusable-CkKnxemF.js";import"./Dialog-DBZH8ijj.js";import"./RSPContexts-CFmCNefB.js";import"./OverlayArrow-D0NjRXEq.js";import"./useControlledState-DL7WEOig.js";import"./Collection-iSYWZ0WM.js";import"./CollectionBuilder-CD94NaG6.js";import"./SelectionIndicator--h8__Bgl.js";import"./Separator-BZhvxbZo.js";import"./getActionGroupSlot-Dd6c_7lB.js";import"./useStatic-BBGAeEE_.js";import"./context-CZJE5_Px.js";import"./Popover-01hMVctL.js";import"./OverlayTrigger-7A3ebmst.js";import"./ControlledNotification-D1ICvP0t.js";import"./ClearPropsContextView-P5ekssIx.js";import"./LayoutCard-_NIPig2e.js";import"./Accordion-DVuPPvFm.js";import"./Alert-CoX8Glo_.js";import"./AlertIcon-Cms0_lyO.js";import"./AlertBadge-BwQy8R4I.js";import"./Align-Bd1uPdER.js";import"./TableFooterRow-Cyj24RWE.js";import"./SkeletonText-RU4Lzd3d.js";import"./Avatar-DLiLFqpy.js";import"./AvatarStack-D9A8rmQG.js";import"./Badge-B8DGqMn_.js";import"./BigNumber-BEmRb-dG.js";import"./Breadcrumb-Dc5oH2ha.js";import"./Link-IU6OuunG.js";import"./Heading-ETrbJF6H.js";import"./Legend-CZBMwtAS.js";import"./FileCardList-DAI-YEHv.js";import"./Image-CRqr-it8.js";import"./CodeBlock-C-rPc8wh.js";import"./CopyButton-B5KxU-BY.js";import"./Tooltip-C4AwSevr.js";import"./react-children-utilities-Cr04RBVg.js";import"./Color-B6FpV0Rf.js";import"./Content-J12nk9kF.js";import"./Label-BvzLFnRt.js";import"./ContextualHelpTrigger-qqmLNRdq.js";import"./CounterBadge-CdQSd7GR.js";import"./DonutChart-CX5CdKNp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BwrNV2W_.js";import"./Header-DfJL-tPQ.js";import"./Initials-BLl46Ac1.js";import"./InlineCode-C6TTos-N.js";import"./LabeledValue-xGe-YROA.js";import"./PopoverTrigger-BdQu_M_u.js";import"./Markdown-CtZ51Y4r.js";import"./Separator-DcDBZH2W.js";import"./Message-333zFq4x.js";import"./MessageSeparator-kJgauZrH.js";import"./NavigationGroup-D_P-cGCp.js";import"./Notification-Menli_O0.js";import"./NotificationProvider-CfYhTdpN.js";import"./ProgressBar-BGyqmigD.js";import"./Rating-DADKnEjj.js";import"./Skeleton-Dc_ys3XA.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),io={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},i={},e={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
