import{j as r,r as S}from"./iframe-BTx5vfX7.js";import{u as n,F as p}from"./Form-BJsxvJji.js";import{L as m}from"./Label-D_U9lVoj.js";import{F as a,t as x}from"./Field-Byx7yqoA.js";import{B as d}from"./Button-D0j5fRAE.js";import{S as j}from"./Section-Cwd5koeW.js";import{A as b}from"./ActionGroup-BRc6QQmr.js";import{s as c}from"./Action-CSkp_lnv.js";import{S as s}from"./SearchField-BKx-FWYh.js";import{F as E}from"./FieldError-z-ClA5kd.js";import{R as u}from"./ResetButton-C1Ps8PPd.js";import{S as l}from"./SubmitButton-Cb8N2zXt.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-D9-bvGMx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQbG36RI.js";import"./index-CD1bc2Uf.js";import"./index-Cy86CRop.js";import"./useLocalizedStringFormatter-BiBfXFe3.js";import"./context-B8-2fWdM.js";import"./Label-nt-Mf4T_.js";import"./utils-Rd_MYUg3.js";import"./Hidden-B6Npv2sL.js";import"./dynamic-D8ImZldj.js";import"./IconChevronDown-Bn-1yhHQ.js";import"./remote-CDkUNGK4.js";import"./IconX-DrrrdYIY.js";import"./IconCheck-C5Vwpnc3.js";import"./Text-DtYTBG7c.js";import"./EmulatedBoldText-B89XKop2.js";import"./Text-LwG1QgpY.js";import"./LoadingSpinner-Dr6BVqO2.js";import"./ariaLive-BGIgGOOV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D8R90X95.js";import"./ProgressBar-DnkhtDlt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CAHdnPVW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g9jBnoDE.js";import"./useFocus-DM7IXQDx.js";import"./useFocusRing-DjSlkPuN.js";import"./useFocusable-_zqulMQl.js";import"./ContextMenuSection-QYYvFEyc.js";import"./lib-90ocxLs-.js";import"./Dialog-CQOoDKQ_.js";import"./RSPContexts-BtkGYzrU.js";import"./OverlayArrow-eT6vjoGK.js";import"./useControlledState-DNSedTkS.js";import"./Collection-Bq23K6rA.js";import"./CollectionBuilder-BJtlCmWC.js";import"./SelectionIndicator-BGe0ubEQ.js";import"./Separator-hpMdbhNe.js";import"./SelectionManager-ix7t88Nr.js";import"./useEvent-B9LXMUdK.js";import"./useCollator-BFlHC0Dr.js";import"./FocusScope-ConnSCr6.js";import"./VisuallyHidden-xosq-5v9.js";import"./getActionGroupSlot-D_UK-737.js";import"./useStatic-BtxQ9m_K.js";import"./context-q9yNmKLz.js";import"./useFieldComponent-a0kyTMto.js";import"./IconClose-Bj736QyJ.js";import"./IconSearch-CjlRYwWB.js";import"./useControlledHostValueProps-DL2SxzgW.js";import"./FieldError-I1Bua9KH.js";import"./Form-BpaxdIp-.js";import"./Group-C7X32I-5.js";import"./Input-DfioYz8I.js";import"./useTextField-ClY4yZY-.js";import"./useFormReset-C2fqGBKA.js";import"./useFormValidation-CWpL65wq.js";import"./IconDanger-C580gt5j.js";import"./useRef-xHYciXoC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
