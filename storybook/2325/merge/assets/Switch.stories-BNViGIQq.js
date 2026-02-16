import{r as F,j as r}from"./iframe-H3UGI_HB.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-CWmPV2A5.js";import{B as d}from"./Button-fzixWt9q.js";import{S as x}from"./Section-BwDtX3u0.js";import{A as E}from"./ActionGroup-DUi3fLFY.js";import{s as c}from"./ActionBatch-TsHiTfcO.js";import{S as s}from"./Switch-BJioOx7U.js";import{F as j}from"./FieldError-wcTb1U2C.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DBkJoO-a.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./clsx-B-dksMZM.js";import"./index-BJWFQYe5.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./context-BGVDv2KD.js";import"./ActionGroupView-BZm8MaS_.js";import"./Content-DCXa1KEI.js";import"./Heading-F7Cj8meE.js";import"./Heading-CBpf9z-K.js";import"./RSPContexts-BrswSFX-.js";import"./utils-DSogMYdc.js";import"./Text-B0lwY8q7.js";import"./browser-xqq3Xy_w.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./Text-UIHj6j-v.js";import"./Modal-CfSIm2YK.js";import"./Overlay-B-ohzPPh.js";import"./useOverlayController-3aktaPy5.js";import"./useStatic-CxHSWaOd.js";import"./OverlayContextProvider-BiL0j1tu.js";import"./LoadingSpinner-r6z_bU0O.js";import"./IconWarning-D9BgjB6B.js";import"./remote-uffOWPGy.js";import"./Dialog-DKMSACkI.js";import"./Button-5W_fyVDJ.js";import"./ProgressBar-Diyn8Lqp.js";import"./Label-CZuC8vWV.js";import"./Hidden-DoBcQ2Eg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtoVShGG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CSCW4wCL.js";import"./useFocus-DQ3i5Klp.js";import"./useFocusRing-DrWQa_14.js";import"./useFocusable-BYwgOLI_.js";import"./OverlayArrow-C-E8ydRe.js";import"./useControlledState-DkMic-Ic.js";import"./Collection-WGKH_Dnj.js";import"./CollectionBuilder-Ba2_Q0LP.js";import"./SelectionIndicator-BgUtvt2H.js";import"./Separator-Q9pbsAsV.js";import"./SelectionManager-Bqz8XsWW.js";import"./useEvent-ChUOYfSF.js";import"./useCollator--V7CwpxI.js";import"./FocusScope-DjcW1lzL.js";import"./VisuallyHidden-BGP1Ifbj.js";import"./ButtonView-DND7dytH.js";import"./Flex-BcmdNa7O.js";import"./useRef-Cvv3Klvq.js";import"./ContextMenuSection-DZ6NPIaP.js";import"./getActionGroupSlot-B9ZNFQ5y.js";import"./useFieldComponent-Bj80Ne3v.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bslox5IB.js";import"./useFormReset-CtKq0dbr.js";import"./FieldError-Be1mQ-cQ.js";import"./AlertText-CQfakUvk.js";import"./AlertIcon-Cb5scZh6.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
