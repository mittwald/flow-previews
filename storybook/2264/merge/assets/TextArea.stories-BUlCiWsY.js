import{j as r,r as F}from"./iframe-BrcQhcwR.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-BB_es5yP.js";import{L as o}from"./Label-eB0oKMGS.js";import{B as c}from"./Button-DdI6TSg5.js";import{S as g}from"./Section-BOZrahl-.js";import{A as b}from"./ActionGroup-DQKpdPni.js";import{s as u}from"./Action-EPprNG1t.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CzfXzb28.js";import{F as S}from"./FieldError-D24voWaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CAxQXs-G.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./clsx-B-dksMZM.js";import"./index-CSUT2NCR.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./context-DOSLHoOx.js";import"./useRef-DT2mR3RP.js";import"./utils-DM5Jp8EX.js";import"./ButtonView-B7ZIb4eI.js";import"./browser-BdJDgoMU.js";import"./Label.module-CUYTf9Jc.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./Text-PyhJCmvh.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./LoadingSpinner-C-WbSXYT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CztCXt43.js";import"./ProgressBar-DhNSphWE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BBaWFJWg.js";import"./useFocus-BKws8v7-.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocusable-BcdgZhOs.js";import"./ContextMenuSection-BV3yleYZ.js";import"./Dialog-DAgI8QrG.js";import"./RSPContexts-CLcTs2D_.js";import"./OverlayArrow-DY7ECRqq.js";import"./useControlledState-DsUZezc6.js";import"./Collection-kTlo8aNF.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./Separator-BpDC4shb.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./useCollator-DSAWxNmx.js";import"./FocusScope-CxLgpb_M.js";import"./VisuallyHidden-CIPoghQB.js";import"./getActionGroupSlot-Dt2slLBi.js";import"./useStatic-Cr39OxgC.js";import"./context-C9I6Qco3.js";import"./TextFieldBase-Do10r9PH.js";import"./FieldDescription-8e-MGFTK.js";import"./useFieldComponent-CsbQ-7mY.js";import"./TextField-DAzAMmO8.js";import"./FieldError-BZvulriJ.js";import"./Form-DI5rGqIO.js";import"./Group-kTgIroHk.js";import"./Input-CFsccwbB.js";import"./useTextField-y15xLcpn.js";import"./useFormReset-BHDJFB5Q.js";import"./useFormValidation-CstoYpvO.js";import"./useControlledHostValueProps-B_1Yxsae.js";import"./AlertText-BAa8Yse9.js";import"./AlertIcon-CzBRtVHG.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Kr as __namedExportsOrder,Hr as default};
