import{j as r,r as F}from"./iframe-DkT4d7Ot.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-DTP7uuAe.js";import{B as d}from"./Button-B3KXRm13.js";import{S as x}from"./Section-DxjMaQtB.js";import{A as E}from"./ActionGroup-DuCWyd6d.js";import{s as c}from"./Action-BKfs-erd.js";import{S as m}from"./Switch-5LKlhjSf.js";import{F as j}from"./FieldError-BUQThHV3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-AbOzqnd1.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./clsx-B-dksMZM.js";import"./index-CA8YyeFM.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./context-BhNnKB4w.js";import"./useRef-CEFt68nY.js";import"./utils-up3lG_mb.js";import"./ButtonView-C05B8H85.js";import"./browser-CwBpRuL-.js";import"./IconWarning-K6asu7lY.js";import"./remote-B8vjNxTl.js";import"./Text-CN56Aq7p.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./Text-C_PPHbON.js";import"./LoadingSpinner-DZGxTG7I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DKCc9Jm1.js";import"./ProgressBar-B_-OWJV1.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D_TjIfTk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-loL-ySzv.js";import"./useFocus-Bn0bRGba.js";import"./useFocusRing-Bn6GFEBK.js";import"./useFocusable-oFwI_mrj.js";import"./ContextMenuSection-NCgBu2Na.js";import"./Dialog-DEf0gwvq.js";import"./RSPContexts-rkHdJ27o.js";import"./OverlayArrow-BYxGCDbr.js";import"./useControlledState-B7-cf8QC.js";import"./Collection-B11FEq3B.js";import"./CollectionBuilder-qtEk7bDG.js";import"./SelectionIndicator-B0xJhgeU.js";import"./Separator-DkPkeG73.js";import"./SelectionManager-6QPEfufX.js";import"./useEvent-DJRSX7W0.js";import"./useCollator-5WPUQbPc.js";import"./FocusScope-D5JuRjyj.js";import"./VisuallyHidden-BhWvypZu.js";import"./getActionGroupSlot-DACNE6Gp.js";import"./useStatic-DmZQ70we.js";import"./context-CpYzats6.js";import"./useFieldComponent-FHnXwL7q.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Gm4GrSHl.js";import"./useFormReset-DMhhuJvy.js";import"./FieldError-BIqVWLlF.js";import"./AlertText-n1a7254W.js";import"./AlertIcon-CGIGsQoy.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
