import{j as r,r as F}from"./iframe-DnKh_q8B.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-BYXMJKDA.js";import{B as d}from"./Button-B6Zpw5yd.js";import{S as x}from"./Section-BVZq-_Eq.js";import{A as E}from"./ActionGroup-Cv1d3BuW.js";import{s as c}from"./Action-B5Uq12lQ.js";import{S as m}from"./Switch-BVZiks4P.js";import{F as j}from"./FieldError-CQ45DqtA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BE_n_a5m.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./clsx-B-dksMZM.js";import"./index-B5PweBHP.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./context-CXoyow8k.js";import"./useRef-TNLbSJcR.js";import"./utils-BZc8lNcd.js";import"./ButtonView-DGagadkt.js";import"./browser-BUa4T4SN.js";import"./IconWarning-C-jbuAIx.js";import"./remote-k0GnUd79.js";import"./Text-Drd9GdLo.js";import"./EmulatedBoldText-C0uufS8q.js";import"./Text-DobXAK13.js";import"./LoadingSpinner-B--bUkFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX9zCyN4.js";import"./ProgressBar-q35gM_9d.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-jAJMJRpZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CFc3C1mq.js";import"./useFocus-BUIY7lOc.js";import"./useFocusRing-CZAaR2ds.js";import"./useFocusable-z3KWK7qq.js";import"./ContextMenuSection-CPEZCChP.js";import"./Dialog-CHY6jywx.js";import"./RSPContexts-wuQtf2CN.js";import"./OverlayArrow-2vICfEm4.js";import"./useControlledState-Dx9tzWN_.js";import"./Collection-BYEhy5Cw.js";import"./CollectionBuilder-3EWlmXpu.js";import"./SelectionIndicator-B7pzLsJc.js";import"./Separator-C3ZuVTcl.js";import"./SelectionManager-Bvw1Vhun.js";import"./useEvent-DMn0oMqB.js";import"./useCollator-DnWbXdif.js";import"./FocusScope-Ddw08eyC.js";import"./VisuallyHidden-DfZCukwF.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./useStatic-DlxvzgyM.js";import"./context-CSnl0IXM.js";import"./useFieldComponent-ClvUady3.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bu3ZhahO.js";import"./useFormReset-BbinXmMH.js";import"./FieldError-ChpD0sIl.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
