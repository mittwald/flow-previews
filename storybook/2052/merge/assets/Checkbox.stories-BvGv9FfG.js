import{j as r,r as g}from"./iframe-BojHUq_o.js";import{a as p,u as a,F as u,t as A}from"./Form-DiL5IjUK.js";import{B as n}from"./Button-Dx72WFTb.js";import{S as B}from"./Section-DKmaai8j.js";import{A as C}from"./ActionGroup-htEV1_ZT.js";import{s as d}from"./Action-BzhIxFNp.js";import{C as o}from"./Checkbox-BJMnAb5U.js";import{F as k}from"./useFieldComponent-DC978Re4.js";import"./index-Cun1SEai.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./clsx-B-dksMZM.js";import"./index-Byu2kyB2.js";import"./Text-HCLVlkvP.js";import"./browser-DnzQTrak.js";import"./EmulatedBoldText-B_edXnF6.js";import"./Text-BOOhOnJG.js";import"./utils-Gx6YrarE.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./context-BrPX2Q0J.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CDe5PPLT.js";import"./LoadingSpinner-C6E-2u5d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcusG6ul.js";import"./ProgressBar-Ba8rhXoO.js";import"./Label-kTT31z_U.js";import"./Hidden-ZJfagMAU.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B7zZe8uM.js";import"./useFocus-C9Jl_mjq.js";import"./useFocusRing-PQu2duny.js";import"./useFocusable-BokWW085.js";import"./ContextMenuSection-CjxVZXwg.js";import"./Dialog-MdAsc9jB.js";import"./RSPContexts-4pkCpc5X.js";import"./OverlayArrow-OKVkdbLV.js";import"./useControlledState-goB9hidZ.js";import"./Collection-BfuTuT0s.js";import"./CollectionBuilder-D8Vcy0X7.js";import"./SelectionIndicator-IBXNysdl.js";import"./Separator-B6WcJaDG.js";import"./SelectionManager-DxBzATix.js";import"./useEvent-DG1kacar.js";import"./useCollator-Chx17-X6.js";import"./FocusScope-YAVoTg22.js";import"./VisuallyHidden-BBfPbX8D.js";import"./dynamic-SDISKgE-.js";import"./getActionGroupSlot-D49HjIN5.js";import"./useStatic-CZJ_DwPf.js";import"./context-awqjHi2S.js";import"./Form-CWB6L6R3.js";import"./useFormValidation-Q_otrioy.js";import"./useToggleState-Cm8g9HUX.js";import"./useFormReset-DOCiYQU_.js";import"./react-children-utilities-M78AEMQD.js";import"./ClearPropsContext-CDRCLX7w.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),Rr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const t=async y=>{await d(1500),T(y)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),c=A();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(c,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(c,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(c,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(C,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var l,f,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,F,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var b,E,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const vr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,vr as __namedExportsOrder,Rr as default};
