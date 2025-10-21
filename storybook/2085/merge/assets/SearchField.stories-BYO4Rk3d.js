import{j as r,r as f}from"./iframe-CCgutS5t.js";import{a,u as p,F as c,t as F}from"./Form-DxlmCUiG.js";import{L as s}from"./Label-CNIOR_Eh.js";import{B as m}from"./Button-CB_SQlxf.js";import{S}from"./Section-xdCGG6Rl.js";import{A as x}from"./ActionGroup-CI83x2Hx.js";import{s as d}from"./Action-BELw5_ca.js";import{S as n}from"./SearchField-5F4esUzF.js";import{F as j}from"./useFieldComponent-B36i382k.js";import"./index-nuYtCEEu.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./clsx-B-dksMZM.js";import"./index-Bp2d_id4.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./context-3TjxBBiZ.js";import"./browser-Cx9TdPw4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B2_Qc07C.js";import"./utils-N6USVjPQ.js";import"./Hidden-BtuehT5t.js";import"./IconWarning-BIjPfZ_7.js";import"./Text-C-3mWHEt.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./Text-DSftVrdI.js";import"./LoadingSpinner-CbAXLLLD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxAPDldv.js";import"./ProgressBar-Pqb-SOG6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C2LzTSEt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_WBS1_H.js";import"./useFocus-qWLnYmls.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocusable-C1wexJX5.js";import"./ContextMenuSection-plAoKvaj.js";import"./Dialog-BFfcJUiM.js";import"./RSPContexts-D8ixlOLf.js";import"./OverlayArrow-D_Aj7zmL.js";import"./useControlledState-C-pLTCEb.js";import"./Collection-DHibalOY.js";import"./CollectionBuilder-BmvqiF6i.js";import"./SelectionIndicator-BSAaVuJo.js";import"./Separator-CdSBB1Je.js";import"./SelectionManager-CyYCav6z.js";import"./useEvent-rTmmTfmz.js";import"./useCollator-Cks0Ndw_.js";import"./FocusScope-1cqgO8JZ.js";import"./VisuallyHidden-upAad0zi.js";import"./dynamic-CnlMxg6J.js";import"./getActionGroupSlot-DHM8pkUy.js";import"./useStatic-MsaSckAb.js";import"./context-_S3VUPKr.js";import"./ReactAriaControlledValueFix-B6glQD59.js";import"./Form-DylZ4hmS.js";import"./Group-nu6L2uF2.js";import"./Input-zWUUR8ko.js";import"./useTextField-Dj-O8CqK.js";import"./useFormReset-C2ixUAq4.js";import"./useFormValidation-DXrwvkVu.js";import"./react-children-utilities-DK8cwA_F.js";import"./ClearPropsContext-CZ_w58Ag.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),Ir={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const e=async h=>{await d(5e3),E(h)},u=p({defaultValues:{user:""}}),l=F();return r.jsx(c,{form:u,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(l,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},t={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Pr as __namedExportsOrder,Ir as default};
