import{j as r,r as F}from"./iframe-BFixO3jI.js";import{u as s,F as a}from"./Form-CCXxtzXF.js";import{L as n}from"./Label-DDQhNyeb.js";import{F as p,t as g}from"./Field-DYUiszqZ.js";import{B as l}from"./Button-yJ8r8LHg.js";import{S}from"./Section-t5FnDHfW.js";import{A as b}from"./ActionGroup-IxKHIUSR.js";import{s as u}from"./Action-oG95m3o9.js";import{S as m}from"./Slider-CiFmDyPj.js";import{F as j}from"./FieldError-DNu2tCaK.js";import{R as d}from"./ResetButton-Cks5zUP9.js";import{S as c}from"./SubmitButton-BOOIKePr.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CbH1E9WO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./Label-dlScXtXx.js";import"./utils-DlL1jtSe.js";import"./Hidden-eVS00tin.js";import"./dynamic-hYW7P0NC.js";import"./IconApp-DCuSf9pl.js";import"./remote-DXDa28-R.js";import"./IconX-Od5S_TA6.js";import"./IconCheck-zO03gOoY.js";import"./Text-ZinnvgDr.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./Text-BnIAmJK7.js";import"./LoadingSpinner-BG4QqZls.js";import"./ariaLive-MQ5ckYPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BpPmVpYb.js";import"./ProgressBar-Dekjp8mr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R7EdTXDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3RLWuiX.js";import"./useFocus-CUhSw6Xa.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocusable-9RTPH9cd.js";import"./ContextMenuSection-B4F_li7n.js";import"./lib-90ocxLs-.js";import"./Dialog-BmhfU4NV.js";import"./RSPContexts-Due0r2TQ.js";import"./OverlayArrow-DpRQz6k4.js";import"./useControlledState-DTavY4xM.js";import"./Collection-Bj9WVIl1.js";import"./CollectionBuilder-DtEqK8JD.js";import"./SelectionIndicator-CPYDzpXH.js";import"./Separator-ClPm6wme.js";import"./SelectionManager-BbesEsUN.js";import"./useEvent-BtXn_qPN.js";import"./useCollator-YeysG0II.js";import"./FocusScope-jWcc3e5S.js";import"./VisuallyHidden-DWlHhef6.js";import"./getActionGroupSlot--aYDVJlg.js";import"./useStatic-CTmMZwD4.js";import"./context-tjjAcI-d.js";import"./IconMinus-BHCyw0UH.js";import"./IconPlus-Cers5fGb.js";import"./useFieldComponent-mJg7O_gG.js";import"./useFormReset-De7QdeR1.js";import"./FieldError-CjKulGDW.js";import"./IconDanger--IOlURNT.js";import"./useRef-DL_WCxyN.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:p,render:()=>{const t=async x=>{await u(1500),E(x)},f=s({defaultValues:{storage:50}}),h=g();return r.jsx(a,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=s();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=s();return r.jsxs(a,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
