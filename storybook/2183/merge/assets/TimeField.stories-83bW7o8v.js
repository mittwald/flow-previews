import{j as r,r as x}from"./iframe-BsCnutBU.js";import{u as p,F as a}from"./Form-BTeyd2P5.js";import{L as o}from"./Label-DBiwGOqI.js";import{F as d,t as j}from"./Field-DEtzRgkR.js";import{B as l}from"./Button-PMfVxp4L.js";import{S as b}from"./Section-C1RjpY9f.js";import{A as E}from"./ActionGroup-B3HbARs1.js";import{s as c}from"./Action-CDxlZfJH.js";import{K as S}from"./DateInput-BrAiVTDL.js";import{T as t}from"./TimeField-_kVluuqB.js";import{F as T}from"./FieldError-CJPS-seQ.js";import{R as u}from"./ResetButton-CQkSIzTo.js";import{S as F}from"./SubmitButton-Cjg-acN2.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-b7DWXv2S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoLxyVDl.js";import"./index-xZbZEtqW.js";import"./index-PlwcbQcr.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./context-DzQn9XcF.js";import"./Label-B_59qcJ5.js";import"./utils-Dcbzlj6n.js";import"./Hidden-gYrC-ftW.js";import"./dynamic-DlsVuPIo.js";import"./IconChevronDown-C43PU1K-.js";import"./remote-LwvHvQd9.js";import"./IconX-BpqNIxw6.js";import"./IconCheck-C2zwGnIP.js";import"./Text-CNxpKe1i.js";import"./EmulatedBoldText-DyWG-htd.js";import"./Text-BOWjpC0c.js";import"./LoadingSpinner-C-Vur43u.js";import"./ariaLive-CXcB5l43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YTgHheMP.js";import"./ProgressBar-BvRvte-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiTBxdfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHCx2MC1.js";import"./useFocus-zRbhNQvs.js";import"./useFocusRing-eAFZ6BYE.js";import"./useFocusable-Czch9xtI.js";import"./ContextMenuSection-DnLRDkoA.js";import"./lib-90ocxLs-.js";import"./Dialog-CUr7rK7w.js";import"./RSPContexts-Dp9qqhDW.js";import"./OverlayArrow-D6gKPtoN.js";import"./useControlledState-CigtIRD8.js";import"./Collection-C8-9jDK9.js";import"./CollectionBuilder-CJjXf3Iw.js";import"./SelectionIndicator-Baq8cblo.js";import"./Separator-BirN-56R.js";import"./SelectionManager-QwxvBoUZ.js";import"./useEvent-CvU6uOe-.js";import"./useCollator-O8BhpWis.js";import"./FocusScope-Bn9eK5Im.js";import"./VisuallyHidden-xvADZrl6.js";import"./getActionGroupSlot-D8KutjkD.js";import"./useStatic-BIAK3C1m.js";import"./context-bnUckVor.js";import"./FieldError-oQwctYYH.js";import"./Form-te5EpUcA.js";import"./Group-zOLkyEJm.js";import"./Input-XkH6LSV2.js";import"./useFormValidation-hrdfW_GO.js";import"./useFormReset-DwCUeF5J.js";import"./useSpinButton-Cnh37WIQ.js";import"./useFilter-BbiUq3sx.js";import"./useFieldComponent-DKQov8fN.js";import"./IconDanger-d9R36P01.js";import"./useRef-CoHtiAMY.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:d,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
