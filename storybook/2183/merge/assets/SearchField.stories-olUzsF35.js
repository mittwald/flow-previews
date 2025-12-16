import{j as r,r as S}from"./iframe-C0Xzz6Xl.js";import{u as n,F as p}from"./Form-BfgXYtPL.js";import{L as m}from"./Label-B2dU-Foq.js";import{F as a,t as x}from"./Field-DTxkV_LC.js";import{B as d}from"./Button-D6SK2KLv.js";import{S as j}from"./Section-5zw9Z7q2.js";import{A as b}from"./ActionGroup-C9tEr64z.js";import{s as c}from"./Action-BlB31QBr.js";import{S as s}from"./SearchField-DkLeYrAg.js";import{F as E}from"./FieldError-COJQpxO2.js";import{R as u}from"./ResetButton-3SEBVdnD.js";import{S as l}from"./SubmitButton-BPi9gjAx.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-GRuvXKoj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ds2Zpckn.js";import"./index-BvD-rn0f.js";import"./index-BkQRYDSQ.js";import"./useLocalizedStringFormatter-JxxzEpeY.js";import"./context-D7OeR9su.js";import"./Label-CKDZcwiZ.js";import"./utils-DFqauJju.js";import"./Hidden-C5gaELfT.js";import"./dynamic-B_nxzmOn.js";import"./IconChevronDown-CArgk7t7.js";import"./remote-Dsm2RjO6.js";import"./IconX-CHnO5RjF.js";import"./IconCheck-ScVw6CHm.js";import"./Text-BUGgmeAk.js";import"./EmulatedBoldText-Bu7fFWiW.js";import"./Text-DHURGNQD.js";import"./LoadingSpinner-BQ76BTg3.js";import"./ariaLive-QI1POo56.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-6QRSCQME.js";import"./ProgressBar-CO9uG_4l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Zu9XfwEA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5FukuHow.js";import"./useFocus-B1cKxXv-.js";import"./useFocusRing-Bftxxd_V.js";import"./useFocusable-RbNM5_qn.js";import"./ContextMenuSection-CuOhHuwr.js";import"./lib-90ocxLs-.js";import"./Dialog-DXKvHJZX.js";import"./RSPContexts-xpSy9BW_.js";import"./OverlayArrow-CpBfJzRQ.js";import"./useControlledState-DnOVZzTA.js";import"./Collection-BflGVmPS.js";import"./CollectionBuilder-D_O-sn_C.js";import"./SelectionIndicator-C8D-p8dY.js";import"./Separator-D5lpfI0l.js";import"./SelectionManager-B3HFpuo-.js";import"./useEvent-CecaYo_j.js";import"./useCollator-BDv8d74S.js";import"./FocusScope-ClGhoguJ.js";import"./VisuallyHidden-DF-QcwIB.js";import"./getActionGroupSlot-BcOhbfZF.js";import"./useStatic-BdnZkR9g.js";import"./context-Cc_BWEb7.js";import"./useFieldComponent-BRIXb0CQ.js";import"./IconClose-GBtiKbvx.js";import"./IconSearch-BRMbp9Pp.js";import"./useControlledHostValueProps-BeTsIibq.js";import"./FieldError-D1TN1uH_.js";import"./Form-DJAYx_sb.js";import"./Group-BpFeMFVu.js";import"./Input-rZfax9iy.js";import"./useTextField-Cj_XPZw1.js";import"./useFormReset-BXb8b3rI.js";import"./useFormValidation-D4H7vgpB.js";import"./IconDanger-Dkbk0FFN.js";import"./useRef-BKT5_v6o.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
