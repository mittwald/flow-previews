import{r as x,j as r}from"./iframe-C0EFV5oe.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./FormRootError-B3JIvYww.js";import{L as o}from"./Label-Ca7Q5rd0.js";import{B as u}from"./Button-BqN-Pb_Z.js";import{S as g}from"./Section-DIrXzFYU.js";import{A as b}from"./ActionGroup-EFGw0Sw-.js";import{s as p}from"./ActionBatch-BKp4oeCQ.js";import{N as t}from"./NumberField-BEKNJVSi.js";import{F as E}from"./FieldDescription-CAwmr8EY.js";import{F as S}from"./FieldError-Dy7dJdZa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DNPsW2Gv.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./clsx-B-dksMZM.js";import"./index-CT8mMXvE.js";import"./useFieldComponent-Becw-9Qv.js";import"./useControlledHostValueProps-CU5liUX5.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./context-8WtOcV7b.js";import"./ActionGroupView-JE6xIUi7.js";import"./Content-DuuHxM4g.js";import"./Heading-CZ1StJHC.js";import"./Heading-B3GE8mEs.js";import"./RSPContexts-DN9Cbb61.js";import"./utils-BH6nMpvt.js";import"./Text-DOyzWtc3.js";import"./browser-yoNZwNd3.js";import"./EmulatedBoldText-12IhiA7q.js";import"./Text-BncBp0aM.js";import"./Modal-C71hUzD9.js";import"./useOverlayController-DSjMGOL2.js";import"./useStatic-BaJc0e4A.js";import"./Overlay-Z2wG9VEn.js";import"./OverlayContextProvider-CfXne1yD.js";import"./LoadingSpinner-AXwRYWdI.js";import"./IconWarning-Xp-mdAXG.js";import"./remote-CJHR20lz.js";import"./Dialog-DJ2-3VRx.js";import"./Button-DHla6nGC.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C2wPJC8Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-KZK5hlL_.js";import"./useFocus-Kf_jHJpa.js";import"./useFocusRing-DMB6fTXa.js";import"./useFocusable-DZVtVQHs.js";import"./OverlayArrow-DU6ABYYb.js";import"./useControlledState-BnTyVv5N.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./FocusScope-BRWQwIZz.js";import"./VisuallyHidden-BtDJhMaH.js";import"./ButtonView-BsJw5G4L.js";import"./Flex-CRYKgtbH.js";import"./useRef-U_kF6P4I.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CeWW7BcO.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./FieldError-nKMDp4j0.js";import"./Form-3Jlnd_L4.js";import"./Group-Dyn9y5wI.js";import"./Input-CtJ2Z6MU.js";import"./useFormValidation-CCqKlLu6.js";import"./useSpinButton-DdxmEvQc.js";import"./useFormReset-D0RWbzMx.js";import"./useTextField-B-A7vPtw.js";import"./AlertText-dPEDb1m8.js";import"./AlertIcon-C23FUlLu.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
