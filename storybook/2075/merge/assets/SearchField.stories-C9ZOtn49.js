import{j as r,r as f}from"./iframe-C9dYfgSf.js";import{a,u as p,F as c,t as F}from"./Form-BmEbV8bf.js";import{L as s}from"./Label-huPJyomh.js";import{B as m}from"./Button-RNpKkVK8.js";import{S}from"./Section-DQdw2BcZ.js";import{A as x}from"./ActionGroup-DjfN3Zb7.js";import{s as d}from"./Action-BrSPa5cY.js";import{S as n}from"./SearchField-NwDr-Q2B.js";import{F as j}from"./useFieldComponent-Br5YSvi-.js";import"./index-nuYtCEEu.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./clsx-B-dksMZM.js";import"./index-DbMX5jmM.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./context-iM_q7ty8.js";import"./browser-CNYhznL3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-HJzRYjqm.js";import"./utils-CO6LnGLR.js";import"./Hidden-C5ZQOCSQ.js";import"./IconWarning-fVXPK3i1.js";import"./Text-DeJ4PaiG.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./Text-CQ7Fwsu6.js";import"./LoadingSpinner-DDIQ3dza.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CD1zJvoj.js";import"./ProgressBar-BM6quT-y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DpM9fuaR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlhdQGL7.js";import"./useFocus-xkgg1n29.js";import"./useFocusRing-29NBTIcT.js";import"./useFocusable-U5sjNWcc.js";import"./ContextMenuSection-1UGXIKfR.js";import"./Dialog-W7ChNaVu.js";import"./RSPContexts-BkJpVpLi.js";import"./OverlayArrow-CkkZdON1.js";import"./useControlledState-DlEEU1a1.js";import"./Collection-BLbQf80v.js";import"./CollectionBuilder-tXiCZVVh.js";import"./SelectionIndicator-BcmkxpDt.js";import"./Separator-j1ISyAzV.js";import"./SelectionManager-jzyqiCAr.js";import"./useEvent-D_pA9wfR.js";import"./useCollator-C7M5jLo1.js";import"./FocusScope-BDFIEW4R.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./dynamic-4HLWwwwW.js";import"./getActionGroupSlot-CRNg2W87.js";import"./useStatic-BaiCJrRH.js";import"./context-BXzGXLkM.js";import"./ReactAriaControlledValueFix-1U2pzmCq.js";import"./Form-CYcFTCJ6.js";import"./Group-DC27XkzE.js";import"./Input-B4cpKRwG.js";import"./useTextField-fnhO15Be.js";import"./useFormReset-CCon2GTP.js";import"./useFormValidation-cSt72451.js";import"./react-children-utilities-DAjt5CEG.js";import"./ClearPropsContext-oIIvwL5Y.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),Ir={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const e=async h=>{await d(5e3),E(h)},u=p({defaultValues:{user:""}}),l=F();return r.jsx(c,{form:u,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(l,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},t={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
