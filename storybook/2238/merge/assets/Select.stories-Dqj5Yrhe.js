import{j as r,r as F}from"./iframe-B6FtZzVw.js";import{b as a,u as l,F as d,t as O}from"./Form-C2VhZWpm.js";import{L as t}from"./Label-gGsAWD9A.js";import{R as h,S as x}from"./ResetButton-Ddn1H82r.js";import{B as u}from"./Button-HJgKWCOC.js";import{S as g}from"./Section-D0pkBsBP.js";import{A as v}from"./ActionGroup-_gSv6nMR.js";import{s as c}from"./Action-BQfBXJkE.js";import{S as s}from"./Select-DQ5qQKPu.js";import{O as e}from"./Option-CmbVAF2J.js";import{F as S}from"./FieldError-CuRjPN5X.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-HxtCVU2-.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./clsx-B-dksMZM.js";import"./index-DprtUoGy.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./context-D8VymAHE.js";import"./browser-D2cTR9e8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BRHOOf6S.js";import"./utils-B053wNrY.js";import"./Hidden-BRZRxZbR.js";import"./useRef-BYSeObyQ.js";import"./IconWarning-DEHpO9Uw.js";import"./remote-B6WYv1J0.js";import"./Text-DPYEhwNL.js";import"./EmulatedBoldText-DD0WhK6h.js";import"./Text-Dn3IEVOe.js";import"./LoadingSpinner-DXuLs3WE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DJB2g2P-.js";import"./ProgressBar-WnFa3ztv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CPIz2b8c.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bff_bCDv.js";import"./useFocus-DnpGAVhn.js";import"./useFocusRing-C0rO9rWF.js";import"./useFocusable-CPP8dzW4.js";import"./ContextMenuSection-Hdwk65mt.js";import"./Dialog-CxhUJg_S.js";import"./RSPContexts-Drji9jIz.js";import"./OverlayArrow-SzptHD46.js";import"./useControlledState-ByagjwsX.js";import"./Collection-queVBp1u.js";import"./CollectionBuilder-D0uz5fgl.js";import"./SelectionIndicator-DqsRzLxq.js";import"./Separator-CFp2GX75.js";import"./SelectionManager-CX268vg2.js";import"./useEvent-CIqm2Tiz.js";import"./useCollator-DzvnCMzb.js";import"./FocusScope-Dv-pZR3t.js";import"./VisuallyHidden-kv_mk74c.js";import"./getActionGroupSlot-7zVBiy7G.js";import"./useStatic-Du0weed2.js";import"./context-DELIC-Xh.js";import"./useFieldComponent-BNMXDSB6.js";import"./useOverlayController-B2SRK6I3.js";import"./FieldError-BtAF49NH.js";import"./Form-CujqqqIN.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BwlR2jEV.js";import"./DragAndDrop-yK0AK442.js";import"./inertValue-BkWRKMwY.js";import"./useListState-BQRrxWby.js";import"./useFormValidation-C7j9z4Fo.js";import"./useFormReset-CRRhvvtY.js";import"./Popover-CXHYUzbK.js";import"./OverlayContextProvider-Cz4fsNbA.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,b=P("submit"),Gr={title:"Integrations/React Hook Form/Select",component:a,render:()=>{const o=async f=>{await c(1500),b(f)},j=l({defaultValues:{app:"",appDefaultValue:"wordpress",appRequired:""}}),p=O();return r.jsx(d,{form:j,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(p,{name:"app",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appDefaultValue",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appRequired",rules:{required:"Please select an app"},children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(v,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},i={},n={render:()=>{const o=l();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{i as Default,n as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
