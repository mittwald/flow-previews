import{r as x,j as r}from"./iframe-C0EFV5oe.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./FormRootError-B3JIvYww.js";import{B as d}from"./Button-BqN-Pb_Z.js";import{S as j}from"./Section-DIrXzFYU.js";import{A as b}from"./ActionGroup-EFGw0Sw-.js";import{s as u}from"./ActionBatch-BKp4oeCQ.js";import{C as t}from"./Checkbox-TwhxOWBb.js";import{F as E}from"./FieldError-Dy7dJdZa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DNPsW2Gv.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./clsx-B-dksMZM.js";import"./index-CT8mMXvE.js";import"./useFieldComponent-Becw-9Qv.js";import"./useControlledHostValueProps-CU5liUX5.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./context-8WtOcV7b.js";import"./ActionGroupView-JE6xIUi7.js";import"./Content-DuuHxM4g.js";import"./Heading-CZ1StJHC.js";import"./Heading-B3GE8mEs.js";import"./RSPContexts-DN9Cbb61.js";import"./utils-BH6nMpvt.js";import"./Text-DOyzWtc3.js";import"./browser-yoNZwNd3.js";import"./EmulatedBoldText-12IhiA7q.js";import"./Text-BncBp0aM.js";import"./Modal-C71hUzD9.js";import"./useOverlayController-DSjMGOL2.js";import"./useStatic-BaJc0e4A.js";import"./Overlay-Z2wG9VEn.js";import"./OverlayContextProvider-CfXne1yD.js";import"./LoadingSpinner-AXwRYWdI.js";import"./IconWarning-Xp-mdAXG.js";import"./remote-CJHR20lz.js";import"./Dialog-DJ2-3VRx.js";import"./Button-DHla6nGC.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C2wPJC8Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-KZK5hlL_.js";import"./useFocus-Kf_jHJpa.js";import"./useFocusRing-DMB6fTXa.js";import"./useFocusable-DZVtVQHs.js";import"./OverlayArrow-DU6ABYYb.js";import"./useControlledState-BnTyVv5N.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./FocusScope-BRWQwIZz.js";import"./VisuallyHidden-BtDJhMaH.js";import"./ButtonView-BsJw5G4L.js";import"./Flex-CRYKgtbH.js";import"./useRef-U_kF6P4I.js";import"./ContextMenuSection-CeWW7BcO.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./FieldError-nKMDp4j0.js";import"./Form-3Jlnd_L4.js";import"./useFormValidation-CCqKlLu6.js";import"./useToggleState-exBklheb.js";import"./useFormReset-D0RWbzMx.js";import"./AlertText-dPEDb1m8.js";import"./AlertIcon-C23FUlLu.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Hr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,i as WithFocus,Kr as __namedExportsOrder,Hr as default};
