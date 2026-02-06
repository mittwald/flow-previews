import{j as r,r as F}from"./iframe-bYrN4iqU.js";import{a,u as l,F as d,t as O,R as h,S as x}from"./ResetButton-DRmRwOi9.js";import{L as t}from"./Label-CPmhF0es.js";import{B as u}from"./Button-BXFpqU-p.js";import{S as g}from"./Section-K4GUZgJE.js";import{A as v}from"./ActionGroup-Cgs-Q9B3.js";import{s as c}from"./Action-BReqqCkr.js";import{S as s}from"./Select-CO5Dnl9F.js";import{O as e}from"./Option-BYvTQT1O.js";import{F as S}from"./FieldError-DELvRCSS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CHbvz_qx.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./clsx-B-dksMZM.js";import"./index-ByZhX1CH.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./context-Hrlbzros.js";import"./useRef-2-y0_1ka.js";import"./utils-B3voqzat.js";import"./ButtonView-Dq6BfzVS.js";import"./browser-CHbB-bBA.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./IconWarning-m_DFVeXI.js";import"./remote-zHy9wvpL.js";import"./Text-Ggj8lIEk.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Text-Dj7c1Gq2.js";import"./LoadingSpinner-jOE_2qaU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmdWdjlP.js";import"./ProgressBar-Df7WbfFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHP3pRkH.js";import"./useFocus-DIDqk3LI.js";import"./useFocusRing-D4lo4_Zr.js";import"./useFocusable-fXM7Y9pN.js";import"./ContextMenuSection-BqvB1DY5.js";import"./Dialog-CxLv1-pk.js";import"./RSPContexts-CblVL1A7.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useControlledState-hBcxnaS2.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./VisuallyHidden-DAWjrZx-.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./useStatic-ByHvTm37.js";import"./context-CIgtX0DK.js";import"./useFieldComponent-CM1iSrAB.js";import"./useOverlayController-DrRVhmF6.js";import"./FieldError-BBcT2nDa.js";import"./Form-RNfZ8NGW.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dblti9Xp.js";import"./DragAndDrop-BCMK0erc.js";import"./inertValue-KXiy9Ppg.js";import"./useListState-DlVO5HCC.js";import"./useFormValidation-CAwH-_ip.js";import"./useFormReset-Cb31B_gj.js";import"./Popover-LLtPuoZ9.js";import"./OverlayContextProvider-CcBeb8cT.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,b=P("submit"),Hr={title:"Integrations/React Hook Form/Select",component:a,render:()=>{const o=async f=>{await c(1500),b(f)},j=l({defaultValues:{app:"",appDefaultValue:"wordpress",appRequired:""}}),p=O();return r.jsx(d,{form:j,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(p,{name:"app",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appDefaultValue",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appRequired",rules:{required:"Please select an app"},children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(v,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},i={},n={render:()=>{const o=l();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
