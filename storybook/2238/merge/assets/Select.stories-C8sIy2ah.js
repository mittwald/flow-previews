import{j as r,r as F}from"./iframe-DB4UlQ_F.js";import{b as a,u as l,F as d,t as O}from"./Form-CprAAj6n.js";import{L as t}from"./Label-D60b9GFw.js";import{R as h,S as x}from"./ResetButton-Cbtj9u5S.js";import{B as u}from"./Button-DYIAULzM.js";import{S as g}from"./Section-CwTyfRBn.js";import{A as v}from"./ActionGroup-DYVJBbzZ.js";import{s as c}from"./Action-D44Jy6S7.js";import{S as s}from"./Select-CIIvxGOY.js";import{O as e}from"./Option-Bjkw5vsC.js";import{F as S}from"./FieldError-7mdFLW8I.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CewJ3DJw.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./clsx-B-dksMZM.js";import"./index-BSqJ1-JW.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./context-BeH9c2u_.js";import"./browser-CMEWPYW9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CzwPVXKy.js";import"./utils-B6Q0cVYp.js";import"./Hidden-BofTzQhQ.js";import"./useRef-D2qb2cPS.js";import"./IconWarning-D6sMwWyV.js";import"./remote-DOdcl-CB.js";import"./Text-CvhufvNl.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./Text-De_rG2Pz.js";import"./LoadingSpinner-BUzKTNdb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-L-mN_PGj.js";import"./ProgressBar-BtSLHqLj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-bn4O9qyi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDGll4uD.js";import"./useFocus-mLt6Jcka.js";import"./useFocusRing-BToYuWbv.js";import"./useFocusable-BfPamkyW.js";import"./ContextMenuSection-BHyvjJMz.js";import"./Dialog-B4nT46da.js";import"./RSPContexts-Br1rngEm.js";import"./OverlayArrow-BH8gVRz-.js";import"./useControlledState-2lUl0kro.js";import"./Collection-e6TIFm8x.js";import"./CollectionBuilder-DlEUUA4I.js";import"./SelectionIndicator-D87wG6Zb.js";import"./Separator-Bcm53B3D.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./useCollator-BdTHcpkR.js";import"./FocusScope-D57vEPf5.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./useStatic-BsW-2tBw.js";import"./context-b0VtR6po.js";import"./useFieldComponent-Dp69OqtL.js";import"./useOverlayController-BTqpKE5m.js";import"./FieldError-CegzLELq.js";import"./Form-PeScrtUS.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-pzpn9-Uu.js";import"./DragAndDrop-DriDchFx.js";import"./inertValue-BbwHju6S.js";import"./useListState-BISMmbqt.js";import"./useFormValidation-Bt0uBrAk.js";import"./useFormReset-zmgaZOpR.js";import"./Popover-C9bomiWQ.js";import"./OverlayContextProvider-CZHDlMnp.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,b=P("submit"),Gr={title:"Integrations/React Hook Form/Select",component:a,render:()=>{const o=async f=>{await c(1500),b(f)},j=l({defaultValues:{app:"",appDefaultValue:"wordpress",appRequired:""}}),p=O();return r.jsx(d,{form:j,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(p,{name:"app",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appDefaultValue",children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx(p,{name:"appRequired",rules:{required:"Please select an app"},children:r.jsxs(s,{children:[r.jsx(t,{children:"App"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(v,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},i={},n={render:()=>{const o=l();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(t,{children:"Field"}),r.jsx(e,{value:"wordpress",children:"WordPress"}),r.jsx(e,{value:"typo3",children:"TYPO3"}),r.jsx(e,{value:"magento",children:"Magento"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
