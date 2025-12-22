import{j as r,r as F}from"./iframe-Du65Ph_c.js";import{b as p,u as d,F as l,t as j}from"./Form-B3SdpJl2.js";import{L as o}from"./Label-BClS0qAd.js";import{R as h,S as x}from"./ResetButton-16xJCuRV.js";import{B as c}from"./Button-2wmaPnFC.js";import{S as g}from"./Section-CmcN9Eur.js";import{A as b}from"./ActionGroup-CUUirHEC.js";import{s as u}from"./Action-BMmoeCN3.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-RknuOtSv.js";import{F as S}from"./FieldError-VBXyMAIR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtEU0XPC.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./clsx-B-dksMZM.js";import"./index-c0t27COx.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./context-BMDcuGwa.js";import"./browser-57tL9X_d.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D_GXaE34.js";import"./utils-xIJEb5Gc.js";import"./Hidden-BV9iY75y.js";import"./useRef-DEleeR3P.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./Text-CtX5enn3.js";import"./EmulatedBoldText-CITvecLd.js";import"./Text-Cl831mKA.js";import"./LoadingSpinner-DEfGApvw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CjwwJrCh.js";import"./ProgressBar-B4qFtVbo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BdNff0XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOin5iy.js";import"./useFocus-mAbeDdRN.js";import"./useFocusRing-B7cLewIC.js";import"./useFocusable-RoNPbAVl.js";import"./ContextMenuSection-Dk6jrzXb.js";import"./Dialog-BO9iihOE.js";import"./RSPContexts-CGKyxyrO.js";import"./OverlayArrow-CbRWYOrW.js";import"./useControlledState-Cdt3oZ6_.js";import"./Collection-C5ltbjdX.js";import"./CollectionBuilder-d6KQwCFJ.js";import"./SelectionIndicator-Cb43LM7W.js";import"./Separator-DKPq8LUH.js";import"./SelectionManager-BR7dbQPM.js";import"./useEvent-D0wfQKUV.js";import"./useCollator-DYYkh59M.js";import"./FocusScope-DUOtKQcD.js";import"./VisuallyHidden-rhukFLga.js";import"./getActionGroupSlot-BXwxo_QL.js";import"./useStatic-B95N-aRU.js";import"./context-Cb5nHwHn.js";import"./TextFieldBase-DStMjvfH.js";import"./FieldDescription-PWJKvGgj.js";import"./useFieldComponent-XbdbUfvB.js";import"./TextField-CT_QddQu.js";import"./FieldError-cRzcLKxU.js";import"./Form-CLANTGFM.js";import"./Group-Bc65Crwm.js";import"./Input-CyqTlZ7V.js";import"./useTextField-D01-3X5s.js";import"./useFormReset-D830YkJ7.js";import"./useFormValidation-DAWFGl74.js";import"./useControlledHostValueProps-BIH1ZGPM.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Hr as __namedExportsOrder,Gr as default};
