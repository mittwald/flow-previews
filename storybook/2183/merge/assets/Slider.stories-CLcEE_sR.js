import{j as r,r as F}from"./iframe-D0TBPZEN.js";import{u as s,F as a}from"./Form-Btk2VmlI.js";import{L as n}from"./Label-CR6zfnlP.js";import{F as p,t as g}from"./Field-B0iwKt_M.js";import{B as l}from"./Button-KdCw7j9H.js";import{S}from"./Section-BKdAPH38.js";import{A as b}from"./ActionGroup-DugK52bR.js";import{s as u}from"./Action-CXRsCf2v.js";import{S as m}from"./Slider--kh2qdJ-.js";import{F as j}from"./FieldError-DRFaZQOT.js";import{R as d}from"./ResetButton-BMWoklq9.js";import{S as c}from"./SubmitButton-DrlRVWqt.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BxCdUhN6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BJZeh5dT.js";import"./index-BDPp8Owz.js";import"./index-Cimb1y_J.js";import"./useLocalizedStringFormatter-PXbfbnRK.js";import"./context-qsxormAC.js";import"./Label-B3MDDK1W.js";import"./utils-D99Vyo1b.js";import"./Hidden-BgnID2na.js";import"./dynamic-CjDg1E9a.js";import"./IconChevronDown-Bbj4kj6E.js";import"./remote-Dx3xetcp.js";import"./IconX-CN6PeFmZ.js";import"./IconCheck-BEy8YdgR.js";import"./Text-eR7t4eab.js";import"./EmulatedBoldText-D0EAgwUh.js";import"./Text-CculVWnY.js";import"./LoadingSpinner-DmqGaBhS.js";import"./ariaLive-BIzH68Db.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DCdA3b5l.js";import"./ProgressBar-NoiT46hC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXxZPVNQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ccmkzzzz.js";import"./useFocus-DX98yPkU.js";import"./useFocusRing-BVlc85iC.js";import"./useFocusable-BcHjS_A6.js";import"./ContextMenuSection-BFdR_fJ6.js";import"./lib-90ocxLs-.js";import"./Dialog-iVAnmgSo.js";import"./RSPContexts-CV0e_82S.js";import"./OverlayArrow-CuTWjvt2.js";import"./useControlledState-3iFUkpdV.js";import"./Collection-CLyoYIQ6.js";import"./CollectionBuilder-Dei-INuS.js";import"./SelectionIndicator-BBQRBzIb.js";import"./Separator-Cr3smolU.js";import"./SelectionManager-B6gd3fvk.js";import"./useEvent-pwKWzrmw.js";import"./useCollator-CtMATBZL.js";import"./FocusScope-CRIWFmvd.js";import"./VisuallyHidden-C_1XSOyM.js";import"./getActionGroupSlot-5-XTFZFu.js";import"./useStatic-DuuDvcGk.js";import"./context-Dojx0CKD.js";import"./IconMinus-XWMVcaFF.js";import"./IconPlus-D4S4U79I.js";import"./useFieldComponent-DYlCWX6Y.js";import"./useFormReset-VuRi1k16.js";import"./FieldError-Cjpxpmri.js";import"./IconDanger-CMO1pm9n.js";import"./useRef-CJ17_AT7.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:p,render:()=>{const t=async x=>{await u(1500),E(x)},f=s({defaultValues:{storage:50}}),h=g();return r.jsx(a,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=s();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=s();return r.jsxs(a,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <Slider formatOptions={{
        style: "unit",
        unit: "gigabyte"
      }} minValue={10} maxValue={100} isInvalid>
          <Label>Storage</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,e as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
