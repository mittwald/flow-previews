import{j as r,r as f}from"./iframe-fd4MG1i8.js";import{a,u as p,F as c,t as F}from"./Form-DdKBNKRS.js";import{L as s}from"./Label-DcZaDq0J.js";import{B as m}from"./Button-VeSKQaWX.js";import{S}from"./Section-BCuosQzF.js";import{A as x}from"./ActionGroup-CZpdRo9u.js";import{s as d}from"./Action-b6bvpWZ7.js";import{S as n}from"./SearchField-Ty_s_oPU.js";import{F as j}from"./useFieldComponent-CTpQ-XZg.js";import"./index-nuYtCEEu.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./clsx-B-dksMZM.js";import"./index-DLSCOdFN.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./context-Dbob8nST.js";import"./browser-Dh_0Zrut.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cas_0aCA.js";import"./utils-Cwcb_ph1.js";import"./Hidden-DL9_D-g9.js";import"./IconWarning-9sqw3U7E.js";import"./Text-Dcd0JdvI.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Text-Ct_tO_6D.js";import"./LoadingSpinner-BL8icCZR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-kSnC9Ww4.js";import"./ProgressBar-ClXxD8qd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DjhpIeNr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-P37V2JO8.js";import"./useFocus-BWTUKGe5.js";import"./useFocusRing-LifWKPgp.js";import"./useFocusable-9_bYGa78.js";import"./ContextMenuSection-Blc2hqiU.js";import"./Dialog-CY6RGe7i.js";import"./RSPContexts-GsdtxIJ1.js";import"./OverlayArrow-CL_DkMYI.js";import"./useControlledState-oGGPnlEt.js";import"./Collection-Di6dMgr3.js";import"./CollectionBuilder-BBm98ofW.js";import"./SelectionIndicator-CThd_G6x.js";import"./Separator-BBkfumaa.js";import"./SelectionManager--Q9mVMbg.js";import"./useEvent-5AoaQB1j.js";import"./useCollator-DNAEXkDs.js";import"./FocusScope-29AKamG2.js";import"./VisuallyHidden-CO0qVHJy.js";import"./dynamic-BVBQ4rgw.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./useStatic-Dbv9nI-W.js";import"./context-BDEE0OGh.js";import"./ReactAriaControlledValueFix-DAVtvYQ3.js";import"./Form-DF5wN6HS.js";import"./Group-DKzOXU5W.js";import"./Input-CYK177a4.js";import"./useTextField-oiKwCWrD.js";import"./useFormReset-NfLpwngh.js";import"./useFormValidation-C8R7XiMh.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),Ir={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const e=async h=>{await d(5e3),E(h)},u=p({defaultValues:{user:""}}),l=F();return r.jsx(c,{form:u,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(l,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},t={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
