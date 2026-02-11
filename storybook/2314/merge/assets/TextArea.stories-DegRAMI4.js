import{r as F,j as r}from"./iframe-BnHQGzj-.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-fNAdGvYj.js";import{L as o}from"./Label-u3CIBBS-.js";import{B as c}from"./Button-kOzdzwoL.js";import{S as g}from"./Section-SvACH-rM.js";import{A as b}from"./ActionGroup-BPljKUZx.js";import{s as u}from"./Action-D5FY68jf.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-COgs_Kkg.js";import{F as S}from"./FieldError-hA7hA6sK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dg_y_eXk.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./clsx-B-dksMZM.js";import"./index-CR3_Geu_.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./context-oT0KmQcZ.js";import"./useRef-DC89URQK.js";import"./utils-B_drgFmA.js";import"./ButtonView-CPuOwsd2.js";import"./browser-Byd_T3zS.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./IconWarning-BD5ZgLZv.js";import"./remote-DzOTiMGq.js";import"./Text-BWqTdGF3.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./Text-CP9lFNhL.js";import"./LoadingSpinner-DoB6VVvS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7nIxjvHJ.js";import"./ProgressBar-V752D4mF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DW43gzrd.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useFocusable-CpiznpYH.js";import"./ContextMenuSection-BQD1q2_K.js";import"./Dialog-vlYkkLZ8.js";import"./RSPContexts-DJrv2Up2.js";import"./OverlayArrow-CU__1Pr_.js";import"./useControlledState-ARGAgX5I.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./VisuallyHidden-DN_pHWhj.js";import"./getActionGroupSlot-DFydpqIy.js";import"./useStatic-CXOpTYPY.js";import"./context-CLHbEMzO.js";import"./useFieldComponent-BKOZgMTQ.js";import"./useControlledHostValueProps-C85uCNsj.js";import"./FieldDescription-yrYvUz27.js";import"./TextField-CmEfXiDD.js";import"./FieldError-CfhVGgFS.js";import"./Form-B5QWBDfx.js";import"./Group-ZIuNhF8O.js";import"./Input-DmDHg40n.js";import"./useTextField-D3uZgsWg.js";import"./useFormReset-C2cP98Fi.js";import"./useFormValidation-CJa5Pm36.js";import"./AlertText-BSsMj9jl.js";import"./AlertIcon-cpK7-VlX.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
