import{j as r,r as F}from"./iframe-BBX1MRm7.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-Db5RrJnJ.js";import{L as o}from"./Label-rzq6PBW8.js";import{B as c}from"./Button-BqkPfHUM.js";import{S as g}from"./Section-BkJ3a6Gx.js";import{A as b}from"./ActionGroup-CxYNjMjy.js";import{s as u}from"./Action-NfMU4pZQ.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BGtOT9Mo.js";import{F as S}from"./FieldError-DhG2ZYTr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CGdtYp29.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./clsx-B-dksMZM.js";import"./index-CaVys9ny.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./context-CZSumH6g.js";import"./useRef-DzuR5EZW.js";import"./utils-BavrKavc.js";import"./ButtonView-DtpzIIn9.js";import"./browser-94--rh0I.js";import"./Label.module-CUYTf9Jc.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./IconWarning-D1rdipwB.js";import"./remote-DQSNjr8v.js";import"./Text-bZjB6G95.js";import"./EmulatedBoldText-B_ZrZeLf.js";import"./Text-Dx1GcOD_.js";import"./LoadingSpinner-D7vBft_f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJia7Ggt.js";import"./ProgressBar-BlLvdox5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CwE3wslu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C19iJYYn.js";import"./useFocus-CEW7w8cP.js";import"./useFocusRing-Bm9tRP_O.js";import"./useFocusable-DP1OjJqD.js";import"./ContextMenuSection-C-rpOjJk.js";import"./Dialog-DxFT1h3e.js";import"./RSPContexts-Bzvj4RyS.js";import"./OverlayArrow-CEy0Lp_c.js";import"./useControlledState-hVcOsExM.js";import"./Collection-KvAmq1BM.js";import"./CollectionBuilder-CT5wpjPQ.js";import"./SelectionIndicator-BhUr7H-C.js";import"./Separator-CBat6_46.js";import"./SelectionManager-BqxHDxhn.js";import"./useEvent-9YiOq-bW.js";import"./useCollator-BBRvdoV2.js";import"./FocusScope-geYyY5OG.js";import"./VisuallyHidden-B0NnPUX1.js";import"./getActionGroupSlot-Cs4GvwwL.js";import"./useStatic-eT6_SwdI.js";import"./context-CbNZJEnz.js";import"./TextFieldBase-BECaGeob.js";import"./FieldDescription-D0h9kvob.js";import"./useFieldComponent-B_qWTKJx.js";import"./TextField-B6jqJ0Dq.js";import"./FieldError-C_UdMObt.js";import"./Form-CFIny17O.js";import"./Group-C1xuy7HP.js";import"./Input-DVyLg-xr.js";import"./useTextField-Bwh7GfLW.js";import"./useFormReset--Sx8IrxJ.js";import"./useFormValidation-CjGCqCfM.js";import"./useControlledHostValueProps-DKX7miYN.js";import"./AlertText-BesKIlLk.js";import"./AlertIcon-Bzw_XkQ4.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
