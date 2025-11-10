import{j as r,r as F}from"./iframe-DVp3wyW8.js";import{c as n,u as p,F as a,t as S}from"./Form-z76jdldp.js";import{R as u,S as l}from"./ResetButton-CXg2zsDG.js";import{B as d}from"./Button-BGy_040K.js";import{S as x}from"./Section-BH2aMjN_.js";import{A as E}from"./ActionGroup-pi-cPFOK.js";import{s as c}from"./Action-K8BkEoNE.js";import{S as s,F as j}from"./Modal-BMQQV5CJ.js";import"./index-nuYtCEEu.js";import"./dynamic-DGFrs7WZ.js";import"./flowComponent-DOD6KTqp.js";import"./index-CSWZRCbA.js";import"./clsx-B-dksMZM.js";import"./index-CnZiUiqa.js";import"./useLocalizedStringFormatter-BDNlhScJ.js";import"./context-BTkZkFrl.js";import"./browser-qRiPvlbV.js";import"./utils-CK_bkg3x.js";import"./IconWarning-btspmSaz.js";import"./Text-x2NLhZ_6.js";import"./EmulatedBoldText-CHhmc0Op.js";import"./LoadingSpinner-BvAyWbCS.js";import"./Button-ComzTzlH.js";import"./ProgressBar-BEtx-YzR.js";import"./Hidden-QjALVdSt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Drt37fC5.js";import"./useFocusable-CbEG4JhP.js";import"./Dialog-DnE7Rdfp.js";import"./RSPContexts-CQ8PUfHG.js";import"./OverlayArrow-hRB0J8f2.js";import"./useControlledState-sP_KhedU.js";import"./Collection-IUBaFxMl.js";import"./CollectionBuilder-BV2QNItK.js";import"./SelectionIndicator-BlMGsqeF.js";import"./Separator-DSxPZKK_.js";import"./getActionGroupSlot-D9iU03Oh.js";import"./useStatic-INcP8lHW.js";import"./context-DxFAQaLL.js";import"./Popover-C_VLeK4z.js";import"./OverlayTrigger-DDB1sJEU.js";import"./ControlledNotification-OITqwrQV.js";import"./ClearPropsContextView-BZK07IGP.js";import"./LayoutCard-OPTYLsJ7.js";import"./Accordion-DmoyI5os.js";import"./Alert-CEm4e_SW.js";import"./AlertIcon-C0fW6UTj.js";import"./AlertBadge-BAIY6jhD.js";import"./Align-DtfFhKHV.js";import"./TableFooterRow-BKmNXOlc.js";import"./SkeletonText-CHG5MwQd.js";import"./Avatar-BoS6ilSi.js";import"./AvatarStack-BNLqbH_5.js";import"./Badge-BuWxR8NR.js";import"./BigNumber-oP7yv34x.js";import"./Breadcrumb-nKhLYS12.js";import"./Link-CMULlE06.js";import"./Heading-VOEAcbBw.js";import"./Legend-UMI8_Va6.js";import"./FileCardList-BwROlVfd.js";import"./Image-DV3kYb9c.js";import"./CodeBlock-DLSAe4Y0.js";import"./CopyButton-Dk4qi3FQ.js";import"./Tooltip-DqV_89wM.js";import"./react-children-utilities-CabJh-Do.js";import"./Color-BHbd5l6Z.js";import"./Content-O95-U-Qr.js";import"./Label-CuedprOO.js";import"./ContextualHelpTrigger-CYvsPez5.js";import"./CounterBadge-v39-8X0R.js";import"./DonutChart-YB1zUrit.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DtiGGgun.js";import"./Header-BCGekEHF.js";import"./Initials-B-b-7fIf.js";import"./InlineCode-BwMJAyQF.js";import"./LabeledValue-C8Tjx9pK.js";import"./PopoverTrigger-D6XGHSuv.js";import"./Markdown-BRgSnXcQ.js";import"./Separator-BYYET0Xl.js";import"./Message-CVMTOi2n.js";import"./MessageSeparator-CQIvknRP.js";import"./NavigationGroup-CspCX-8Q.js";import"./Notification-M6D_CpCT.js";import"./NotificationProvider-BN4BkdSa.js";import"./ProgressBar-BIc7ii6n.js";import"./Rating-lw9S6p8R.js";import"./Skeleton-adxwNElx.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),io={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},i={},e={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
