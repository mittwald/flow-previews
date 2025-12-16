import{j as r,r as x}from"./iframe-C3qryY9m.js";import{u as p,F as a}from"./Form-Dzh9-M4k.js";import{L as o}from"./Label-C-0JfuKv.js";import{F as d,t as j}from"./Field-C5YwXwEF.js";import{B as l}from"./Button-DjS8Y37J.js";import{S as b}from"./Section-r39qLNYF.js";import{A as E}from"./ActionGroup-pX8NZfE-.js";import{s as c}from"./Action-BLUuMHcv.js";import{K as S}from"./DateInput-CkjSrJEc.js";import{T as t}from"./TimeField-CHU3xdIR.js";import{F as T}from"./FieldError-2lUipCQG.js";import{R as u}from"./ResetButton-f8kamCMI.js";import{S as F}from"./SubmitButton-DNmC6Pyz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-7Ut6r0Ca.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./index-BCGSECUV.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./context-Dn-XBzeE.js";import"./Label-CyYSEd83.js";import"./utils-DpUn2o29.js";import"./Hidden-ft2VLnDU.js";import"./dynamic-B40s9Zwa.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./Text-D-8m5QW2.js";import"./EmulatedBoldText-BhqmPl42.js";import"./Text-ugyEWZ3z.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXnGr114.js";import"./ProgressBar-D4KqjXjU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./ContextMenuSection-BM6PTmuP.js";import"./lib-90ocxLs-.js";import"./Dialog-eOuJy3Tw.js";import"./RSPContexts-DdcVv8cM.js";import"./OverlayArrow-CC04FrS6.js";import"./useControlledState-D6tzoGpH.js";import"./Collection-CWTLjfsE.js";import"./CollectionBuilder-1df9N_mD.js";import"./SelectionIndicator-Cnczr7tl.js";import"./Separator-Ccf3ET9r.js";import"./SelectionManager-BRiRdz2V.js";import"./useEvent-DVkloeR1.js";import"./useCollator-WS3ME5vT.js";import"./FocusScope-DBhIZEy-.js";import"./VisuallyHidden-CRCUMBi1.js";import"./getActionGroupSlot-BQTW5J-Z.js";import"./useStatic-CxeJCkNi.js";import"./context-BBcvZ-pJ.js";import"./FieldError-Bjrpvc0X.js";import"./Form-3X5C6e4Q.js";import"./Group-BEZrTaXd.js";import"./Input-BWLNXNeV.js";import"./useFormValidation-DvJkknbD.js";import"./useFormReset-CU22rOa5.js";import"./useSpinButton-BzorPDQL.js";import"./useFilter-CXD9qqdL.js";import"./useFieldComponent-BCb9qeqT.js";import"./IconDanger-CnINUXvw.js";import"./useRef-IOGWkLv5.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:d,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Ur as __namedExportsOrder,Nr as default};
