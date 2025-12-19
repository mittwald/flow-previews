import{j as r,r as F}from"./iframe-BVdPrJ3b.js";import{b as n,u as p,F as a,t as S}from"./Form-CP4W0g6V.js";import{R as u,S as l}from"./ResetButton-BMVB6F8i.js";import{B as d}from"./Button-DWZoHS5b.js";import{S as x}from"./Section-B0Q_DjwJ.js";import{A as E}from"./ActionGroup-x2U4gVAf.js";import{s as c}from"./Action-D5COu0gZ.js";import{S as m}from"./Switch-DaD-7JH2.js";import{F as j}from"./FieldError-BeQ9X37c.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-VccpDVll.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./clsx-B-dksMZM.js";import"./index-BWMeLKrj.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./context-D026yTy_.js";import"./browser-DSBfFWZr.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-BEq1Wr11.js";import"./useRef-Dvlzlj1T.js";import"./IconWarning-YADbbYCH.js";import"./remote-CTgJkn4z.js";import"./Text-nQWL8z2r.js";import"./EmulatedBoldText-BVln2yP5.js";import"./Text-CmXVeCCc.js";import"./LoadingSpinner-DBvrX9Qx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCUp5wJP.js";import"./ProgressBar-D7sWQ_td.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CZZK6Myr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DUwPxRbX.js";import"./useFocus-DKH0A8r5.js";import"./useFocusRing-D6WsekYV.js";import"./useFocusable-CP0kX89o.js";import"./ContextMenuSection-97x_J9aj.js";import"./Dialog-BIQQDMqR.js";import"./RSPContexts-Bdb5uPWt.js";import"./OverlayArrow-DJuQPxkq.js";import"./useControlledState-CgIeep-j.js";import"./Collection-BL4wwMNo.js";import"./CollectionBuilder-CV7Ejkkp.js";import"./SelectionIndicator-BRRaId4S.js";import"./Separator-oDuFt3L8.js";import"./SelectionManager-C_oDRx_o.js";import"./useEvent-DCTAoM_e.js";import"./useCollator-CjJjrWZi.js";import"./FocusScope-Bh-KjmdJ.js";import"./VisuallyHidden-BtVtJU_V.js";import"./getActionGroupSlot-l8kcu2OD.js";import"./useStatic-BX7NV0z1.js";import"./context-CCTeyNcb.js";import"./useFieldComponent-Pua8aj4t.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D2AlcaAf.js";import"./useFormReset-DipgmSs2.js";import"./FieldError-BhKmMJaW.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
