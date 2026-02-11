import{r as F,j as r}from"./iframe-DiUxw81Q.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-DLc-3RhS.js";import{B as d}from"./Button-gnRq8NvL.js";import{S as x}from"./Section-DUwGPO-R.js";import{A as E}from"./ActionGroup-CgTxc8cR.js";import{s as c}from"./Action-D_TEMwel.js";import{S as m}from"./Switch-D5AUOQzr.js";import{F as j}from"./FieldError-DH3i7Cba.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bvqmautb.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./clsx-B-dksMZM.js";import"./index-2ROVwQvu.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./context-si8TSn1j.js";import"./useRef-C5iQicBg.js";import"./utils-BhADjK-H.js";import"./ButtonView-DRbY-aON.js";import"./browser-DhblGL2Q.js";import"./IconWarning-DJftz4M-.js";import"./remote-dRe2-fx5.js";import"./Text-CMit6jNZ.js";import"./EmulatedBoldText-WmP9Wm83.js";import"./Text-CUd3ZjBr.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JQtyulyF.js";import"./ProgressBar-HXLQU2Vm.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-yn1VwYEU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-I-WC2YFt.js";import"./useFocus-DSwjHrh5.js";import"./useFocusRing-BpbrWv_K.js";import"./useFocusable-bbwyacvB.js";import"./ContextMenuSection-CCmic__u.js";import"./Dialog-CJTGGTvx.js";import"./RSPContexts-D4TaMXlQ.js";import"./OverlayArrow-BBITTnz5.js";import"./useControlledState-DDLUXLOw.js";import"./Collection-BtPubrtW.js";import"./CollectionBuilder-CvFvZJ2s.js";import"./SelectionIndicator-BsyJ81fY.js";import"./Separator-CQ3T4lOo.js";import"./SelectionManager-BOTG9Axa.js";import"./useEvent-D_adZsOG.js";import"./useCollator-uFjTzBPf.js";import"./FocusScope-moHWWkwF.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./getActionGroupSlot-DtA40Fi-.js";import"./useStatic-BoyD6q7D.js";import"./context-C7B1j1st.js";import"./useFieldComponent-BFiXxBQU.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BEtMbK80.js";import"./useFormReset-Cz-LaBzR.js";import"./FieldError-BKME6Hw5.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
