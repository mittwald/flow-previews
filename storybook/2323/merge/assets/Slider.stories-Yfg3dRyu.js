import{r as g,j as r}from"./iframe-Bvl8-Rhq.js";import{a as s,u as a,F as p,R as d,S as c,t as F}from"./ResetButton-C3zAOGNm.js";import{L as n}from"./Label-BVY1ryMc.js";import{B as l}from"./Button-_6nTdRI5.js";import{S}from"./Section-oIxjsMS9.js";import{A as b}from"./ActionGroup-vTKVeA17.js";import{s as u}from"./ActionBatch-TusZCIcz.js";import{S as m}from"./Slider-CgJWLLJg.js";import{F as j}from"./FieldError-BkA2bgrH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-hIR-PLzh.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./clsx-B-dksMZM.js";import"./index-uwiO8q01.js";import"./Overlay-CgTeHkhl.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./OverlayContextProvider-Dyr3lJ1d.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./IconWarning-_TKsX-mO.js";import"./remote-CTLFAioN.js";import"./utils-D7QihGpD.js";import"./Dialog-BAI9Op-m.js";import"./Button-DiDTVCSs.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B5hAF-sV.js";import"./context--xVWQ6Ca.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C7_C1qgD.js";import"./useFocus-DXNpHz9A.js";import"./useFocusRing-gQZwig4O.js";import"./useFocusable-CNuLnnFg.js";import"./RSPContexts-B8aZy59D.js";import"./OverlayArrow-IqXCmbe_.js";import"./useControlledState-B5E2fQyc.js";import"./Collection-Ep3IaGeN.js";import"./CollectionBuilder-B8HmBXk8.js";import"./SelectionIndicator-i35HMeKk.js";import"./Separator-Depa_-5B.js";import"./Text-BaIKemC9.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./useCollator-1R1bRnUk.js";import"./FocusScope-DRyVjtRp.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./VisuallyHidden-ScIHpAUT.js";import"./ActionGroupView-CTEFX79v.js";import"./Content-twBtn99c.js";import"./Heading-CY0V-mNT.js";import"./Heading-1gB4U-P4.js";import"./Text-CBdBop4j.js";import"./browser-B1OJJ6Dj.js";import"./EmulatedBoldText-BoCe5muM.js";import"./Modal-DJXXBtnB.js";import"./ButtonView-D4KdSaST.js";import"./Flex-CFHOPjrr.js";import"./useRef-CSfk6Gqo.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DoPnGH4Z.js";import"./getActionGroupSlot-ConeELan.js";import"./useFieldComponent-D4BbqCv_.js";import"./useFormReset-C0JkbMmh.js";import"./FieldError-Du4MQwEm.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await u(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
