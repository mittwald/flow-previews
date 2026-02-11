import{r as F,j as r}from"./iframe-BfVXcSwu.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-CMcHrOvU.js";import{L as o}from"./Label-Bd8l-oGM.js";import{B as c}from"./Button-BWaSf0b-.js";import{S as g}from"./Section-D8BWSJOo.js";import{A as b}from"./ActionGroup-BhAYVJgP.js";import{s as u}from"./ActionBatch-CJiux6Y0.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-GniMj4fv.js";import{F as S}from"./FieldError-DHMqnFf9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BmLDKJfM.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./clsx-B-dksMZM.js";import"./index-CeMFBQ52.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./context-BIORzbvt.js";import"./useRef-sZPdMa_K.js";import"./utils-fXq1spu5.js";import"./ButtonView-ZDfm5U5H.js";import"./browser-6PMbihrp.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./IconWarning-DP3Jd3bc.js";import"./remote-cx7SRDrO.js";import"./Text-DuT5OHtj.js";import"./EmulatedBoldText-D7Dqf59X.js";import"./Text-DLMHe2l_.js";import"./LoadingSpinner-uBvx8mS0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmoQnqed.js";import"./ProgressBar-CsSv4sp0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_iuRLI1y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CZJvw_K-.js";import"./useFocus-YiRiyJqJ.js";import"./useFocusRing-2MdBuBce.js";import"./useFocusable-Ct-dNppG.js";import"./ContextMenuSection-CkxzJqxG.js";import"./Dialog-DclKvE_W.js";import"./RSPContexts-BvooXi_W.js";import"./OverlayArrow-DmRhraF5.js";import"./useControlledState-DrmC-rK0.js";import"./Collection-BIYmOT8q.js";import"./CollectionBuilder-B88Jj6se.js";import"./SelectionIndicator-DdESkGsw.js";import"./Separator-C-w1woXG.js";import"./SelectionManager-DDxW4Xvy.js";import"./useEvent-N7DHQy5M.js";import"./useCollator-BH_ZCLE4.js";import"./FocusScope-DYj4AULV.js";import"./VisuallyHidden-CW_0epyS.js";import"./getActionGroupSlot-DFXtDzme.js";import"./useStatic-DbJ3Jck6.js";import"./context-C_1OFCCp.js";import"./useFieldComponent-CiLN9FTD.js";import"./useControlledHostValueProps-B6Bq0gpz.js";import"./FieldDescription-og_Z8NeP.js";import"./TextField-C3JOoQFK.js";import"./FieldError-DwfvyaXU.js";import"./Form-BvL7gPGk.js";import"./Group-Cv9HErv5.js";import"./Input-B7Gmgprj.js";import"./useTextField-CN12hJJf.js";import"./useFormReset-bqmCiwf6.js";import"./useFormValidation-BRgTVkeU.js";import"./AlertText-DCHQhIzQ.js";import"./AlertIcon-DMbcP_TF.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
