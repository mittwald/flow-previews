import{j as r,r as f}from"./iframe-iStLwuZ7.js";import{a as p,u as a,F as c,t as F}from"./Form-DkFEHnE2.js";import{B as s}from"./Button-DeYIfmY1.js";import{S as h}from"./Section-Dc_V4FCk.js";import{A as x}from"./ActionGroup-szYqUjDu.js";import{s as d}from"./Action-CBX9L7t4.js";import{S as n,F as S}from"./Modal-CvJtPnGb.js";import"./index-nuYtCEEu.js";import"./dynamic-BC0kG87y.js";import"./flowComponent-BgccJZsB.js";import"./index-BbqvJdms.js";import"./clsx-B-dksMZM.js";import"./index-DcihAMJC.js";import"./useLocalizedStringFormatter-nySSu_zi.js";import"./context-abCQqTkG.js";import"./browser-D_N9MqU0.js";import"./utils-En5R44lx.js";import"./IconWarning-DFqNAy-A.js";import"./Text-Bm93Qc7O.js";import"./EmulatedBoldText-Bxo0dRe8.js";import"./LoadingSpinner-Bbl45bGl.js";import"./Button-Cm_HfJV4.js";import"./ProgressBar-BI2riqcs.js";import"./Hidden-Dy-IvjOH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-LOcsQEvn.js";import"./useFocusable-BrL0nAob.js";import"./Dialog-WSuFRoqu.js";import"./RSPContexts-LTaLIYp5.js";import"./OverlayArrow-SEOPpry_.js";import"./useControlledState-BI2V3xrC.js";import"./Collection-BuxUMZwe.js";import"./CollectionBuilder-CuL3Q7YH.js";import"./SelectionIndicator-BKv19ZSu.js";import"./Separator-CHkxKTJO.js";import"./getActionGroupSlot-Df52Fbgc.js";import"./useStatic-TN_NP4Rc.js";import"./context-BkQICaTP.js";import"./Popover-t8MFWx16.js";import"./OverlayTrigger-3eg2WHd6.js";import"./ControlledNotification-DvN-R_5x.js";import"./ClearPropsContextView-8CvEVPvl.js";import"./LayoutCard-BcrcSPzt.js";import"./Accordion-DrSXg7Ka.js";import"./Alert-B1uLVc_c.js";import"./AlertIcon-DkyVKzRm.js";import"./AlertBadge-Cv_3_adP.js";import"./Align-COnCjWi4.js";import"./TableFooterRow-D_Hejorf.js";import"./SkeletonText-CuqjBuzH.js";import"./Avatar-Dh1n43PQ.js";import"./AvatarStack-C_D0L7lk.js";import"./Badge-PtfBqhfx.js";import"./BigNumber-mzJgponV.js";import"./Breadcrumb-BqWMB86a.js";import"./Link-bFvZbohi.js";import"./Heading-HUlQjbPG.js";import"./Legend-C1HGNxYy.js";import"./FileCardList-CGsJO8vl.js";import"./Image-xZciv1rc.js";import"./CodeBlock-BrJTNUpu.js";import"./CopyButton-D9mapmFs.js";import"./Tooltip-jsOI3yF9.js";import"./react-children-utilities-D0BQ-VMp.js";import"./Color-DUgLAHW5.js";import"./Content-D-pd4nBC.js";import"./Label-Q1Aicm4B.js";import"./ContextualHelpTrigger-BKy97cgV.js";import"./CounterBadge-BOfAga5C.js";import"./DonutChart-DuqRwyEE.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DxaN0syG.js";import"./Header-DNUX0qV9.js";import"./Initials-ChZVCYlG.js";import"./InlineCode-CMVEIP31.js";import"./LabeledValue-84Y43aLQ.js";import"./PopoverTrigger-ByXAc-Gw.js";import"./Markdown-Bdo7mHUi.js";import"./Separator-DnWuhjcy.js";import"./Message-DR6gK3zq.js";import"./MessageSeparator-Bw-kWKuc.js";import"./NavigationGroup-BWEvePkz.js";import"./Notification-Z8Iv5hPs.js";import"./NotificationProvider--Nk8mtYw.js";import"./ProgressBar-DCi9eJrq.js";import"./Rating-CSI0WMXP.js";import"./Skeleton-Mw_CW48q.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,j=E("submit"),ro={title:"Integrations/React Hook Form/Switch",component:p,render:()=>{const t=async l=>{await d(5e3),j(l)},o=a({defaultValues:{isEnabled:!1}}),u=F();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(u,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsx(x,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},i={},e={render:t=>{const o=a();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const oo=["Default","WithFieldError","WithFocus"];export{i as Default,e as WithFieldError,m as WithFocus,oo as __namedExportsOrder,ro as default};
