import{j as r,r as S}from"./iframe-BL1IY_6V.js";import{a as n,u as a,F as p,t as x,R as u,S as l}from"./ResetButton-BRxvWv3x.js";import{L as s}from"./Label-8Io_X3px.js";import{B as d}from"./Button-B7zQBVb0.js";import{S as j}from"./Section-B_fcZRhb.js";import{A as b}from"./ActionGroup-CBsQTCAe.js";import{s as c}from"./Action-BftMxRJh.js";import{S as m}from"./SearchField-x1FE4OYf.js";import{F as E}from"./FieldError-D0yWaYHs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dn3YQ50F.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./clsx-B-dksMZM.js";import"./index-Cr6jOlTO.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./useRef-wA2SAyNt.js";import"./utils-GyL2rjZN.js";import"./ButtonView-DNg_Qy4d.js";import"./browser-DogRo3Wh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./LoadingSpinner-BFVS5fU_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CHtMceZn.js";import"./ProgressBar-DK1MtX49.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CxRwZ9-L.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocusable-CUtc6O_Q.js";import"./ContextMenuSection-JBlJYK6m.js";import"./Dialog-CDLoJFKu.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./useControlledState-CA6yhcg7.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./useStatic-BujRUGzM.js";import"./context-Cv8xNoZb.js";import"./useFieldComponent-oZ5IqIdY.js";import"./useControlledHostValueProps-BUMS7H49.js";import"./FieldError-CCCCRqJ9.js";import"./Form-Ca3ASx7C.js";import"./Group-DzRbvT54.js";import"./Input-BFv5VDBN.js";import"./useTextField-vHdyh5zn.js";import"./useFormReset-C4J5P-lS.js";import"./useFormValidation-DCrH4OQY.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,kr as default};
