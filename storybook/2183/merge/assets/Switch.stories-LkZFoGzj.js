import{j as r,r as F}from"./iframe-m11uA8ph.js";import{u as n,F as p}from"./Form-CTx7Oukp.js";import{B as d}from"./Button-Dypt8iw9.js";import{S}from"./Section-CbIXCBOB.js";import{A as x}from"./ActionGroup-BiGw5udN.js";import{s as a}from"./Action-DQyOyJ_Y.js";import{S as s}from"./Switch-CqW2EXwf.js";import{F as E}from"./FieldError-DSWXJfK8.js";import{F as c,t as j}from"./Field-C0bn00yJ.js";import{R as u}from"./ResetButton-okQ69z3w.js";import{S as l}from"./SubmitButton-W85QaJ0-.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BsJUI2_B.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./IconApp-DUFlag-8.js";import"./remote-D5wxRFjH.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./Text-C8eG2T-4.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";import"./utils-B2Atf1IZ.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./context-CT-J1WHN.js";import"./Button-Hg1-qkLa.js";import"./ProgressBar-C1zZy1Lx.js";import"./Label-BUyu-zI1.js";import"./Hidden-BdAfB0qw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0Bh9t0W.js";import"./useFocus-DtmXh1uW.js";import"./useFocusRing-faXrGzgs.js";import"./useFocusable-BsiT1idP.js";import"./ContextMenuSection-DB4vcpk0.js";import"./lib-90ocxLs-.js";import"./Dialog-Dzvm1uhq.js";import"./RSPContexts-CBB4rOO8.js";import"./OverlayArrow-DhFl9stJ.js";import"./useControlledState-CQIt1v1r.js";import"./Collection-DuF4MxNY.js";import"./CollectionBuilder-SD0NxqFv.js";import"./SelectionIndicator-DxPJbj4p.js";import"./Separator-IY7J1-ik.js";import"./SelectionManager-mPOWfQXK.js";import"./useEvent-DarMwBx2.js";import"./useCollator-DrH01YYh.js";import"./FocusScope-DjZtu4PZ.js";import"./VisuallyHidden-BQh9j932.js";import"./dynamic-x9dWH5I2.js";import"./getActionGroupSlot-C8INwjTD.js";import"./useStatic-BIf93y4q.js";import"./context-BDVCp3x_.js";import"./IconCheck-CvwQTWda.js";import"./IconClose-CZ6WFvAF.js";import"./useFieldComponent-BhKi7qXb.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CRcJR0-6.js";import"./useFormReset-CdvwVVbr.js";import"./FieldError-BiQycVeh.js";import"./IconDanger-BFD4weFl.js";import"./useRef-ByFa2Cde.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:c,render:()=>{const t=async h=>{await a(5e3),B(h)},o=n({defaultValues:{isEnabled:!1}}),f=j();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(x,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=n();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
