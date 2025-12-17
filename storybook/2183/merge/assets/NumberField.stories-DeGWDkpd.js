import{j as r,r as x}from"./iframe-BsZhBXal.js";import{u as a,F as l}from"./Form-B7ghN0ur.js";import{L as o}from"./Label-XwOnxXzc.js";import{F as p,t as j}from"./Field-DLAz7mqq.js";import{B as u}from"./Button-Cxmuw7nD.js";import{S as g}from"./Section-4lXA4afp.js";import{A as b}from"./ActionGroup-Nx7KWa-a.js";import{s as d}from"./Action-CL1C_viL.js";import{N as t}from"./NumberField-9bESkjKA.js";import{F as E}from"./FieldDescription-DnEcRZ-N.js";import{F as S}from"./FieldError-CMRDgIJA.js";import{R as c}from"./ResetButton-ClO0pQ_P.js";import{S as f}from"./SubmitButton-yYHmVNB1.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B5Kx9HDY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./Label-Bdtu_aaV.js";import"./utils-D7f3lHNi.js";import"./Hidden-B-7zzc6R.js";import"./dynamic-V9DMyUPi.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./Text-CWir5uzG.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./ContextMenuSection-C2eJTG_x.js";import"./lib-90ocxLs-.js";import"./Dialog-D9Y5GrYo.js";import"./RSPContexts-CGJG9_Ew.js";import"./OverlayArrow-CT9B4GiY.js";import"./useControlledState-Bxg7VuAu.js";import"./Collection-DAkGHX-3.js";import"./CollectionBuilder-D8uuaET0.js";import"./SelectionIndicator-BYUqX36x.js";import"./Separator-Bm5TH6F1.js";import"./SelectionManager-BYlJdR-V.js";import"./useEvent-BIGXqu2E.js";import"./useCollator-CmHstSkI.js";import"./FocusScope-qpEeXdaL.js";import"./VisuallyHidden-W4tQCM8c.js";import"./getActionGroupSlot-BjVvI7Fw.js";import"./useStatic-CKUwua6_.js";import"./context-DVwGhZ9t.js";import"./useFieldComponent-DadDOWX3.js";import"./IconChevronDown-pBTCbBMc.js";import"./IconChevronUp-DKhv2SV7.js";import"./IconMinus-BLVvvRO8.js";import"./IconPlus-DCRYVjFT.js";import"./useControlledHostValueProps-B4IoLjjH.js";import"./FieldError-Dpf9fLlc.js";import"./Form-CmE3z4DB.js";import"./Group-D0eC1hRN.js";import"./Input-Bo9ofHsZ.js";import"./useFormValidation-WNRR-_5g.js";import"./useSpinButton-j9Q2QFYb.js";import"./useFormReset-4DpQBagB.js";import"./useTextField-B7CblbpP.js";import"./IconDanger-D44A5Pyv.js";import"./useRef-BLO8ZTUr.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Xr={title:"Integrations/React Hook Form/NumberField",component:p,render:()=>{const e=async F=>{await d(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Zr as __namedExportsOrder,Xr as default};
