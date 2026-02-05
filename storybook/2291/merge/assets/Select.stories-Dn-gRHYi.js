import{j as r,r as F}from"./iframe-BL1IY_6V.js";import{a,u as l,F as d,t as O,R as h,S as x}from"./ResetButton-BRxvWv3x.js";import{L as t}from"./Label-8Io_X3px.js";import{B as u}from"./Button-B7zQBVb0.js";import{S as g}from"./Section-B_fcZRhb.js";import{A as v}from"./ActionGroup-CBsQTCAe.js";import{s as c}from"./Action-BftMxRJh.js";import{S as s}from"./Select-lsBy2Cy9.js";import{O as e}from"./Option-Dw8ipFOC.js";import{F as S}from"./FieldError-D0yWaYHs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dn3YQ50F.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./clsx-B-dksMZM.js";import"./index-Cr6jOlTO.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./useRef-wA2SAyNt.js";import"./utils-GyL2rjZN.js";import"./ButtonView-DNg_Qy4d.js";import"./browser-DogRo3Wh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./LoadingSpinner-BFVS5fU_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CHtMceZn.js";import"./ProgressBar-DK1MtX49.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CxRwZ9-L.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocusable-CUtc6O_Q.js";import"./ContextMenuSection-JBlJYK6m.js";import"./Dialog-CDLoJFKu.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./useControlledState-CA6yhcg7.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./useStatic-BujRUGzM.js";import"./context-Cv8xNoZb.js";import"./useFieldComponent-oZ5IqIdY.js";import"./useOverlayController-D_GPxB6v.js";import"./FieldError-CCCCRqJ9.js";import"./Form-Ca3ASx7C.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DHF0I4gN.js";import"./DragAndDrop-CuWEZ27e.js";import"./inertValue-DhWGUsq-.js";import"./useListState-gHFEyFVt.js";import"./useFormValidation-DCrH4OQY.js";import"./useFormReset-C4J5P-lS.js";import"./Popover-B7Z0vypa.js";import"./OverlayContextProvider-Nf2zCsXY.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,b=P("submit"),Hr={title:"Integrations/React Hook Form/Select",component:a,render:()=>{const o=async f=>{await c(1500),b(f)},j=l({defaultValues:{app:"",appDefaultValue:"wordpress",appRequired:""}}),p=O();return r.jsx(d,{form:j,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(p,{name:"app",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appDefaultValue",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appRequired",rules:{required:"Please select an app"},children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(v,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},i={},n={render:()=>{const o=l();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <Select>
            <Label>Field</Label>
            <Option value="wordpress">WordPress</Option>
            <Option value="typo3">TYPO3</Option>
            <Option value="magento">Magento</Option>
          </Select>
        </Field>
        <Select isInvalid>
          <Label>Field</Label>
          <Option value="wordpress">WordPress</Option>
          <Option value="typo3">TYPO3</Option>
          <Option value="magento">Magento</Option>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Select>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Select>
            <Label>Field</Label>
            <Option value="wordpress">WordPress</Option>
            <Option value="typo3">TYPO3</Option>
            <Option value="magento">Magento</Option>
          </Select>
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{i as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
