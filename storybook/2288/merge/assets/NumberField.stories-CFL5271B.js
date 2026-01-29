import{j as r,r as x}from"./iframe-Bj8CIgLy.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-5FZ7-Sc5.js";import{L as o}from"./Label-DCfOJgVU.js";import{B as p}from"./Button-b_60CJFp.js";import{S as g}from"./Section-Bw-Treyf.js";import{A as b}from"./ActionGroup-C-nWA-s8.js";import{s as u}from"./Action-DbcbId4I.js";import{N as t}from"./NumberField--3y8eaQJ.js";import{F as E}from"./FieldDescription-tBjikzHa.js";import{F as S}from"./FieldError-Dbjs-A5K.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DEq-wVmB.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./useRef-CJxAjFY9.js";import"./utils-D41FTHpf.js";import"./ButtonView-DoUQTLRD.js";import"./browser-Rl4DjN4H.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BLrqdZMB.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocusable-DNf9Dm0r.js";import"./ContextMenuSection-aa2v9fsF.js";import"./Dialog-vXYkYCcw.js";import"./RSPContexts-C3RQOwqv.js";import"./OverlayArrow-zA421arv.js";import"./useControlledState-C0IHmt74.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./VisuallyHidden-D10Fyvvv.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./useStatic-BJFVwiuT.js";import"./context-CihUwagI.js";import"./useFieldComponent-DFS7CEov.js";import"./useControlledHostValueProps-D2bTA6r2.js";import"./FieldError-cTj-tlV1.js";import"./Form-CdHdNrpC.js";import"./Group-C2p9sJyZ.js";import"./Input-DxRXMpsm.js";import"./useFormValidation-CuYWsRMr.js";import"./useSpinButton-B5uVAGBe.js";import"./useFormReset-DPVe5t_C.js";import"./useTextField-gMvFPb5G.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
