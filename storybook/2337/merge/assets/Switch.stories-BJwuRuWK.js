import{r as F,j as r}from"./iframe-BJFPIndf.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./FormRootError-Dqv401TK.js";import{B as d}from"./Button-CMLIz8EV.js";import{S as x}from"./Section-C6f0l2Xs.js";import{A as E}from"./ActionGroup-DdfrGWlw.js";import{s as c}from"./ActionBatch-91iU7Ul_.js";import{S as s}from"./Switch-BLkB3cDb.js";import{F as j}from"./FieldError-CerVitTZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Ds5yn-UC.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./clsx-B-dksMZM.js";import"./index-Bg9RtLBP.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./context-Dnh7V-Fy.js";import"./ActionGroupView-Dw8RZYa_.js";import"./Content-Dz9K6tbl.js";import"./Heading-BgaQQLIq.js";import"./Heading-BMtUgZaT.js";import"./RSPContexts-BXfCPyGV.js";import"./utils-WT8FFEB4.js";import"./Text-CGF68X8s.js";import"./browser-DqcTc9Nr.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./Text-D3Y_kc1g.js";import"./Modal-BGgt1ria.js";import"./useOverlayController-BY9uU74J.js";import"./useStatic-BUxz8dmg.js";import"./Overlay-BWkVMZMt.js";import"./OverlayContextProvider-BuTLd76h.js";import"./LoadingSpinner-mc2sXUEG.js";import"./IconWarning-BUqpCqdO.js";import"./remote-BMkebNs4.js";import"./Dialog-eRNfCnmO.js";import"./Button-DuameHsj.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BHGoooY9.js";import"./useFocus-DPdw3svt.js";import"./useFocusRing-BgEwvKKQ.js";import"./useFocusable-DGQMpBVb.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useControlledState-DywfuSZK.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./ButtonView-BZflCgnt.js";import"./Flex-7kPLhUeS.js";import"./useRef-BdfxdyUk.js";import"./ContextMenuSection-BXIYeg2w.js";import"./getActionGroupSlot-ggari8la.js";import"./useFieldComponent-gU-XMME4.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CAGLbUXI.js";import"./useFormReset-CwfjSagb.js";import"./FieldError-Coj9-PqS.js";import"./AlertText-BZJfsxKD.js";import"./AlertIcon-GZVP8WsI.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
