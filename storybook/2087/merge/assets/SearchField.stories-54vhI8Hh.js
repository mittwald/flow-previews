import{j as r,r as f}from"./iframe-DwkHntCQ.js";import{a,u as p,F as c,t as F}from"./Form-YW79t4FO.js";import{L as s}from"./Label-IsfDEsPh.js";import{B as m}from"./Button-DN4_LEM9.js";import{S}from"./Section-Cq1uXunU.js";import{A as x}from"./ActionGroup-BUhBVZaF.js";import{s as d}from"./Action-BTZgUlHV.js";import{S as n}from"./SearchField-VAH59LxH.js";import{F as j}from"./useFieldComponent-DTLstJQQ.js";import"./index-nuYtCEEu.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./clsx-B-dksMZM.js";import"./index-Cx9MYi32.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./context-BkqugFd7.js";import"./browser-DfU0u7Y9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./VisuallyHidden-CVpyzdGa.js";import"./useFocusWithin-tqcFW1Po.js";import"./utils-BgD92WZP.js";import"./Label-CkXLKyn5.js";import"./utils-Di7WFWpe.js";import"./Hidden-CTKHA4Af.js";import"./IconWarning-CscgxAB5.js";import"./Text-DBgNVic9.js";import"./EmulatedBoldText-CNqdjroB.js";import"./Text-BtFh1iC6.js";import"./LoadingSpinner-Bd24wSd4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BrfRNilt.js";import"./ProgressBar-BJChhODk.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DPc8RWv0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BCP8B4jj.js";import"./useFocus-GoSUCcJ3.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./ContextMenuSection-BIxoue0C.js";import"./Dialog-Cj1dv_FM.js";import"./RSPContexts-CHr_tkrx.js";import"./OverlayArrow-BCGgH0Vq.js";import"./useControlledState-DyDKUpf4.js";import"./Collection-C9EPSj0q.js";import"./CollectionBuilder-CpTUcuaV.js";import"./SelectionIndicator-BmVEKeRD.js";import"./Separator-D5X37L1x.js";import"./SelectionManager-BDJUyJ7N.js";import"./useEvent-N-KGhH9j.js";import"./useCollator-DA-keOw9.js";import"./FocusScope-wRqNTiuk.js";import"./dynamic-A00wcWEh.js";import"./getActionGroupSlot-HBCgi1hX.js";import"./useStatic-BqeeL3zA.js";import"./context-DyX3upIJ.js";import"./ReactAriaControlledValueFix-DNP-65Ab.js";import"./Form-DZTCn0e1.js";import"./Group-BnJXXyrI.js";import"./Input-CxNU6sM9.js";import"./useTextField-CMn55DJk.js";import"./useFormReset-BUY4HIau.js";import"./useFormValidation-D01J8um2.js";import"./react-children-utilities-C8UOdL4T.js";import"./ClearPropsContext-D7-qaIYX.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),Wr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async h=>{await d(5e3),E(h)},u=p({defaultValues:{user:""}}),l=F();return r.jsx(c,{form:u,onSubmit:o,children:r.jsxs(S,{children:[r.jsx(l,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},t={render:()=>{const o=p();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Dr as __namedExportsOrder,Wr as default};
