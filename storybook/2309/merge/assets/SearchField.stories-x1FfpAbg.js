import{r as S,j as r}from"./iframe-BV_gLY1W.js";import{a as n,u as a,F as p,R as u,S as l,t as x}from"./ResetButton-pBI61JFE.js";import{L as s}from"./Label-DSp9Q3qx.js";import{B as d}from"./Button-SSCEZ0RO.js";import{S as j}from"./Section-DFw7sWw1.js";import{A as b}from"./ActionGroup-DGQFtnEO.js";import{s as c}from"./Action-B44IIYnD.js";import{S as m}from"./SearchField-SQzBmlTx.js";import{F as E}from"./FieldError-Du2SwoFV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D0Gso-mt.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./clsx-B-dksMZM.js";import"./index-iDKz2btu.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./context-D0kYsfYD.js";import"./useRef--g3BlvKa.js";import"./utils-pcZMLEVF.js";import"./ButtonView-ByOlINbI.js";import"./browser-RRcj6Eel.js";import"./Label.module-CUYTf9Jc.js";import"./Label-TEYoBhWb.js";import"./Hidden-DpRhW0r1.js";import"./IconWarning-BvnX4fSp.js";import"./remote-DzXnO2Bt.js";import"./Text-B1ZcDWdT.js";import"./EmulatedBoldText-U0Mbqk2D.js";import"./Text-x_iEgbKh.js";import"./LoadingSpinner-DwHnxPWs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BTyL1bMd.js";import"./ProgressBar-d-6uKhr8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BcIwqyBf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cpaxayx2.js";import"./useFocus-BhZlDk36.js";import"./useFocusRing-DHBFiW-v.js";import"./useFocusable-CF0VfUE0.js";import"./ContextMenuSection-uCRJ4fX1.js";import"./Dialog-DuYLlPOJ.js";import"./RSPContexts-C37Ie1k0.js";import"./OverlayArrow-BxTjv8xX.js";import"./useControlledState-D8GCi_t3.js";import"./Collection-B2K0MU6U.js";import"./CollectionBuilder-k5dkf4C0.js";import"./SelectionIndicator-Bw1WJJhz.js";import"./Separator-C5PKpWVh.js";import"./SelectionManager-DIHL1TL9.js";import"./useEvent-B4HwFCuu.js";import"./useCollator-DxbGnjFN.js";import"./FocusScope-Cdk-yaL2.js";import"./VisuallyHidden-282mV7GD.js";import"./getActionGroupSlot-CKRbyaMP.js";import"./useStatic-Bro5j9qe.js";import"./context-DsGc8Cs0.js";import"./useFieldComponent-Ciy1vkCA.js";import"./useControlledHostValueProps-CdAs3b7f.js";import"./FieldError-Q2svFxIr.js";import"./Form-Cc8Ejva8.js";import"./Group-BmpY48KV.js";import"./Input-tiA0LuFc.js";import"./useTextField-UbdMNCYP.js";import"./useFormReset-Ba41Oqje.js";import"./useFormValidation-Bzs4UsOG.js";import"./AlertText-9lAe-Sfe.js";import"./AlertIcon-CdR_G7Yx.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,kr as default};
