import{j as r,r as S}from"./iframe-bJ_6fidF.js";import{b as n,u as a,F as p,t as x}from"./Form-Bkk_2nLu.js";import{L as s}from"./Label-jHNg7W3d.js";import{R as u,S as l}from"./ResetButton-LNdHyolG.js";import{B as d}from"./Button-BnsDuM8z.js";import{S as j}from"./Section-BIKV3qXu.js";import{A as b}from"./ActionGroup-CQfsB-uK.js";import{s as c}from"./Action-BNfya_PE.js";import{S as m}from"./SearchField-mrDiUj4q.js";import{F as E}from"./FieldError-D9NzXF8I.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B98QrFwh.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./clsx-B-dksMZM.js";import"./index-DZS8fxXA.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./context-BRobVGip.js";import"./browser-CDYbiXXK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-ITTSHdKZ.js";import"./utils-2JACcOpK.js";import"./Hidden-D-D3cT6t.js";import"./useRef-IidQQV9-.js";import"./IconWarning-BRVy1IKm.js";import"./remote-BGnMaeOw.js";import"./Text-38_GgC7q.js";import"./EmulatedBoldText-0Pd-4dNn.js";import"./Text-BK6SVPNL.js";import"./LoadingSpinner-Da58qKyF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CFn0JrTH.js";import"./ProgressBar-B339qPNf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DgCjbnqL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DUWDHSym.js";import"./useFocus-DCEJi5pX.js";import"./useFocusRing-BfXNN7l5.js";import"./useFocusable-s9iArTw-.js";import"./ContextMenuSection-CO0mnEOv.js";import"./Dialog-DXm38-Rd.js";import"./RSPContexts-Du7Xg6Jz.js";import"./OverlayArrow-BzF-2SH6.js";import"./useControlledState-DiZTTo94.js";import"./Collection-BtgF6RLC.js";import"./CollectionBuilder-CsK04tEC.js";import"./SelectionIndicator-smcarjhT.js";import"./Separator-DIVM-WQV.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./useCollator-BcEDrZTh.js";import"./FocusScope-C6rup_Tq.js";import"./VisuallyHidden-BLAg7qtf.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./useStatic-BZPvcAPs.js";import"./context-CiNdmr3l.js";import"./useFieldComponent-uPh6Au6A.js";import"./useControlledHostValueProps-TNG0Fwfb.js";import"./FieldError-BXkLcNaX.js";import"./Form-u1KpLyfA.js";import"./Group-DIFUJtkh.js";import"./Input-Cc8ouKNt.js";import"./useTextField-BE6Uy-6e.js";import"./useFormReset-nMFTazsC.js";import"./useFormValidation-CfG5OslG.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Tr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,kr as __namedExportsOrder,Tr as default};
