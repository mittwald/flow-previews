import{j as r,r as F}from"./iframe-DCi2GPXy.js";import{u as n,F as p}from"./Form-BEJ7ZDfr.js";import{B as d}from"./Button-BvlVjfXN.js";import{S}from"./Section-DQ10C63T.js";import{A as x}from"./ActionGroup-BxCfhcrh.js";import{s as a}from"./Action-DSvpN5_w.js";import{S as s}from"./Switch-BHxGp38y.js";import{F as E}from"./FieldError-CX3tsRfV.js";import{F as c,t as j}from"./Field-DrGuRbFu.js";import{R as u}from"./ResetButton-D6Wzkttq.js";import{S as l}from"./SubmitButton-jwhLPFJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-rXh1EgRD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C47PaVwm.js";import"./index-59pzPUD3.js";import"./index-DQE0u8UH.js";import"./IconChevronDown-DONjXQZK.js";import"./remote-BdJtJUco.js";import"./IconX-CUolAjX3.js";import"./IconCheck-r8p9jwIL.js";import"./Text-DKbhm8jI.js";import"./EmulatedBoldText-BEONMvy5.js";import"./Text-X37FrECZ.js";import"./utils-vPyJ8qyD.js";import"./LoadingSpinner-Bfzcx181.js";import"./ariaLive-D6Ygf8dg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D06IazA5.js";import"./context-BTmRaMcH.js";import"./Button-h0z45t9Y.js";import"./ProgressBar-BLHxx7o4.js";import"./Label-DnXzFWpe.js";import"./Hidden-DFhlcUMl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BQBPJRIA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLUDhytQ.js";import"./useFocus-BbmRhFNN.js";import"./useFocusRing-B2V87-QL.js";import"./useFocusable-DMPmR1e2.js";import"./ContextMenuSection-D110vvwB.js";import"./lib-90ocxLs-.js";import"./Dialog-DTMFojiS.js";import"./RSPContexts-BfriozQD.js";import"./OverlayArrow-V_y0Lk3K.js";import"./useControlledState-BQWMCLKx.js";import"./Collection-hz_GKqMW.js";import"./CollectionBuilder-W8-VoKcj.js";import"./SelectionIndicator-DyawlqQX.js";import"./Separator-YH7DVRXu.js";import"./SelectionManager-BP_CiZbZ.js";import"./useEvent-B4FkGbKp.js";import"./useCollator-CMEuEWKP.js";import"./FocusScope-BD5WMWoq.js";import"./VisuallyHidden-DrUI8NEq.js";import"./dynamic-68RthJrk.js";import"./getActionGroupSlot-7vmQNanS.js";import"./useStatic-jalrqC7_.js";import"./context-sCXpQMxk.js";import"./IconCheck-BwekpBh-.js";import"./IconClose-CishZIn3.js";import"./useFieldComponent-D5bCUPLo.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B-3-Mjcg.js";import"./useFormReset-C2pwuPUB.js";import"./FieldError-GB-3lq6u.js";import"./IconDanger-RXl46e71.js";import"./useRef-Bmjm0uMP.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:c,render:()=>{const t=async h=>{await a(5e3),B(h)},o=n({defaultValues:{isEnabled:!1}}),f=j();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(x,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=n();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
