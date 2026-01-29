import{j as r,r as F}from"./iframe-DBKYLzDC.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-ssRCuNTw.js";import{B as d}from"./Button-BFOZVdd1.js";import{S as x}from"./Section-D0mpF1xZ.js";import{A as E}from"./ActionGroup-C49teGDs.js";import{s as c}from"./Action-CPy4r2qq.js";import{S as m}from"./Switch-DAvg3yPy.js";import{F as j}from"./FieldError-BpFJPqyd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C4GhTGlQ.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./clsx-B-dksMZM.js";import"./index-Dr37f313.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./useRef-CtdmBt-J.js";import"./utils-BUG9eo0Q.js";import"./ButtonView-CEeOUgiW.js";import"./browser-DhKn1UU2.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./Text-gSr4j5A3.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cx-eUYHB.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZ5qqTtf.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useFocusable-C-cRLAom.js";import"./ContextMenuSection-DLB9FUAU.js";import"./Dialog-DCNro2wm.js";import"./RSPContexts-Dx0AtfwO.js";import"./OverlayArrow-DgtaOzAt.js";import"./useControlledState-CAANpQPW.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./VisuallyHidden-BW797Lc5.js";import"./getActionGroupSlot-BnE40Egr.js";import"./useStatic-DlOT-tNl.js";import"./context-Duo0MdiJ.js";import"./useFieldComponent-DRt8IUS_.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D4OQfVOW.js";import"./useFormReset-BczjDhHV.js";import"./FieldError-DtV1i0Hc.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
