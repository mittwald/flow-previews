import{j as r,r as F}from"./iframe-Ckegua2-.js";import{b as n,u as p,F as a,t as S}from"./Form-VPf9Y9GV.js";import{R as u,S as l}from"./ResetButton-CPqSJojW.js";import{B as d}from"./Button-DoXsYGKN.js";import{S as x,s as c}from"./Section-hzyeLE3m.js";import{A as E}from"./ActionGroup-BqOUYrfn.js";import{S as s,g as j}from"./TimeField-CnyVG1v1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6Flvv8a3.js";import"./PropsContextProvider-B0wHrVrI.js";import"./mergeRefs-CXKhTFR6.js";import"./index-CxQn1E-Y.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Q4I4FS-7.js";import"./context-Dskisrvm.js";import"./browser-CQVzEu0I.js";import"./utils-CYmNuJtI.js";import"./IconWarning-Gc4Ng5zo.js";import"./Text-Bc5eZX2G.js";import"./EmulatedBoldText-DGrw2Xfi.js";import"./LoadingSpinner-Cp0jDW5T.js";import"./Button-DWZpmyCC.js";import"./ProgressBar-DIFZ8Kql.js";import"./Hidden-kHVBbfV7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BMhGy4sM.js";import"./useFocusable-oEaC2Y8Z.js";import"./context-CF7hXZMA.js";import"./RSPContexts-B2_NTObV.js";import"./Collection-ezizCYTp.js";import"./CollectionBuilder-BabOu3fh.js";import"./SelectionIndicator-BgkqkO5H.js";import"./Separator-B9FzUmmI.js";import"./useStatic-CoW39G77.js";import"./Accordion-B_N1C8pF.js";import"./Alert-JZD3v-jA.js";import"./AlertIcon-Dy5HewGT.js";import"./AlertBadge-CARGCkX2.js";import"./Align-Dm8_YoZ3.js";import"./Popover-D8pa3B3p.js";import"./OverlayTrigger-DO7Mueac.js";import"./TableFooterRow-CHZHJv30.js";import"./SkeletonText-BLLVdmDs.js";import"./Avatar-B-hMO_N2.js";import"./AvatarStack-C33GWe6X.js";import"./Badge-DMon6P2Z.js";import"./BigNumber-CA9AE9Qf.js";import"./Breadcrumb-DXpAsBUS.js";import"./Link-D6ZKnidg.js";import"./Heading-CD3Wslox.js";import"./Legend-pYfOY7A3.js";import"./FileCardList-CcmxMc-_.js";import"./Image-B-kLfcch.js";import"./Color-BRQcMNt3.js";import"./Content-Dg-EjuzS.js";import"./Label-DbzN7GKj.js";import"./ContextualHelpTrigger-CXW4Wy_s.js";import"./CounterBadge-BSnWWYKA.js";import"./DonutChart-Df00Mh3q.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlPxXhrq.js";import"./Header-DFUpbH_h.js";import"./Initials-C9kUHQxR.js";import"./InlineCode-CKyRvQPe.js";import"./PopoverTrigger-Cbnk17aQ.js";import"./Separator-CpyG2-QQ.js";import"./Message-hrhHm_Tz.js";import"./MessageSeparator-C9EaqawW.js";import"./NavigationGroup-gYW7EtWF.js";import"./Notification-Cb_wPwY7.js";import"./NotificationProvider-DMKJ6Z2r.js";import"./ProgressBar-BEYlfi9a.js";import"./Rating-Bth5rzY2.js";import"./Skeleton-Beogy4tJ.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Mr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
