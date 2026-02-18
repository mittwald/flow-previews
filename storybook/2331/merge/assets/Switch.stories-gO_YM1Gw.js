import{r as F,j as r}from"./iframe-BDFzVZbC.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-D1K9FtBE.js";import{B as d}from"./Button-C7bK1-uf.js";import{S as x}from"./Section-DTE7_1U7.js";import{A as E}from"./ActionGroup-DXoxOsLZ.js";import{s as c}from"./ActionBatch-dkJpCMmD.js";import{S as s}from"./Switch-iBmBwcV_.js";import{F as j}from"./FieldError-BgOx5Pdv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-78IPl_xO.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./clsx-B-dksMZM.js";import"./index-CcbRX2xZ.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./context-sVk6h2Ud.js";import"./ActionGroupView-Dsksq701.js";import"./Content-w-_DoZqM.js";import"./Heading-D5c-TU0p.js";import"./Heading-CoT4JWE4.js";import"./RSPContexts-CK_xwACt.js";import"./utils-DRqoG6OW.js";import"./Text-DCO-oE1a.js";import"./browser-D6pVd-JB.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./Text-5CWdwzmY.js";import"./Modal-Bz96LWDI.js";import"./useOverlayController-Bb-vbpCY.js";import"./useStatic-DKe6XZbW.js";import"./Overlay-DkdcKSQA.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./LoadingSpinner-CPBqqCdo.js";import"./IconWarning-aDXn3__r.js";import"./remote-C6miTdu_.js";import"./Dialog-C2-FJ5MR.js";import"./Button-ibrCxHHX.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D8fV0T39.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJEnnjGh.js";import"./useFocus-BE-kuowd.js";import"./useFocusRing-CxM1MJ0B.js";import"./useFocusable-nLh15Hem.js";import"./OverlayArrow-BhJrUQVC.js";import"./useControlledState-CxpqxoPE.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./SelectionIndicator-S2R90Jld.js";import"./Separator-DZXWrML2.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./FocusScope-Djn4bjzo.js";import"./VisuallyHidden-DL89d0r2.js";import"./ButtonView-Co3oQwB4.js";import"./Flex-DbvEsOwD.js";import"./useRef-DOSvcyqg.js";import"./ContextMenuSection-rEkP8dNP.js";import"./getActionGroupSlot-DJwqOljU.js";import"./useFieldComponent-DJTCy7fJ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-RYb4ELwE.js";import"./useFormReset-CQpdwD5T.js";import"./FieldError-4UEPVceR.js";import"./AlertText-CJ-mVZBv.js";import"./AlertIcon-tKcNuTH2.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
