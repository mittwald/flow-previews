import{j as r,r as A}from"./iframe-DTheBFqg.js";import{a as d,u as l,F as c,t as L}from"./Form-Bb0OZPQ3.js";import{L as o}from"./Label-DS5MocSE.js";import{B as p}from"./Button-Bmq0qjWo.js";import{S as T}from"./Section-BDBFYB_1.js";import{A as B}from"./ActionGroup-Cjs4nxWu.js";import{s as u}from"./Action-XVrtYdEu.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-SHeHEeoq.js";import{F as _}from"./useFieldComponent-mBN-j8SF.js";import"./index-Cun1SEai.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./clsx-B-dksMZM.js";import"./index-C24gQbls.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./context-BBJsvWP1.js";import"./browser-BqPz5wcV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DaxiHPCi.js";import"./utils-CIVb4-pA.js";import"./Hidden-BUnkE8VR.js";import"./IconWarning-CXTS1Zmo.js";import"./Text-DVaBUvZL.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./LoadingSpinner-CLX8R9JK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9sfb4m-.js";import"./ProgressBar-Dr6zks-A.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DWQVem_V.js";import"./useFocus-gFMm1SVx.js";import"./useFocusRing-Bw6jYcrF.js";import"./useFocusable-CIkWBa0n.js";import"./ContextMenuSection-DVfZqLHJ.js";import"./Dialog-DwHrBIEx.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./VisuallyHidden-D3PBi60E.js";import"./dynamic-DYsVCHyX.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./useStatic-KScOH6sT.js";import"./context-D5Eh6Kjh.js";import"./TextFieldBase-DL6tAx3q.js";import"./FieldDescription-Coryxrlu.js";import"./TextField-7NnkUF-m.js";import"./Form-B9EEIYmx.js";import"./Group-C3T90Noz.js";import"./Input-Ct0KMtbU.js";import"./useTextField-Cl-78bMJ.js";import"./useFormReset-C6eFdCIy.js";import"./useFormValidation-Bp-At_qz.js";import"./ReactAriaControlledValueFix-DoO2Kj3m.js";import"./react-children-utilities-g2QZgYrG.js";import"./ClearPropsContext-NW1-nYLP.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,M=q("submit"),Ur={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const s=async S=>{await u(1500),M(S)},e=l({defaultValues:{message:"",messageDefaultValue:O.medium,messageRequired:"",messageMaxLength:""}}),i=L();return r.jsx(c,{form:e,onSubmit:s,children:r.jsxs(T,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(B,{children:r.jsx(p,{type:"submit",children:"Submit"})})]})})}},m={},n={render:s=>{const e=l();return A.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{type:"submit",children:"Submit"})]})}};var h,x,f;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var F,j,g;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(y=(E=a.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Yr as __namedExportsOrder,Ur as default};
