import{j as r,r as A}from"./iframe-BojHUq_o.js";import{a as d,u as l,F as c,t as L}from"./Form-DiL5IjUK.js";import{L as o}from"./Label-DZ-kvQ_z.js";import{B as p}from"./Button-Dx72WFTb.js";import{S as T}from"./Section-DKmaai8j.js";import{A as B}from"./ActionGroup-htEV1_ZT.js";import{s as u}from"./Action-BzhIxFNp.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-wZPq3ehr.js";import{F as _}from"./useFieldComponent-DC978Re4.js";import"./index-Cun1SEai.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./clsx-B-dksMZM.js";import"./index-Byu2kyB2.js";import"./Text-HCLVlkvP.js";import"./browser-DnzQTrak.js";import"./EmulatedBoldText-B_edXnF6.js";import"./Text-BOOhOnJG.js";import"./utils-Gx6YrarE.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./context-BrPX2Q0J.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-kTT31z_U.js";import"./Hidden-ZJfagMAU.js";import"./IconWarning-CDe5PPLT.js";import"./LoadingSpinner-C6E-2u5d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcusG6ul.js";import"./ProgressBar-Ba8rhXoO.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B7zZe8uM.js";import"./useFocus-C9Jl_mjq.js";import"./useFocusRing-PQu2duny.js";import"./useFocusable-BokWW085.js";import"./ContextMenuSection-CjxVZXwg.js";import"./Dialog-MdAsc9jB.js";import"./RSPContexts-4pkCpc5X.js";import"./OverlayArrow-OKVkdbLV.js";import"./useControlledState-goB9hidZ.js";import"./Collection-BfuTuT0s.js";import"./CollectionBuilder-D8Vcy0X7.js";import"./SelectionIndicator-IBXNysdl.js";import"./Separator-B6WcJaDG.js";import"./SelectionManager-DxBzATix.js";import"./useEvent-DG1kacar.js";import"./useCollator-Chx17-X6.js";import"./FocusScope-YAVoTg22.js";import"./VisuallyHidden-BBfPbX8D.js";import"./dynamic-SDISKgE-.js";import"./getActionGroupSlot-D49HjIN5.js";import"./useStatic-CZJ_DwPf.js";import"./context-awqjHi2S.js";import"./TextFieldBase-CsoMj4av.js";import"./FieldDescription-DQnyyCo1.js";import"./TextField-Bwv7dyz6.js";import"./Form-CWB6L6R3.js";import"./Group-D8Hf8MQ4.js";import"./Input-ldVtEAcy.js";import"./useTextField-RpbQmuLZ.js";import"./useFormReset-DOCiYQU_.js";import"./useFormValidation-Q_otrioy.js";import"./ReactAriaControlledValueFix-BGBOVb49.js";import"./react-children-utilities-M78AEMQD.js";import"./ClearPropsContext-CDRCLX7w.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,M=q("submit"),Nr={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const s=async S=>{await u(1500),M(S)},e=l({defaultValues:{message:"",messageDefaultValue:O.medium,messageRequired:"",messageMaxLength:""}}),i=L();return r.jsx(c,{form:e,onSubmit:s,children:r.jsxs(T,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(B,{children:r.jsx(p,{type:"submit",children:"Submit"})})]})})}},m={},n={render:s=>{const e=l();return A.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{type:"submit",children:"Submit"})]})}};var h,x,f;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var F,j,g;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(g=(j=n.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var b,E,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(y=(E=a.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Ur as __namedExportsOrder,Nr as default};
