import{j as r,r as F}from"./iframe-C3qryY9m.js";import{u as n,F as p}from"./Form-Dzh9-M4k.js";import{F as a,t as S}from"./Field-C5YwXwEF.js";import{B as d}from"./Button-DjS8Y37J.js";import{S as x}from"./Section-r39qLNYF.js";import{A as E}from"./ActionGroup-pX8NZfE-.js";import{s as c}from"./Action-BLUuMHcv.js";import{S as s}from"./Switch-lNBrNTrE.js";import{F as j}from"./FieldError-2lUipCQG.js";import{R as u}from"./ResetButton-f8kamCMI.js";import{S as l}from"./SubmitButton-DNmC6Pyz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-7Ut6r0Ca.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-B40s9Zwa.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./clsx-B-dksMZM.js";import"./index-BCGSECUV.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./context-Dn-XBzeE.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./Text-D-8m5QW2.js";import"./EmulatedBoldText-BhqmPl42.js";import"./Text-ugyEWZ3z.js";import"./utils-DpUn2o29.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXnGr114.js";import"./ProgressBar-D4KqjXjU.js";import"./Label-CyYSEd83.js";import"./Hidden-ft2VLnDU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./ContextMenuSection-BM6PTmuP.js";import"./lib-90ocxLs-.js";import"./Dialog-eOuJy3Tw.js";import"./RSPContexts-DdcVv8cM.js";import"./OverlayArrow-CC04FrS6.js";import"./useControlledState-D6tzoGpH.js";import"./Collection-CWTLjfsE.js";import"./CollectionBuilder-1df9N_mD.js";import"./SelectionIndicator-Cnczr7tl.js";import"./Separator-Ccf3ET9r.js";import"./SelectionManager-BRiRdz2V.js";import"./useEvent-DVkloeR1.js";import"./useCollator-WS3ME5vT.js";import"./FocusScope-DBhIZEy-.js";import"./VisuallyHidden-CRCUMBi1.js";import"./getActionGroupSlot-BQTW5J-Z.js";import"./useStatic-CxeJCkNi.js";import"./context-BBcvZ-pJ.js";import"./IconCheck-StvbSZ58.js";import"./IconClose-Ow5wPPrS.js";import"./useFieldComponent-BCb9qeqT.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B7PWI6oX.js";import"./useFormReset-CU22rOa5.js";import"./FieldError-Bjrpvc0X.js";import"./IconDanger-CnINUXvw.js";import"./useRef-IOGWkLv5.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:a,render:()=>{const t=async h=>{await c(5e3),B(h)},o=n({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=n();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
