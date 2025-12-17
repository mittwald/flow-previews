import{j as r,r as x}from"./iframe-D0TBPZEN.js";import{u as p,F as c}from"./Form-Btk2VmlI.js";import{F as a,t as F}from"./Field-B0iwKt_M.js";import{B as d}from"./Button-KdCw7j9H.js";import{S as j}from"./Section-BKdAPH38.js";import{A as b}from"./ActionGroup-DugK52bR.js";import{s as u}from"./Action-CXRsCf2v.js";import{C as o}from"./Checkbox-COGg4ORh.js";import{F as E}from"./FieldError-DRFaZQOT.js";import{R as l}from"./ResetButton-BMWoklq9.js";import{S as f}from"./SubmitButton-DrlRVWqt.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BxCdUhN6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-CjDg1E9a.js";import"./flowComponent-BJZeh5dT.js";import"./index-BDPp8Owz.js";import"./clsx-B-dksMZM.js";import"./index-Cimb1y_J.js";import"./useLocalizedStringFormatter-PXbfbnRK.js";import"./context-qsxormAC.js";import"./IconChevronDown-Bbj4kj6E.js";import"./remote-Dx3xetcp.js";import"./IconX-CN6PeFmZ.js";import"./IconCheck-BEy8YdgR.js";import"./Text-eR7t4eab.js";import"./EmulatedBoldText-D0EAgwUh.js";import"./Text-CculVWnY.js";import"./utils-D99Vyo1b.js";import"./LoadingSpinner-DmqGaBhS.js";import"./ariaLive-BIzH68Db.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DCdA3b5l.js";import"./ProgressBar-NoiT46hC.js";import"./Label-B3MDDK1W.js";import"./Hidden-BgnID2na.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXxZPVNQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ccmkzzzz.js";import"./useFocus-DX98yPkU.js";import"./useFocusRing-BVlc85iC.js";import"./useFocusable-BcHjS_A6.js";import"./ContextMenuSection-BFdR_fJ6.js";import"./lib-90ocxLs-.js";import"./Dialog-iVAnmgSo.js";import"./RSPContexts-CV0e_82S.js";import"./OverlayArrow-CuTWjvt2.js";import"./useControlledState-3iFUkpdV.js";import"./Collection-CLyoYIQ6.js";import"./CollectionBuilder-Dei-INuS.js";import"./SelectionIndicator-BBQRBzIb.js";import"./Separator-Cr3smolU.js";import"./SelectionManager-B6gd3fvk.js";import"./useEvent-pwKWzrmw.js";import"./useCollator-CtMATBZL.js";import"./FocusScope-CRIWFmvd.js";import"./VisuallyHidden-C_1XSOyM.js";import"./getActionGroupSlot-5-XTFZFu.js";import"./useStatic-DuuDvcGk.js";import"./context-Dojx0CKD.js";import"./IconCheckboxEmpty-CvOTFxAP.js";import"./useFieldComponent-DYlCWX6Y.js";import"./FieldError-Cjpxpmri.js";import"./Form-D2JDP56m.js";import"./useFormValidation-RMTjWMUG.js";import"./useToggleState-DSjiQG_a.js";import"./useFormReset-VuRi1k16.js";import"./IconDanger-CMO1pm9n.js";import"./useRef-CJ17_AT7.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:a,render:()=>{const t=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Vr as default};
