import{j as r,r as B}from"./iframe-BojHUq_o.js";import{a,u as p,F as c,t as L}from"./Form-DiL5IjUK.js";import{L as s}from"./Label-DZ-kvQ_z.js";import{B as m}from"./Button-Dx72WFTb.js";import{S as O}from"./Section-DKmaai8j.js";import{A as _}from"./ActionGroup-htEV1_ZT.js";import{s as d}from"./Action-BzhIxFNp.js";import{S as n}from"./SearchField-BWaoK-lr.js";import{F as w}from"./useFieldComponent-DC978Re4.js";import"./index-Cun1SEai.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./clsx-B-dksMZM.js";import"./index-Byu2kyB2.js";import"./Text-HCLVlkvP.js";import"./browser-DnzQTrak.js";import"./EmulatedBoldText-B_edXnF6.js";import"./Text-BOOhOnJG.js";import"./utils-Gx6YrarE.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./context-BrPX2Q0J.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-kTT31z_U.js";import"./Hidden-ZJfagMAU.js";import"./IconWarning-CDe5PPLT.js";import"./LoadingSpinner-C6E-2u5d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcusG6ul.js";import"./ProgressBar-Ba8rhXoO.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B7zZe8uM.js";import"./useFocus-C9Jl_mjq.js";import"./useFocusRing-PQu2duny.js";import"./useFocusable-BokWW085.js";import"./ContextMenuSection-CjxVZXwg.js";import"./Dialog-MdAsc9jB.js";import"./RSPContexts-4pkCpc5X.js";import"./OverlayArrow-OKVkdbLV.js";import"./useControlledState-goB9hidZ.js";import"./Collection-BfuTuT0s.js";import"./CollectionBuilder-D8Vcy0X7.js";import"./SelectionIndicator-IBXNysdl.js";import"./Separator-B6WcJaDG.js";import"./SelectionManager-DxBzATix.js";import"./useEvent-DG1kacar.js";import"./useCollator-Chx17-X6.js";import"./FocusScope-YAVoTg22.js";import"./VisuallyHidden-BBfPbX8D.js";import"./dynamic-SDISKgE-.js";import"./getActionGroupSlot-D49HjIN5.js";import"./useStatic-CZJ_DwPf.js";import"./context-awqjHi2S.js";import"./ReactAriaControlledValueFix-BGBOVb49.js";import"./Form-CWB6L6R3.js";import"./Group-D8Hf8MQ4.js";import"./Input-ldVtEAcy.js";import"./useTextField-RpbQmuLZ.js";import"./useFormReset-DOCiYQU_.js";import"./useFormValidation-Q_otrioy.js";import"./react-children-utilities-M78AEMQD.js";import"./ClearPropsContext-CDRCLX7w.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,v=q("submit"),Gr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const e=async g=>{await d(5e3),v(g)},E=p({defaultValues:{user:""}}),y=L();return r.jsx(c,{form:E,onSubmit:e,children:r.jsxs(O,{children:[r.jsx(y,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx(_,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},t={render:()=>{const e=p();return B.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(w,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var u,l,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var f,F,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...(S=(F=t.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var x,j,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
