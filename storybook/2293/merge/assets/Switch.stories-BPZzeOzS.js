import{j as r,r as F}from"./iframe-bYrN4iqU.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-DRmRwOi9.js";import{B as d}from"./Button-BXFpqU-p.js";import{S as x}from"./Section-K4GUZgJE.js";import{A as E}from"./ActionGroup-Cgs-Q9B3.js";import{s as c}from"./Action-BReqqCkr.js";import{S as m}from"./Switch-CJhW4ezu.js";import{F as j}from"./FieldError-DELvRCSS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CHbvz_qx.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./clsx-B-dksMZM.js";import"./index-ByZhX1CH.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./context-Hrlbzros.js";import"./useRef-2-y0_1ka.js";import"./utils-B3voqzat.js";import"./ButtonView-Dq6BfzVS.js";import"./browser-CHbB-bBA.js";import"./IconWarning-m_DFVeXI.js";import"./remote-zHy9wvpL.js";import"./Text-Ggj8lIEk.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Text-Dj7c1Gq2.js";import"./LoadingSpinner-jOE_2qaU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmdWdjlP.js";import"./ProgressBar-Df7WbfFD.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHP3pRkH.js";import"./useFocus-DIDqk3LI.js";import"./useFocusRing-D4lo4_Zr.js";import"./useFocusable-fXM7Y9pN.js";import"./ContextMenuSection-BqvB1DY5.js";import"./Dialog-CxLv1-pk.js";import"./RSPContexts-CblVL1A7.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useControlledState-hBcxnaS2.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./VisuallyHidden-DAWjrZx-.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./useStatic-ByHvTm37.js";import"./context-CIgtX0DK.js";import"./useFieldComponent-CM1iSrAB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CM2KRk1e.js";import"./useFormReset-Cb31B_gj.js";import"./FieldError-BBcT2nDa.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
