import{j as r,r as F}from"./iframe-CgeYxcj8.js";import{a,u as l,F as d,t as O,R as h,S as x}from"./ResetButton-Cs7EEVT-.js";import{L as t}from"./Label-CIGJVOdR.js";import{B as u}from"./Button-DR_1qYQ2.js";import{S as g}from"./Section-C3AA-XhZ.js";import{A as v}from"./ActionGroup-SAvPHs6u.js";import{s as c}from"./Action-DlDUTAjM.js";import{S as s}from"./Select-b_kPVnkS.js";import{O as e}from"./Option-CgstXJ_I.js";import{F as S}from"./FieldError-CDWzOCc-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CbTKsx_B.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./clsx-B-dksMZM.js";import"./index-SS9EXt6e.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./context-CYaZBhkg.js";import"./useRef-YSwTV-ZZ.js";import"./utils-BH6Z59zo.js";import"./ButtonView-DNnrBHqR.js";import"./browser-DJjrqqpQ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./IconWarning-CNkUjla4.js";import"./remote-CtdlUY7L.js";import"./Text-fEw-hlGn.js";import"./EmulatedBoldText-B9jRyhwt.js";import"./Text-D1ETBO0D.js";import"./LoadingSpinner-Czq10wCK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-x-eiCRcG.js";import"./ProgressBar-FiBC1zNG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CNkOKuMy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DX014ZyL.js";import"./useFocus-BDu45Ayq.js";import"./useFocusRing-BNw3vzKJ.js";import"./useFocusable-UxYwgi7z.js";import"./ContextMenuSection-CBMk4BqO.js";import"./Dialog-LUBljj5i.js";import"./RSPContexts-D3svuC0u.js";import"./OverlayArrow-1gQSfgj3.js";import"./useControlledState-CjPSf5xo.js";import"./Collection-D2EAa2oZ.js";import"./CollectionBuilder-C9W5aaEP.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./Separator-CcrRe_Zj.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./useCollator-Jdxh6jfg.js";import"./FocusScope-CGvyVacv.js";import"./VisuallyHidden-ty8jLyKB.js";import"./getActionGroupSlot-Bx9RQO4h.js";import"./useStatic-BH0JS_W8.js";import"./context-x8law5mp.js";import"./useFieldComponent-DjF7VplI.js";import"./useOverlayController-Dm4XBIwK.js";import"./FieldError-BanRAUWl.js";import"./Form-DrrI3HBf.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DvqDlbIG.js";import"./DragAndDrop-BVu1dFye.js";import"./inertValue-Bhof6zKz.js";import"./useListState-C1JNjoWg.js";import"./useFormValidation-CUbvhZHn.js";import"./useFormReset-CLCQkLzV.js";import"./Popover-DyDWo3ld.js";import"./OverlayContextProvider-DFDHe7pa.js";import"./AlertText-BHVf3OWG.js";import"./AlertIcon-BVEvo4xP.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,b=P("submit"),Hr={title:"Integrations/React Hook Form/Select",component:a,render:()=>{const o=async f=>{await c(1500),b(f)},j=l({defaultValues:{app:"",appDefaultValue:"wordpress",appRequired:""}}),p=O();return r.jsx(d,{form:j,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(p,{name:"app",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appDefaultValue",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appRequired",rules:{required:"Please select an app"},children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(v,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},i={},n={render:()=>{const o=l();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
