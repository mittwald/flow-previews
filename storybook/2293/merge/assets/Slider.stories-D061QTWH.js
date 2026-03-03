import{r as g,j as r}from"./iframe-Dx38AIDT.js";import{a as s,u as a,F as p,R as d,S as c,t as F}from"./ResetButton-D7LUbAoI.js";import{L as n}from"./Label-lvpVoRBR.js";import{B as l}from"./Button-Bhwtl7lS.js";import{S}from"./Section-CzQEEFga.js";import{A as b}from"./ActionGroup-CluBBM4L.js";import{s as u}from"./ActionBatch-B-iA-QhY.js";import{S as m}from"./Slider-DQ8BHQ51.js";import{F as j}from"./FieldError-DY7Z21GR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cw331Sxy.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./clsx-B-dksMZM.js";import"./index-C4zw0wF6.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./context-CRsgLXVa.js";import"./ActionGroupView-RMB2K6y-.js";import"./Content-DSBqSoeM.js";import"./Heading-z0nw7kl0.js";import"./Heading-BiABk9m9.js";import"./RSPContexts-DnJfGcBy.js";import"./utils-uxa8p5vl.js";import"./Text-stRMORLN.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./Text-CN5O_J5f.js";import"./Modal-0SZ3rvM2.js";import"./useOverlayController-Cqh70DsD.js";import"./useStatic-CD9yQ0OW.js";import"./Overlay-Dc_wkWXh.js";import"./OverlayContextProvider-tTA2mi55.js";import"./LoadingSpinner-CAXp-11u.js";import"./IconWarning-tem5fYZU.js";import"./remote-C7_Ru_dB.js";import"./Dialog-BIvPa65M.js";import"./Button-DXXdMML6.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BU6JmZbW.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useFocusable-CIjhaoEP.js";import"./OverlayArrow-DXkjfcol.js";import"./useControlledState-BekZOXin.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./VisuallyHidden-ma9EryWn.js";import"./ButtonView-CU_3hWkX.js";import"./Flex-CUcKFbzJ.js";import"./useRef-BQ2mDf6F.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Bnn5st86.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./useFieldComponent-CxTx8kf3.js";import"./useFormReset-DiledHxM.js";import"./FieldError-Cjk2dDkd.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await u(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
