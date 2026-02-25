import{r as F,j as r}from"./iframe-PZSwL5UI.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-DSe7vvOE.js";import{L as o}from"./Label-DHad4C3T.js";import{B as c}from"./Button-Dx8ytIXV.js";import{S as g}from"./Section-Ly32yzfQ.js";import{A as b}from"./ActionGroup-CuC620Qy.js";import{s as u}from"./ActionBatch-KmZgQ_FO.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-DVPP5hpJ.js";import{F as S}from"./FieldError-DI2vGfZA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDVyub9n.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./clsx-B-dksMZM.js";import"./index-Da7vmrj1.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./context-Ff7U_4vz.js";import"./ActionGroupView-CIbffeee.js";import"./Content-DRuiMhgn.js";import"./Heading-DkYLS7Fi.js";import"./Heading-DxHx-m9x.js";import"./RSPContexts-TcotrMre.js";import"./utils-lOj21ZD_.js";import"./Text-CkpR2hqn.js";import"./browser-Ds1bEyov.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Text-BG-2dzKS.js";import"./Modal-C7FSQX3Q.js";import"./useOverlayController-BVZAJrcY.js";import"./useStatic-Bw6k9Sf5.js";import"./Overlay-DZSkN4bv.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./LoadingSpinner-kHlSwNnH.js";import"./IconWarning-Brl3hUMe.js";import"./remote-mdYu2fN6.js";import"./Dialog-BxivZnjn.js";import"./Button-BQZ9yYEV.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B1ZCcdw8.js";import"./useFocus-BI7y428A.js";import"./useFocusRing-C-2IcVPM.js";import"./useFocusable-B4WRTgkS.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useControlledState-DIXXzqms.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./VisuallyHidden-UxX7HzEl.js";import"./ButtonView-XkIAqQ4n.js";import"./Flex-Bs1WbtgB.js";import"./useRef-BIiAMvRM.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B4TWz5w1.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./useFieldComponent-BUmkKSsK.js";import"./useControlledHostValueProps-Ddkm3ljY.js";import"./FieldDescription-D6wLWptA.js";import"./TextField-9pTBhuAO.js";import"./FieldError-mE8Rrcl-.js";import"./Form-BblXnLIP.js";import"./Group-DXdh9woI.js";import"./Input-uYjA58vR.js";import"./useTextField-CiLx_NKB.js";import"./useFormReset-DtrcblTn.js";import"./useFormValidation-BFZ87yhB.js";import"./AlertText-CY4BBxtN.js";import"./AlertIcon-BtM4zuia.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Qr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Xr as __namedExportsOrder,Qr as default};
