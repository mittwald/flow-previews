import{j as r,r as x}from"./iframe-m11uA8ph.js";import{u as a,F as l}from"./Form-CTx7Oukp.js";import{L as o}from"./Label-C80bgPDj.js";import{B as u}from"./Button-Dypt8iw9.js";import{S as j}from"./Section-CbIXCBOB.js";import{A as g}from"./ActionGroup-BiGw5udN.js";import{s as p}from"./Action-DQyOyJ_Y.js";import{N as t}from"./NumberField-COpt-9fQ.js";import{F as b}from"./FieldDescription-CZNBqhnU.js";import{F as E}from"./FieldError-DSWXJfK8.js";import{F as d,t as S}from"./Field-C0bn00yJ.js";import{R as c}from"./ResetButton-okQ69z3w.js";import{S as f}from"./SubmitButton-W85QaJ0-.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BsJUI2_B.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./context-CT-J1WHN.js";import"./Label-BUyu-zI1.js";import"./utils-B2Atf1IZ.js";import"./Hidden-BdAfB0qw.js";import"./IconApp-DUFlag-8.js";import"./remote-D5wxRFjH.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./Text-C8eG2T-4.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Hg1-qkLa.js";import"./ProgressBar-C1zZy1Lx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0Bh9t0W.js";import"./useFocus-DtmXh1uW.js";import"./useFocusRing-faXrGzgs.js";import"./useFocusable-BsiT1idP.js";import"./ContextMenuSection-DB4vcpk0.js";import"./lib-90ocxLs-.js";import"./Dialog-Dzvm1uhq.js";import"./RSPContexts-CBB4rOO8.js";import"./OverlayArrow-DhFl9stJ.js";import"./useControlledState-CQIt1v1r.js";import"./Collection-DuF4MxNY.js";import"./CollectionBuilder-SD0NxqFv.js";import"./SelectionIndicator-DxPJbj4p.js";import"./Separator-IY7J1-ik.js";import"./SelectionManager-mPOWfQXK.js";import"./useEvent-DarMwBx2.js";import"./useCollator-DrH01YYh.js";import"./FocusScope-DjZtu4PZ.js";import"./VisuallyHidden-BQh9j932.js";import"./dynamic-x9dWH5I2.js";import"./getActionGroupSlot-C8INwjTD.js";import"./useStatic-BIf93y4q.js";import"./context-BDVCp3x_.js";import"./useFieldComponent-BhKi7qXb.js";import"./IconChevronDown-BaoYQ2TJ.js";import"./IconChevronUp-Ma3SJyVc.js";import"./IconMinus-Z0s893hH.js";import"./IconPlus-B1uJM_pz.js";import"./useControlledHostValueProps-BPdzbdZO.js";import"./FieldError-BiQycVeh.js";import"./Form-CFmmdLEh.js";import"./Group-CiFhizhu.js";import"./Input-ChfHUhhf.js";import"./useFormValidation-dI-EyrI5.js";import"./useSpinButton-Ba1zgatk.js";import"./useFormReset-CdvwVVbr.js";import"./useTextField-BUjD2wuQ.js";import"./IconDanger-BFD4weFl.js";import"./useRef-ByFa2Cde.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Xr={title:"Integrations/React Hook Form/NumberField",component:d,render:()=>{const e=async F=>{await p(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=S();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Zr as __namedExportsOrder,Xr as default};
