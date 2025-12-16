import{j as r,r as S}from"./iframe-BFixO3jI.js";import{u as n,F as p}from"./Form-CCXxtzXF.js";import{L as m}from"./Label-DDQhNyeb.js";import{F as a,t as x}from"./Field-DYUiszqZ.js";import{B as d}from"./Button-yJ8r8LHg.js";import{S as j}from"./Section-t5FnDHfW.js";import{A as b}from"./ActionGroup-IxKHIUSR.js";import{s as c}from"./Action-oG95m3o9.js";import{S as s}from"./SearchField-n7jTFz9I.js";import{F as E}from"./FieldError-DNu2tCaK.js";import{R as u}from"./ResetButton-Cks5zUP9.js";import{S as l}from"./SubmitButton-BOOIKePr.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CbH1E9WO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./Label-dlScXtXx.js";import"./utils-DlL1jtSe.js";import"./Hidden-eVS00tin.js";import"./dynamic-hYW7P0NC.js";import"./IconApp-DCuSf9pl.js";import"./remote-DXDa28-R.js";import"./IconX-Od5S_TA6.js";import"./IconCheck-zO03gOoY.js";import"./Text-ZinnvgDr.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./Text-BnIAmJK7.js";import"./LoadingSpinner-BG4QqZls.js";import"./ariaLive-MQ5ckYPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BpPmVpYb.js";import"./ProgressBar-Dekjp8mr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R7EdTXDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3RLWuiX.js";import"./useFocus-CUhSw6Xa.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocusable-9RTPH9cd.js";import"./ContextMenuSection-B4F_li7n.js";import"./lib-90ocxLs-.js";import"./Dialog-BmhfU4NV.js";import"./RSPContexts-Due0r2TQ.js";import"./OverlayArrow-DpRQz6k4.js";import"./useControlledState-DTavY4xM.js";import"./Collection-Bj9WVIl1.js";import"./CollectionBuilder-DtEqK8JD.js";import"./SelectionIndicator-CPYDzpXH.js";import"./Separator-ClPm6wme.js";import"./SelectionManager-BbesEsUN.js";import"./useEvent-BtXn_qPN.js";import"./useCollator-YeysG0II.js";import"./FocusScope-jWcc3e5S.js";import"./VisuallyHidden-DWlHhef6.js";import"./getActionGroupSlot--aYDVJlg.js";import"./useStatic-CTmMZwD4.js";import"./context-tjjAcI-d.js";import"./useFieldComponent-mJg7O_gG.js";import"./IconClose-B3FcBmBW.js";import"./IconSearch-D8gu01EW.js";import"./useControlledHostValueProps-CqOtxoaB.js";import"./FieldError-CjKulGDW.js";import"./Form-PAQ4bQ0C.js";import"./Group-CzFM72Xs.js";import"./Input-_A_Ox9j0.js";import"./useTextField-B20xVaBF.js";import"./useFormReset-De7QdeR1.js";import"./useFormValidation-B69zYJzr.js";import"./IconDanger--IOlURNT.js";import"./useRef-DL_WCxyN.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
