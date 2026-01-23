import{j as r,r as x}from"./iframe-CL_XwmGn.js";import{b as a,u as l,F as d,t as j}from"./Form-afgYqryA.js";import{L as o}from"./Label-D8wjF5yZ.js";import{R as c,S as f}from"./ResetButton-DuDiPc2f.js";import{B as p}from"./Button-D2VcFxMo.js";import{S as b}from"./Section-DJ3JBl70.js";import{A as g}from"./ActionGroup-CTh7FmAm.js";import{s as u}from"./Action-BeuDPcZa.js";import{N as t}from"./NumberField-BZdeUlbO.js";import{F as E}from"./FieldDescription-B8hcReII.js";import{F as S}from"./FieldError-p9GwIgel.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-qzGoZAaQ.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./clsx-B-dksMZM.js";import"./index-E9PNAIL6.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./context-BrZvYWUs.js";import"./browser-BUAGSuau.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C9CEKXVd.js";import"./utils-pMOpDdKA.js";import"./Hidden-D-ekfNfu.js";import"./useRef-VOW4feYT.js";import"./IconWarning-BJDkWSaD.js";import"./remote-vDvbK7RM.js";import"./Text-D6CnWJI6.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CWqxXJtj.js";import"./ProgressBar-CwwrTQ5U.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BzQNsH-t.js";import"./useFocus-BpR4SkFv.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocusable-CrdCOPEw.js";import"./ContextMenuSection-6x7QO-B2.js";import"./Dialog-BknS8Hxj.js";import"./RSPContexts-A2U_AiO5.js";import"./OverlayArrow-CguIeEaq.js";import"./useControlledState-CguvIA_y.js";import"./Collection-D-2fJfX0.js";import"./CollectionBuilder-D2SZxLcC.js";import"./SelectionIndicator-KxjlcYOr.js";import"./Separator-CW5j6fDP.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./useCollator-DdGOjTfE.js";import"./FocusScope-D2XVNmzA.js";import"./VisuallyHidden-q4vxjiW8.js";import"./getActionGroupSlot-RL3kfRwz.js";import"./useStatic-KIt4AINJ.js";import"./context-C4d2ZO_d.js";import"./useFieldComponent-CJlPbBit.js";import"./useControlledHostValueProps-DhDFNqRj.js";import"./FieldError-B4bZwJpA.js";import"./Form--AezVwJ0.js";import"./Group-DciaRV8P.js";import"./Input-CUsih0HK.js";import"./useFormValidation-B17WGe6J.js";import"./useSpinButton-CqxPwKVN.js";import"./useFormReset-Dt36AuVA.js";import"./useTextField-BhxE74Xi.js";import"./AlertText-ClMe5xDD.js";import"./AlertIcon-DT_6S455.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
