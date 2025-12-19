import{j as r,r as F}from"./iframe-bJ_6fidF.js";import{b as n,u as p,F as a,t as S}from"./Form-Bkk_2nLu.js";import{R as u,S as l}from"./ResetButton-LNdHyolG.js";import{B as d}from"./Button-BnsDuM8z.js";import{S as x}from"./Section-BIKV3qXu.js";import{A as E}from"./ActionGroup-CQfsB-uK.js";import{s as c}from"./Action-BNfya_PE.js";import{S as m}from"./Switch-CzdSkVu_.js";import{F as j}from"./FieldError-D9NzXF8I.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B98QrFwh.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./clsx-B-dksMZM.js";import"./index-DZS8fxXA.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./context-BRobVGip.js";import"./browser-CDYbiXXK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-2JACcOpK.js";import"./useRef-IidQQV9-.js";import"./IconWarning-BRVy1IKm.js";import"./remote-BGnMaeOw.js";import"./Text-38_GgC7q.js";import"./EmulatedBoldText-0Pd-4dNn.js";import"./Text-BK6SVPNL.js";import"./LoadingSpinner-Da58qKyF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CFn0JrTH.js";import"./ProgressBar-B339qPNf.js";import"./Label-ITTSHdKZ.js";import"./Hidden-D-D3cT6t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DgCjbnqL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DUWDHSym.js";import"./useFocus-DCEJi5pX.js";import"./useFocusRing-BfXNN7l5.js";import"./useFocusable-s9iArTw-.js";import"./ContextMenuSection-CO0mnEOv.js";import"./Dialog-DXm38-Rd.js";import"./RSPContexts-Du7Xg6Jz.js";import"./OverlayArrow-BzF-2SH6.js";import"./useControlledState-DiZTTo94.js";import"./Collection-BtgF6RLC.js";import"./CollectionBuilder-CsK04tEC.js";import"./SelectionIndicator-smcarjhT.js";import"./Separator-DIVM-WQV.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./useCollator-BcEDrZTh.js";import"./FocusScope-C6rup_Tq.js";import"./VisuallyHidden-BLAg7qtf.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./useStatic-BZPvcAPs.js";import"./context-CiNdmr3l.js";import"./useFieldComponent-uPh6Au6A.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D6cN2mOT.js";import"./useFormReset-nMFTazsC.js";import"./FieldError-BXkLcNaX.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Pr as __namedExportsOrder,Ar as default};
