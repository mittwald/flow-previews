import{j as r,r as S}from"./iframe-CzrbZwQa.js";import{u as n,F as p}from"./Form-BHtAQAp8.js";import{L as m}from"./Label-Dk8Ae2gf.js";import{F as a,t as x}from"./Field-BCepEZVg.js";import{B as d}from"./Button-BnubCMUU.js";import{S as j}from"./Section-C0qr-Gfd.js";import{A as b}from"./ActionGroup-BVCTu7ST.js";import{s as c}from"./Action-8VFfq5fK.js";import{S as s}from"./SearchField-B_8C5jTM.js";import{F as E}from"./FieldError-D0s122Ty.js";import{R as u}from"./ResetButton-CTuCw7_e.js";import{S as l}from"./SubmitButton-D8Q_1tts.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-Q6zcHXxX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8nLM6u8z.js";import"./index-i1sq50ab.js";import"./index-Qzp6tfP6.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./Label-DMBiwPLT.js";import"./utils-Ds7wxNIq.js";import"./Hidden-CPBzEaGa.js";import"./dynamic-BsERbuwe.js";import"./IconApp-BPXZ8R19.js";import"./remote-q4LXxmI0.js";import"./IconX-C4Avmif2.js";import"./IconCheck-DAWvHQav.js";import"./Text-u_8Z_6lo.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./Text-Bpo5VkCj.js";import"./LoadingSpinner-DKQ9WaFR.js";import"./ariaLive-D6gA1Cyb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cr67WOIO.js";import"./ProgressBar-CBKtRO3f.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-FWCEqZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ck2a0me6.js";import"./useFocus-3xUusYsT.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocusable-C0tTc1z6.js";import"./ContextMenuSection-DlbICAeU.js";import"./lib-90ocxLs-.js";import"./Dialog-2hzA1Zyr.js";import"./RSPContexts-BXOP7wdA.js";import"./OverlayArrow-QhJyKZol.js";import"./useControlledState-D-hIONgW.js";import"./Collection-DJOD4Ed7.js";import"./CollectionBuilder-D4t-xJzw.js";import"./SelectionIndicator-BDndb0Ze.js";import"./Separator-C-FZVUdq.js";import"./SelectionManager-N2u60-Z6.js";import"./useEvent-q-bdr1zW.js";import"./useCollator-TfVuzSHy.js";import"./FocusScope-Ct7XodZT.js";import"./VisuallyHidden-CUes-LKT.js";import"./getActionGroupSlot-GuEuCuz_.js";import"./useStatic-CooBsGRu.js";import"./context-CO2P6JA_.js";import"./useFieldComponent-DOxHkWVS.js";import"./IconClose-1Vi9D7Rd.js";import"./IconSearch-KZIVFZfk.js";import"./useControlledHostValueProps-tzbGhsFA.js";import"./FieldError-DojfZoQ1.js";import"./Form-AHU_2zi7.js";import"./Group-9f1OsIqJ.js";import"./Input-xD3cu1Ed.js";import"./useTextField-4-P93D0M.js";import"./useFormReset-DxatWkQF.js";import"./useFormValidation-DWC0bBci.js";import"./IconDanger-BVqA44qH.js";import"./useRef-n2Slnt4M.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
