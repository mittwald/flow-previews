import{j as r,r as g}from"./iframe-DzPnzOIh.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-DLA2D0J0.js";import{L as n}from"./Label-Caopyz4i.js";import{B as p}from"./Button-B0xxYjKh.js";import{S}from"./Section-DjVn5x2V.js";import{A as b}from"./ActionGroup-BW-DIp4M.js";import{s as l}from"./Action-D4qqw_zO.js";import{S as m}from"./Slider-CZcU9Q4Z.js";import{F as j}from"./FieldError-CliUFFQL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CR1FGrpS.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./clsx-B-dksMZM.js";import"./index-nNa6hI3H.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./context-D5QDMciq.js";import"./useRef-DTc68hRI.js";import"./utils-DdPADezN.js";import"./ButtonView-DAqv122X.js";import"./browser-DO1on-Lg.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./Text-CgXXsRbz.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Text-CKGruhzq.js";import"./LoadingSpinner-3EdJH7-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CCOKLUK2.js";import"./ProgressBar-BDc0eUXF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DAdMc5BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-COgw0Owx.js";import"./useFocus-lCD3lNhC.js";import"./useFocusRing-h77ik7V4.js";import"./useFocusable-DMy60j_I.js";import"./ContextMenuSection-DfF2Gqpp.js";import"./Dialog-BkygjXx5.js";import"./RSPContexts-0XiJN6Nh.js";import"./OverlayArrow--imbHB5-.js";import"./useControlledState-C5NVaprX.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./useCollator-BX-7yLTW.js";import"./FocusScope-Cit_E5zj.js";import"./VisuallyHidden-C2tKF7nl.js";import"./getActionGroupSlot-BseyWuGA.js";import"./useStatic-B5sjyhg8.js";import"./context-CvuQDK5p.js";import"./useFieldComponent-DttoHSbm.js";import"./useFormReset-D5TocNhH.js";import"./FieldError-BLx5YP6h.js";import"./AlertText-DawifhT6.js";import"./AlertIcon-BAMux0CS.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ar=["Default","WithFieldError","WithFocus"];export{e as Default,o as WithFieldError,i as WithFocus,Ar as __namedExportsOrder,vr as default};
